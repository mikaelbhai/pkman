document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');

  const pacman = document.createElement('div');
  pacman.classList.add('pacman');
  gameBoard.appendChild(pacman);

  const cellSize = 24;
  const gameBoardWidth = gameBoard.offsetWidth;
  const gameBoardHeight = gameBoard.offsetHeight;

  let pacmanX = 0;
  let pacmanY = 0;

  function updatePacmanPosition() {
    pacman.style.transform = `translate(${pacmanX * cellSize}px, ${pacmanY * cellSize}px)`;
  }

  function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    const pacmanSpeed = 1;

    if (key === 'w' && pacmanY > 0) {
      pacmanY -= pacmanSpeed;
    } else if (key === 'a' && pacmanX > 0) {
      pacmanX -= pacmanSpeed;
    } else if (key === 's' && pacmanY < gameBoardHeight / cellSize - 1) {
      pacmanY += pacmanSpeed;
    } else if (key === 'd' && pacmanX < gameBoardWidth / cellSize - 1) {
      pacmanX += pacmanSpeed;
    }

    updatePacmanPosition();
  }

  document.addEventListener('keydown', handleKeyPress);
});
