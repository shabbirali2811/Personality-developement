
document.getElementById('pay-btn').addEventListener('click', function() {
  
  var expiryDate = document.getElementById('expiry-date').value;
  var cvv = document.getElementById('cvv').value;
  var cardHolder = document.getElementById('card-holder').value;
  var errorMessage = document.getElementById('error-message');
  
  // Validation
  if (expiryDate.trim() === '' || cvv.trim() === '' || cardHolder.trim() === '') {
    errorMessage.textContent = 'Please fill in all fields.';
    return;
  }
  
  

  if (!isValidExpiryDate(expiryDate)) {
    errorMessage.textContent = 'Invalid expiry date.';
    return;
  }

  if (!isValidCVV(cvv)) {
    errorMessage.textContent = 'Invalid CVV.';
    return;
  }

  // Payment processing logic goes here
  errorMessage.textContent = '';
  alert('Payment Successful!');
});



function isValidExpiryDate(expiryDate) {
  // Simple expiry date validation, you can use more sophisticated algorithms
  var [month, year] = expiryDate.split('/');
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().slice(-2);
  var currentMonth = currentDate.getMonth() + 1;
  return (parseInt(month) >= 1 && parseInt(month) <= 12) && (parseInt(year) >= currentYear || (parseInt(year) == currentYear && parseInt(month) >= currentMonth));
}

function isValidCVV(cvv) {
  // Simple CVV validation, you can use more sophisticated algorithms
  return /^\d{3}$/.test(cvv);
}
