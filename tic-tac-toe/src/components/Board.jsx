import Square from "./Square";

function Board({ board, onSquareClick, winningLine, gameOver }) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinning={winningLine.includes(index)}
          disabled={gameOver || value !== null}
        />
      ))}
    </div>
  );
}

export default Board;
