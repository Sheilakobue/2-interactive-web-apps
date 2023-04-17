const STATUS_MAP = {
    shelf: {
      color: 'green',
      canReserve: true,
      canCheckout: true,
      canCheckIn: false,
    },
    reserved: {
      color: 'blue',
      canReserve: false,
      canCheckout: true,
      canCheckIn: false,
    },
    overdue: {
      color: 'red',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    },
    checkedOut: {
      color: 'orange',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    }
  };
  // Get all the book div elements
  const bookDivs = document.querySelectorAll('div[id^="book"]');
  // Loop over each book div element
  bookDivs.forEach((bookDiv) => {
    // Get the status span and buttons
    const statusSpan = bookDiv.querySelector('.status');
    const reserveBtn = bookDiv.querySelector('.reserve');
    const checkoutBtn = bookDiv.querySelector('.checkout');
    const checkinBtn = bookDiv.querySelector('.checkin');
    // Get the status value and corresponding properties from STATUS_MAP
    const statusVal = statusSpan.textContent.trim().toLowerCase();
    const statusProps = STATUS_MAP[statusVal];
    // Update the color and disabled state of the buttons based on the status properties
    statusSpan.style.color = statusProps.color;
    reserveBtn.disabled = !statusProps.canReserve;
    checkoutBtn.disabled = !statusProps.canCheckout;
    checkinBtn.disabled = !statusProps.canCheckIn;
    // Set the button colors to black and grayscale
    reserveBtn.style.color = reserveBtn.disabled ? 'gray' : 'black';
    checkoutBtn.style.color = checkoutBtn.disabled ? 'gray' : 'black';
    checkinBtn.style.color = checkinBtn.disabled ? 'gray' : 'black';
  });