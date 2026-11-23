import { useState } from "react";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  return null;
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const winData = getWinner(board);
  const winner = winData?.winner ?? null;
  const winningLine = winData?.line ?? [];
  const isDraw = !winner && board.every(Boolean);
  const gameOver = Boolean(winner || isDraw);

  const handleSquareClick = (index) => {
    if (board[index] || gameOver) return;

    const nextBoard = [...board];
    nextBoard[index] = isXTurn ? "X" : "O";
    setBoard(nextBoard);

    const nextWin = getWinner(nextBoard);
    if (nextWin) {
      setScores((prev) => ({
        ...prev,
        [nextWin.winner]: prev[nextWin.winner] + 1,
      }));
    } else if (nextBoard.every(Boolean)) {
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
    } else {
      setIsXTurn((prev) => !prev);
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  const resetAll = () => {
    setScores({ X: 0, O: 0, draws: 0 });
    restartGame();
  };

  const getStatusMessage = () => {
    if (winner) return `🎉 Player ${winner} wins!`;
    if (isDraw) return "🤝 It's a draw!";
    return `Player ${isXTurn ? "X" : "O"}'s turn`;
  };

  const statusClass = [
    "status",
    winner && "status--win",
    isDraw && "status--draw",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className="app">
      <h1 className="title">Tic Tac Toe</h1>

      <Scoreboard scores={scores} />

      <p className={statusClass} aria-live="polite">
        {getStatusMessage()}
      </p>

      <Board
        board={board}
        onSquareClick={handleSquareClick}
        winningLine={winningLine}
        gameOver={gameOver}
      />

      <div className="actions">
        <button className="btn btn--primary" onClick={restartGame}>
          Restart Game
        </button>
        <button className="btn btn--secondary" onClick={resetAll}>
          Reset Scores
        </button>
      </div>
    </main>
  );
}