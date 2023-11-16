// Code in this module creates components - reusable code that represents part of the user interface
// This will render, manage, and update UI elements in the application

// export to make this function accessible outside of this file/module
// default makes it the main function in the file
export default function Square() {
  // returns a button. <button> is a jsx (javascript xml) element - a combo of JS code & HTML tags
  return <button className="square">X</button>;
}
