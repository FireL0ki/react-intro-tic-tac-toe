// Code in this module creates components - reusable code blocks that represent part of the UI
// This renders, manages, and updates those UI elements

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

}
