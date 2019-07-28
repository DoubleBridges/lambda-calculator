import React, { useState } from "react";
import Display from '../src/components/DisplayComponents/Display'
import Numbers, { numbersChars } from './components/ButtonComponents/NumberButtons/Numbers'
import Operators, { operatorChars } from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'

import "./App.scss";

import Logo from "./components/DisplayComponents/Logo";

function App() {

  const [display, setDisplay] = useState(0)

  const numberHandler = (e) => {
    return (display.toString() === "0") ? setDisplay(display.toString().concat(e.target.textContent).slice(1))
      : setDisplay(display.toString().concat(e.target.textContent))
  }

  const operatorHandler = (e) => {

    // const currentDisplay = display.splt('')

    // console.log(display, display.split(''), display.split('').includes(e.target.textContent))

    return display.split('').includes(e.target.textContent) ? setDisplay("Two Operators Not Allowed")
      : setDisplay(display.toString().concat(e.target.textContent))
  }

  const buttonHandler = (e) => {
    return numbersChars.includes(e.target.textContent) ? numberHandler(e)
      : operatorChars.includes(e.target.textContent) ? operatorHandler(e)
      : setDisplay("Didn't work")

  }



  return (
    <div className="container">
      <Logo />
      <Display
        display={display} />
      <Numbers
        clicked={buttonHandler} />
      <Operators
        clicked={buttonHandler} />
      <Specials
        clicked={buttonHandler} />
    </div>
  );
}

export default App;
