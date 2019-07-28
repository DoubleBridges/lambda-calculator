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

    const currentDisplay = display.toString()
    const char = e.target.textContent

    return ((char === ".") && (currentDisplay.split('').includes("."))) ? setDisplay("Error")
      : (char === ".") ? setDisplay(currentDisplay.concat(char))
        : (currentDisplay === "0") ? setDisplay(currentDisplay.concat(char).slice(1))
          : setDisplay(currentDisplay.concat(char))
  }

  const operatorHandler = (e) => {

    let char = e.target.attributes.getNamedItem('operation').value
    const currentDisplay = display.toString()

    return char === "=" ? setDisplay(math.round(math.evaluate(display), 4))
      : operatorChars.map(item => currentDisplay.split('').includes(item)).includes(true) ? setDisplay("Two Operators Not Allowed")
        : setDisplay(currentDisplay.concat(char))
  }

  const specialHandler = (e) => {

    const char = e.target.textContent

    return char === "C" ? setDisplay(0)
      : char === "%" ? setDisplay(math.round(math.evaluate(display))/100) 
      : setDisplay("Some Other Button")


  }

  const buttonHandler = (e) => {

    const char = e.target.textContent

    return numbersChars.includes(char) ? numberHandler(e)
      : operatorChars.includes(char) ? operatorHandler(e)
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
