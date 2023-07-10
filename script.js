document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const width = 20;
    const layout = [
        // Define the game board layout here (use 0 for empty cells and 1 for walls)
    ];

    let pacmanPosition = 0;

    const createBoard = () => {
        for (let i = 0; i < layout.length; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (layout[i] === 1) {
                cell.classList.add('wall');
            }
            board.appendChild(cell);
        }
    };

    const createPacman = () => {
        const pacman = document.createElement('div');
        pacman.classList.add('cell');
        pacman.classList.add('pacman');
        board.appendChild(pacman);
        pacmanPosition = 0; // Set initial position
    };

    const handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 37: // Left arrow key
                movePacman('left');
                break;
            case 38: // Up arrow key
                movePacman('up');
                break;
            case 39: // Right arrow key
                movePacman('right');
                break;
            case 40: // Down arrow key
                movePacman('down');
                break;
        }
    };

    const movePacman = (direction) => {
        let newPosition;

        switch (direction) {
            case 'left':
                newPosition = pacmanPosition - 1;
                if (newPosition >= 0 && !board.children[newPosition].classList.contains('wall')) {
                    board.children[pacmanPosition].classList.remove('pacman');
                    pacmanPosition = newPosition;
                    board.children[pacmanPosition].classList.add('pacman');
                }
                break;
            case 'up':
                newPosition = pacmanPosition - width;
                if (newPosition >= 0 && !board.children[newPosition].classList.contains('wall')) {
                    board.children[pacmanPosition].classList.remove('pacman');
                    pacmanPosition = newPosition;
                    board.children[pacmanPosition].classList.add('pacman');
                }
                break;
            case 'right':
                newPosition = pacmanPosition + 1;
                if (newPosition < board.children.length && !board.children[newPosition].classList.contains('wall')) {
                    board.children[pacmanPosition].classList.remove('pacman');
                    pacmanPosition = newPosition;
                    board.children[pacmanPosition].classList.add('pacman');
                }
                break;
            case 'down':
                newPosition = pacmanPosition + width;
                if (newPosition < board.children.length && !board.children[newPosition].classList.contains('wall')) {
                    board.children[pacmanPosition].classList.remove('pacman');
                    pacmanPosition = newPosition;
                    board.children[pacmanPosition].classList.add('pacman');
                }
                break;
        }
    };

    createBoard();
    createPacman();
    document.addEventListener('keydown', handleKeyDown);
});
