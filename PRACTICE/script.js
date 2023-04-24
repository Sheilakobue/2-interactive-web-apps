const burgers = {
    original: {
      price: 90,
      ingredients: ['beef patty', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard']
    },
    
    sauce: {
      price: 90,
      ingredients: ['beef patty', 'bacon', 'cheddar cheese', 'onion rings', 'BBQ sauce']
    },
    
    hawaiian: {
      price: 90,
      ingredients: ['chicken patty', 'pineapple', 'teriyaki sauce', 'lettuce', 'tomato']
    }
  };
  
  // Accessing the original burger
  const originalPriceElem = document.getElementById('original-price');
  const originalIngredientsElem = document.getElementById('original-ingredients');
  const originalBurger = burgers.original;
  originalPriceElem.textContent = originalBurger.price;
  originalBurger.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    originalIngredientsElem.appendChild(li);
  });
  
  // Accessing the sauce burger
  const saucePriceElem = document.getElementById('sauce-price');
  const sauceIngredientsElem = document.getElementById('sauce-ingredients');
  const sauceBurger = burgers.sauce;
  saucePriceElem.textContent = sauceBurger.price;
  sauceBurger.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    sauceIngredientsElem.appendChild(li);
  });
  
  // Accessing the Hawaiian burger
  const hawaiianPriceElem = document.getElementById('hawaiian-price');
  const hawaiianIngredientsElem = document.getElementById('hawaiian-ingredients');
  const hawaiianBurger = burgers.hawaiian;
  hawaiianPriceElem.textContent = hawaiianBurger.price;
  hawaiianBurger.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    hawaiianIngredientsElem.appendChild(li);
  });