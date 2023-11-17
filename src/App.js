// Code in this module creates components - reusable code blocks that represent part of the UI

import { useState } from 'react';

// export: make this function accessible outside of this file/module
// default: makes it the main function in the file
export default function Board() {
  // returns a button. <button> is a jsx (javascript xml) element - a combo of JS code & HTML tags
  // React components must return a single JSX element. Use Fragments <> </> to wrap multiple JSX elements
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick() {
      const nextSquares = squares.slice();
      nextSquares[0] = "X";
      setSquares(nextSquares);
    }

    return (
      <>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={handleClick} />
        </div>
      </>
    );
}


function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

