function Square({ value, onClick, isWinning, disabled }) {
  const classes = [
    "square",
    value ? `square--${value.toLowerCase()}` : "",
    isWinning ? "square--winning" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={value ? `Square filled with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
}

export default Square;
