function resetGameStatus() {
  activePlayer = 0;
  currentRound = 0;
  gameIsOver = false;
  gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = 'none';

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = '';
      gameBoardItemElement.classList.remove('disabled');
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('두 플레이어의 이름을 모두 입력해주세요!');
    return;
  }
  resetGameStatus();

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = 'block';
}

function selectGameField(event) {
  if (gameIsOver) {
    return;
  }

  const selectedField = event.target;
  const selectedColum = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColum] > 0) {
    alert('비어있는 영역을 선택해주세요!');
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add('disabled');

  gameData[selectedRow][selectedColum] = activePlayer + 1;
  const winnerId = checkGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function checkGameOver() {
  // 행이 같은지 확인
  for (let i = 0; i < 3; i++) {
    if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]) {
      return gameData[i][0];
    }
  }
  // 열이 같은지 확인
  for (let i = 0; i < 3; i++) {
    if (gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[0][i] === gameData[2][i]) {
      return gameData[0][i];
    }
  }

  // 대각선: 왼쪽 위에서 오른쪽 아래 확인
  for (let i = 0; i < 3; i++) {
    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
      return gameData[0][0];
    }
  }
  // 대각선: 오른쪽 위에서 왼쪽 아래 확인
  for (let i = 0; i < 3; i++) {
    if (gameData[2][0] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]) {
      return gameData[2][0];
    }
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverElement.style.display = 'block';

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
