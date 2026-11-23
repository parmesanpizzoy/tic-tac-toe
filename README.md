# Tic Tac Toe

A responsive, two-player Tic Tac Toe web application built with React and Vite. Players take turns placing X and O on a 3×3 game board, with automatic win and draw detection.

## Live Demo

**Live Application:** (https://tic-tac-toe-khaki-rho.vercel.app/)

## Features

- **Two-Player Mode:** Play against another player (Player X vs. Player O).
- **Interactive Game Board:** A clickable 3×3 grid.
- **Winner Detection:** Automatically detects winning combinations and highlights the winning line.
- **Draw Detection:** Identifies when the board is full and no player has won.
- **Turn Indicator:** Displays which player's turn it is.
- **Scoreboard:** Tracks wins for Player X, Player O, and total draws.
- **Restart Game:** Resets the current game and scoreboard.
- **Responsive Design:** Supports both desktop and mobile screens.

## Tech Stack

- **React.js** – Component-based UI development and state management using `useState`.
- **JavaScript** – Game logic, player turns, and win/draw detection.
- **HTML (JSX)** – Application structure.
- **CSS** – Styling and responsive layout.
- **Vite** – Development server and build tool.
- **Vercel** – Application deployment.
- **GitHub** – Source code management.

No external libraries are used for the game logic.

## Project Structure

```text
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

## Getting Started

Follow these steps to run the application locally.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd tic-tac-toe
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal (usually `http://localhost:5173`).

## How the Game Logic Works

The game uses React state to manage the board, player turns, and scores.

1. **Board State:** The `board` array contains nine elements, each representing a square. Each element stores `null`, `"X"`, or `"O"` depending on the square's state.
2. **Turn Management:** The `xIsNext` state determines which player's turn it is.
3. **Winning Combinations:** The game checks eight possible winning combinations: three rows, three columns, and two diagonals.
4. **Winner Detection:** The `checkWinner()` function checks whether a player has occupied all three squares in any winning combination. The winning line is then highlighted.
5. **Draw Detection:** A draw occurs when all nine squares are occupied and there is no winner.
6. **Score Tracking:** The scoreboard records wins for each player and draws when a game ends.

## Deployment

The application is deployed using Vercel.

To deploy your own version:

1. Push the project to a GitHub repository.
2. Import the repository into Vercel.
3. Configure the project using the default Vite build settings.
4. Deploy the application and access it through the generated Vercel URL.

---
