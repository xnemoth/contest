import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // Just hook
  const [text, changeText] = useState("");
  const textRef = useRef(text);
  // Conditional of word
  const COND = 2;

  // For input field with hook
  const input = (e) => {
    changeText(e.target.value);
  };

  // main function
  const averageLetter = (e) => {
    if (text.length != 0) {
      // Check input
      const letters = text.split(" ").filter((letter) => letter.length >= COND); // Get array of letters matching the condition
      let wordCount = letters.length;      

      // Calculate average length of letters in words
      let result = (
        letters.reduce(
          (sumLength, letter) => sumLength + letter.length
          ,
          0
        ) / wordCount
      ).toFixed(1);

      changeText(""); // Just change the input after calculated
      // Display the result in the text div
      textRef.current.innerText =
        "Text " +
        text +
        " has average " +
        (+result ? result : "none") +
        " letters per word with -ge 2 letters";
    } else {
      alert("Typing text!"); // Warning
    }
    e.preventDefault(); // prevent reload on submit
  };

  // Just render the component
  return (
    <>
      <div>
        <div ref={textRef} className="result">
          {}
        </div>
        <form onSubmit={(e) => averageLetter(e)}>
          <input value={text} onChange={(e) => input(e)} type="text" />
          <button type="submit" style={{ margin: "1rem" }}>
            Calculate
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
