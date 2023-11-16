// Code in this module creates components - reusable code blocks that represent part of the UI

import { useState } from 'react';

// export: make this function accessible outside of this file/module
// default: makes it the main function in the file
export default function Board() {
  // returns a button. <button> is a jsx (javascript xml) element - a combo of JS code & HTML tags
  // React components must return a single JSX element. Use Fragments <> </> to wrap multiple JSX elements
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}


function Square() {
  // useState allows the component to remember actions / the state it is in
  const [value, setValue] = useState(null);

  // function to manage a click event
  function handleClick() {
    setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
    )

}

