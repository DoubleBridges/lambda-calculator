import React, { useState } from "react";
import Display from '../src/components/DisplayComponents/Display'
import Numbers, { numbersChars } from './components/ButtonComponents/NumberButtons/Numbers'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'

import "./App.scss";

import Logo from "./components/DisplayComponents/Logo";

function App() {

  const [display, setDisplay] = useState(0)

  const numberHandler = (e) => {
    console.log(`16 ${e}`)
    return (display == 0) ? setDisplay(display.toString().concat(e.target.textContent).slice(1))
      : setDisplay(display.toString().concat(e.target.textContent))
  }

  const buttonHandler = (e) => {
    console.log(`22`, numbersChars, e.target)
    return numbersChars.includes(e.target.textContent) ? numberHandler(e)
      : setDisplay("Didn't work")

  }

  // console.log(`27 ${numbersClasses}`)


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
