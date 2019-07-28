import React, { useState } from "react";
import Display from '../src/components/DisplayComponents/Display'
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'

import "./App.scss";

import Logo from "./components/DisplayComponents/Logo";

function App() {

  const [display, setDisplay] = useState(0)

  const buttonHandler = (e) => {
    setDisplay(e.target.textContent)
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
