function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // 앞에 +를 붙이면 문자가 숫자로 바뀜
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault(); // form의 기본동작 submit을 멈춤
  const formData = new FormData(event.target);
  const eneterdPlayername = formData.get('playername').trim();

  if (!eneterdPlayername) {
    // eneterdPlayername이 빈 문자열인지 체크
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = '이름을 입력하세요!';
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = eneterdPlayername;

  players[editedPlayer - 1].name = eneterdPlayername;

  closePlayerConfig();
}
