// Code in this module creates components - reusable code blocks that represent part of the UI

import { useState } from 'react';

// export: make this function accessible outside of this file/module
// default: makes it the main function in the file
export default function Board() {
  // returns a button. <button> is a jsx (javascript xml) element - a combo of JS code & HTML tags
  // React components must return a single JSX element. Use Fragments <> </> to wrap multiple JSX elements
    const [squares, setSquares] = useState(Array(9).fill(null));
      return (
        <>
          <div className="board-row">
            <Square value={squares[0]} />
            <Square value={squares[1]} />
            <Square value={squares[2]} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} />
            <Square value={squares[4]} />
            <Square value={squares[5]} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} />
            <Square value={squares[7]} />
            <Square value={squares[8]} />
          </div>
        </>
      );
}


function Square({value}) {
  return <button className="square">{value}</button>
}

