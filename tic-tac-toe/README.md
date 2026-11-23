# Tic Tac Toe

A two-player Tic Tac Toe game built with React and Vite.

## Features

- Two-player mode (Player X vs Player O)
- Interactive 3×3 game board
- Automatic winner detection (winning line is highlighted)
- Draw detection
- Current player's turn indicator
- Restart game button (and reset scores)
- Scoreboard tracking X wins, O wins, and draws
- Responsive design for mobile and desktop

## Tech Stack

- HTML, CSS, JavaScript
- React.js (components + `useState`)
- Vite (build tool)
- Vercel (deployment)
- GitHub (source repository)

No external libraries are used for the game logic.

## Project Structure

```
tic-tac-toe/
├── public/
├── src/
│   ├── components/
│   │   ├── Board.jsx
│   │   ├── Square.jsx
│   │   └── Scoreboard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## How to Run Locally

```bash
git clone <your-repo-url>
cd tic-tac-toe
npm install
npm run dev
```

Then open http://localhost:5173.

## How the Game Logic Works

1. **State** – `board` is an array of 9 items (`null`, `"X"` or `"O"`), `xIsNext` tracks whose turn it is, and `scores` stores wins/draws.
2. **Winning combinations** – 8 possible lines (3 rows, 3 columns, 2 diagonals).
3. **Winner detection** – `checkWinner()` loops over the combinations and returns the winner if three squares match.
4. **Draw detection** – if every square is filled and there is no winner, the game is a draw.
5. **Scores** – updated once, at the moment the game ends, inside the click handler.

## Deployment

1. Push the project to GitHub.
2. Import the repository on [Vercel](https://vercel.com).
3. Framework preset: **Vite** → Deploy.
