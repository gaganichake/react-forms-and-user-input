import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); // Handling every keystroke
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue); // Vanilla JavaScript
    nameInputRef.current.value = ""; // Not ideal, don't manipulate the DOM directly.

    console.log(enteredName);
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} onChange={nameInputChangeHandler} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
