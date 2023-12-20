// Code in this module creates components - reusable code blocks that represent part of the UI

import { useState } from 'react';

// default: makes it the main function in the file
export default function Board() {
  // create a boolean to track which player goes next
  const [xIsNext, setXIsNext] = useState(true);
  // returns a button. <button> is a jsx (javascript xml) element - a combo of JS code & HTML tags
  // React components must return a single JSX element. Use Fragments <> </> to wrap multiple JSX elements
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
      // check if the square has already been marked by an 'x' or 'o', ie. it is not null (true)
      if (squares[i] || calculateWinner(squares)) {
        return
      }
      // create a copy of the squares array using .slice(), following the principals of immutability to maintain data integrity / keep past data intact
      const nextSquares = squares.slice();
      // check which player (x or o) is next and change the square based on that
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }

      // call setSquares to let React know the component's state has changed 
      // This re-renders the components that use the squares state & its child components (Board() & Square(), respectively)
      setSquares(nextSquares);
      setXIsNext(!xIsNext)
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          {/* when onSquareClick() runs / a square is clicked, call handleClick() */}
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
    </>
    );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}


// Tutorial Pause point: "As a final exercise, let’s make it possible to “go back in time” to the previous moves in the game."

// Note: It's not currently managing a tie game, it still says 'next player'. Add logic to manage that instance.