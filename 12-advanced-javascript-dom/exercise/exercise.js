const inputElement = document.getElementById('product-name');
const remainingElement = document.getElementById('remaining-chars');

const maxAllowedChars = inputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  console.log(enteredTextLength);
  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingElement.textContent = remainingCharacters;
}

inputElement.addEventListener('input', updateRemainingCharacters);
