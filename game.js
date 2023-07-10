document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');
  const scoreElement = document.getElementById('score');

  const mazeLayout = [
    // Maze layout goes here, represented by a 2D array
  ];

  const mazeWidth = mazeLayout[0].length;
  const mazeHeight = mazeLayout.length;

  const cellSize = 24;
  const pacmanRadius = 10;

  let pacmanX = 0;
  let pacmanY = 0;
  let score = 0;

  function createMaze() {
    for (let row = 0; row < mazeHeight; row++) {
      for (let col = 0; col < mazeWidth; col++) {
        const cell = document.createElement('div');
        cell.classList.add('maze');
        cell.style.top = `${row * cellSize}px`;
        cell.style.left = `${col * cellSize}px`;

        if (mazeLayout[row][col] === 0) {
          const food = document.createElement('div');
          food.classList.add('food');
          cell.appendChild(food);
        }

        gameBoard.appendChild(cell);
      }
    }
  }

  function createPacman() {
    const pacman = document.createElement('div');
    pacman.classList.add('pacman');
    gameBoard.appendChild(pacman);
    return pacman;
  }

  function updatePacmanPosition() {
    pacman.style.transform = `translate(${pacmanX * cellSize}px, ${pacmanY * cellSize}px)`;
  }

  function handleKeyPress(event) {
    const key = event.key.toLowerCase();

    let newPacmanX = pacmanX;
    let newPacmanY = pacmanY;

    if (key === 'w' && pacmanY > 0) {
      newPacmanY -= 1;
    } else if (key === 'a' && pacmanX > 0) {
      newPacmanX -= 1;
    } else if (key === 's' && pacmanY < mazeHeight - 1) {
      newPacmanY += 1;
    } else if (key === 'd' && pacmanX < mazeWidth - 1) {
      newPacmanX += 1;
    }

    if (mazeLayout[newPacmanY][newPacmanX] !== 1) {
      pacmanX = newPacmanX;
      pacmanY = newPacmanY;
      updatePacmanPosition();
    }

    checkCollision();
  }

  function checkCollision() {
    const food = document.querySelector('.maze:nth-child(' + (pacmanY * mazeWidth + pacmanX + 1) + ') .food');

    if (food) {
      food.remove();
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
  }

  createMaze();
  const pacman = createPacman();
  document.addEventListener('keydown', handleKeyPress);
});
