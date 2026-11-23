function Scoreboard({ scores }) {
  return (
    <div className="scoreboard">
      <div className="score score--x">
        <span className="score__label">Player X</span>
        <span className="score__value">{scores.X}</span>
      </div>
      <div className="score score--draw">
        <span className="score__label">Draws</span>
        <span className="score__value">{scores.draws}</span>
      </div>
      <div className="score score--o">
        <span className="score__label">Player O</span>
        <span className="score__value">{scores.O}</span>
      </div>
    </div>
  );
}

export default Scoreboard;
