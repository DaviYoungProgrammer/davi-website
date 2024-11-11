let player1Score = 0;
let player2Score = 0;

// Função para aumentar a pontuação do jogador
function increaseScore(player) {
  if (player === 1) {
    player1Score++;
    document.getElementById("player1-score").textContent = player1Score;
  } else if (player === 2) {
    player2Score++;
    document.getElementById("player2-score").textContent = player2Score;
  }
}

// Função para diminuir a pontuação do jogador
function decreaseScore(player) {
  if (player === 1 && player1Score > 0) {
    player1Score--;
    document.getElementById("player1-score").textContent = player1Score;
  } else if (player === 2 && player2Score > 0) {
    player2Score--;
    document.getElementById("player2-score").textContent = player2Score;
  }
}

// Função para resetar as pontuações
function resetScore() {
  player1Score = 0;
  player2Score = 0;
  document.getElementById("player1-score").textContent = player1Score;
  document.getElementById("player2-score").textContent = player2Score;
  document.getElementById("result").textContent = ""; // Limpa a mensagem de resultado
}

// Função para finalizar o jogo e determinar o vencedor
function endGame() {
  const player1Name = document.getElementById("player1-name").value;
  const player2Name = document.getElementById("player2-name").value;
  let resultMessage = "";

  if (player1Score > player2Score) {
    resultMessage = `${player1Name} ganhou com ${player1Score} pontos!`;
  } else if (player2Score > player1Score) {
    resultMessage = `${player2Name} ganhou com ${player2Score} pontos!`;
  } else {
    resultMessage = "É um empate!";
  }

  document.getElementById("result").textContent = resultMessage;
}
