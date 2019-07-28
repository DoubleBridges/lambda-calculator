import React, { useState } from "react";
import Display from '../src/components/DisplayComponents/Display'
import Numbers, { numbersChars } from './components/ButtonComponents/NumberButtons/Numbers'
import Operators, { operatorChars } from './components/ButtonComponents/OperatorButtons/Operators'
import Specials, { specialChars } from './components/ButtonComponents/SpecialButtons/Specials'

import "./App.scss";
import Logo from "./components/DisplayComponents/Logo";

const math = require('../node_modules/mathjs');

function App() {

  const [display, setDisplay] = useState(0)

  const numberHandler = (e) => {
    return ((e.target.textContent === ".") && (display.toString().split('').includes("."))) ? setDisplay("Error")
    : (e.target.textContent === ".") ? setDisplay(display.toString().concat(e.target.textContent))
    : (display.toString() === "0") ? setDisplay(display.toString().concat(e.target.textContent).slice(1))
    : setDisplay(display.toString().concat(e.target.textContent))
}

const operatorHandler = (e) => {

  let char = e.target.attributes.getNamedItem('operation').value

  return char === "=" ? setDisplay(math.evaluate(display))
    : operatorChars.map(item => display.toString().split('').includes(item)).includes(true) ? setDisplay("Two Operators Not Allowed")
      : setDisplay(display.toString().concat(char))
}

const specialHandler = (e) => {

  return e.target.textContent === "C" ? setDisplay(0)
    : setDisplay("some Other Button")


}

const buttonHandler = (e) => {
  return numbersChars.includes(e.target.textContent) ? numberHandler(e)
    : operatorChars.includes(e.target.textContent) ? operatorHandler(e)
      : specialHandler(e)

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

export default App
