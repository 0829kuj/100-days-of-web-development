const inputElement = document.getElementById('product-name');
const remainingElement = document.getElementById('remaining-chars');

const maxAllowedChars = inputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  console.log(enteredTextLength);
  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingElement.classList.add('error');
    inputElement.classList.add('error');
  } else if (remainingCharacters <= 10) {
    remainingElement.classList.add('warning');
    inputElement.classList.add('warning');
    remainingElement.classList.remove('error');
    inputElement.classList.remove('error');
  } else {
    remainingElement.classList.remove('warning');
    inputElement.classList.remove('warning');
  }
}

inputElement.addEventListener('input', updateRemainingCharacters);
