import React, { useState } from 'react';
import Buttons from "./Buttons";


const text = [
  { id: 2, text: "+" }, { id: 3, text: "-" }, { id: 4, text: "×" },
  { id: 5, text: "÷" }, { id: 6, text: "7" }, { id: 7, text: "8" }, { id: 8, text: "9" },
  { id: 9, text: "4" }, { id: 10, text: "5" }, { id: 11, text: "6" }, { id: 12, text: "1" },
  { id: 13, text: "2" }, { id: 14, text: "3" }, { id: 15, text: "." }, { id: 16, text: "0" },
  { id: 17, text: "C" }, { id: 18, text: "=" }
];
function App() {
  const [input, setInput] = useState("0");
  const [display, setDisplay] = useState(false);

  const number = "0123456789.";
  const operator = "+-×÷";

  const eventHandler = (event) => {
    var newString;
    var lastChar

    let btnPress = event.target.innerHTML;
    if (number.includes(btnPress)) {
      lastChar = input[(input.length) - 1];
      if (display === false) {
        if (input === "0") {
          setInput(btnPress);
        }
        else
          setInput(input + btnPress)
      }
      else if (display === true && (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷")) {
        setDisplay(false);
        setInput(input + btnPress)
      }
      else {
        if (display === true && (lastChar !== "+" || lastChar !== "-" || lastChar !== "×" || lastChar !== "÷")) {
          setInput(btnPress)
          setDisplay(false);
        }
        else {
          setInput(input);
          setDisplay(false);
        }
      }

    }
    else if (operator.includes(btnPress)) {
      lastChar = input[(input.length) - 1];
      if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
        newString = input.substring(0, input.length - 1);
        setInput(newString + btnPress)
      }
      else {
        if (!(input === "0"))
          setInput(input + btnPress);
      }
    }
    else if ("C" === btnPress) {
      newString = input.substring(0, input.length - 1);
      setInput(newString);
      console.log(newString);
      if (newString === "")
        setInput("0")
    }
    else {
      lastChar = input[(input.length) - 1];
      console.log("=",lastChar);
      
      if((lastChar !== "+" && lastChar !== "-" && lastChar !== "×" && lastChar !== "÷") )
      {
        setInput(((eval(input.replace("×", "*").replace("÷", "/"))).toFixed(2)).toString());
        setDisplay(true);
    }
    }
  }
  return (
    <>
              <h1>Calculator Using ReactJS</h1>
    <div className="container">
      <div className="item">{input}</div>
      {text.map(value => {
        return (
          <Buttons key={value.id} text={value.text} onClick={eventHandler} />
        );
      })
      }
    </div>
    </>
  );
}

export default App;
