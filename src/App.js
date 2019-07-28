import React, { useState, useEffect } from "react";
import Display from '../src/components/DisplayComponents/Display'
import Numbers, { firstArg, secondArg} from './components/ButtonComponents/NumberButtons/Numbers'
import Operators, { operator } from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'

import { numbers, operators, specials } from './data'

import "./App.scss";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {

  const [display, setDisplay] = useState('0')

  useEffect(() => {
    setDisplay(`${firstArg} ${operator} ${secondArg}`)
  }, [firstArg, secondArg, operator]);


  // const buttonHandler = (e) => {
  //   let firstArg = '', operator = '', secondArg = ''
  //   if (numbers.includes(e.target.textContent)) {
  //     firstArg = numberHandler(e)
  //   } else if (operators.includes(e.target.textContent)) {

  //   }
  //   setDisplay(`${firstArg}${operator}${secondArg}`)
  // }

  return (
    <div className="container">
      <Logo />
      <Display
        display={display} />
      <Numbers />
      <Operators />
      <Specials />
    </div>
  );
}

export default App;
