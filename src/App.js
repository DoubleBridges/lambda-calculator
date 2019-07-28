import React, { useState, useEffect } from "react";
import Display from '../src/components/DisplayComponents/Display'
import Numbers, { firstArg, secondArg} from './components/ButtonComponents/NumberButtons/Numbers'
import Operators, { operator } from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'

import "./App.scss";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
<<<<<<< HEAD

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
=======
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [display, setDisplay] = useState(0)

  const buttonHandler = (e) => {
    // setDisplay(e.props.buttonContent)
    setDisplay(e.target.textContent)
  }

// useEffect(() => setDisplay(buttonHandler()), [calcButtons])
>>>>>>> parent of ee147f2... Numbers chain on to the display

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
