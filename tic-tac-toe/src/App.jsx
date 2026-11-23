import { useState } from "react";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

// Returns { winner: "X" | "O", line: [a, b, c] } or null
function checkWinner(board) {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: combination };
    }
  }

  return null;
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const result = checkWinner(board);
  const winner = result ? result.winner : null;
  const winningLine = result ? result.line : [];
  const isDraw = !winner && board.every((square) => square !== null);
  const gameOver = Boolean(winner) || isDraw;

  function handleSquareClick(index) {
    // Ignore clicks on filled squares or after the game has ended
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);

    const newResult = checkWinner(newBoard);

    if (newResult) {
      // Score is updated right here (once per game), not in an effect,
      // so it can never be counted twice.
      setScores((prev) => ({ ...prev, [newResult.winner]: prev[newResult.winner] + 1 }));
    } else if (newBoard.every((square) => square !== null)) {
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
    } else {
      setXIsNext(!xIsNext);
    }
  }

  function handleRestart() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  function handleResetScores() {
    setScores({ X: 0, O: 0, draws: 0 });
    handleRestart();
  }

  let status;
  let statusClass = "status";
  if (winner) {
    status = `🎉 Player ${winner} wins!`;
    statusClass += " status--win";
  } else if (isDraw) {
    status = "🤝 It's a draw!";
    statusClass += " status--draw";
  } else {
    status = `Player ${xIsNext ? "X" : "O"}'s turn`;
  }

  return (
    <main className="app">
      <h1 className="title">Tic Tac Toe</h1>

      <Scoreboard scores={scores} />

      <p className={statusClass} aria-live="polite">
        {status}
      </p>

      <Board
        board={board}
        onSquareClick={handleSquareClick}
        winningLine={winningLine}
        gameOver={gameOver}
      />

      <div className="actions">
        <button className="btn btn--primary" onClick={handleRestart}>
          Restart Game
        </button>
        <button className="btn btn--secondary" onClick={handleResetScores}>
          Reset Scores
        </button>
      </div>
    </main>
  );
}

export default App;
