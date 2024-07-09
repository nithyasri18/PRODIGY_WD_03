// script.js
const cells = document.querySelectorAll('.cell');
const gameBoard = Array(9).fill(null);
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    if (gameBoard[index] || checkWinner()) return;

    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        alert(`${currentPlayer} wins!`);
    } else if (gameBoard.every(cell => cell)) {
        alert('It\'s a draw!');
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}
