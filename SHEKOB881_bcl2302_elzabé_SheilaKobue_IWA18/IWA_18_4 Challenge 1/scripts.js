//Imported the exported files from data.js and view.js
import { createOrderData,updateDragging } from "./data.js";

import { createOrderHtml,html,updateDraggingHtml } from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
//used a function handleHelpToggle to retrieves an HTML elements 
//it hides or show a help overlay
const handleHelpToggle = (event) => {
  const overlay = html.help.overlay;
  overlay.show();
  if (event.target === html.help.cancel) {
    overlay.close();
  }
};

//this function shows or hide an "add" overlay
//handleAddToggle function focuses on specific HTML elements, with a parameter (event2)
const handleAddToggle = (event2) => {
  html.other.add.focus();
  const overlay = html.add.overlay;
  overlay.show();
  if (event2.target === html.add.cancel) {
    overlay.close();
    html.add.form.reset();
  }
};
// This function triggers when a form is submitted 
// FormData object, creates new data using a createOrderData()
//creates new HTML using a createOrderHtml()

const handleAddSubmit = (event2) => {
  event2.preventDefault();
  const overlay = html.add.overlay;
  const formData = new FormData(event2.target);
  const data = Object.fromEntries(formData);
  const newData = createOrderData(data);
  const htmlData = createOrderHtml(newData);
  const append = document.querySelector('[data-area="ordered"]');
  event2.target.reset();
  overlay.close();
  append.appendChild(htmlData);
};

//A function that shows or hides an "Edit" overlay. 
//A function that is triggered when an "Edit" form is submitted.

const handleEditToggle = (event2) => {
  const overlay = html.edit.overlay;
  const cancelBtn = html.edit.cancel;
  const input = html.edit.title;
  const select = html.edit.table;
  const option = html.edit.column;

  event2.target.dataset.id ? overlay.show() : undefined;
  const id = event2.target.dataset.id ? event2.target.dataset.id : undefined;
  input.value = event2.target.dataset.id
    ? event2.target.querySelector(".order__title").textContent
    : undefined;
  select.value = event2.target.dataset.id
    ? event2.target.querySelector(".order__value").textContent
    : undefined;
  let section = document.querySelector(`[data-id="${id}"]`);
  option.value = section ? section.closest("section").dataset.area : "";
  if (event2.target === cancelBtn) {
    overlay.close();
  }
  html.edit.delete.id = id;
};

// A function that is triggered when an "Edit" form is submitted
//it retrieves the id of the element to be deleted, removes the element from the page, retrieves the form data using a FormData object, creates new data using a 
const handleEditSubmit = (event2) => {
  event2.preventDefault();
  const idRemove = html.edit.delete.id;
  const orderDelete = document.querySelector(`[data-id="${idRemove}"]`);
  orderDelete.remove();
  const overlay = html.edit.overlay;
  const formData = new FormData(event2.target);
  const data = Object.fromEntries(formData);
  //creates new HTML using a createOrderHtml()
  const newData = createOrderData(data);
  const htmlData = createOrderHtml(newData);
  const appended = document.querySelector(`[data-area="${newData.column}"]`);
  appended.appendChild(htmlData);
  event2.target.reset();
  overlay.close();
};

//A function that is triggered when a "Delete" button is clicked. 
//The function retrieves the id of the element to be deleted,
const handleDelete = (event2) => {
  const idToBeDeleted = html.edit.delete.id;
  const orderToBeDeleted = document.querySelector(
    `[data-id="${idToBeDeleted}"]`
  );
  const overlay = html.edit.overlay;
  orderToBeDeleted.remove();
  overlay.close();
};
// this lines add a click event listener to an HTML element

html.add.cancel.addEventListener("click", handleAddToggle); //
html.other.add.addEventListener("click", handleAddToggle); //
html.add.form.addEventListener("submit", handleAddSubmit); //
html.other.grid.addEventListener("click", handleEditToggle); //
html.edit.cancel.addEventListener("click", handleEditToggle); //
html.edit.form.addEventListener("submit", handleEditSubmit); //
html.edit.delete.addEventListener("click", handleDelete); //
html.help.cancel.addEventListener("click", handleHelpToggle); //
html.other.help.addEventListener("click", handleHelpToggle); //
//Dragging events
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;
  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }
  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};
let dragged;
const handleDragStart = (event2) => {
  dragged = event2.target;
};
const handleDragDrop = (event2) => {
  event2.target.append(dragged);
};
const handleDragEnd = (event2) => {
  const background = event2.target.closest("section");
  background.style.backgroundColor = "";
};

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
  htmlArea.addEventListener("dragstart", handleDragStart);
  htmlArea.addEventListener("drop", handleDragDrop);
  htmlArea.addEventListener("dragend", handleDragEnd);
}