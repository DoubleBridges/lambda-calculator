import React from "react";

//import any components needed
import NumberButton from './NumberButton'
import { numbers } from '../../../data';

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const { clicked } = props;

  const createNumBtns = numbers.map(num => {
    if (num === '.') {
      return <NumberButton
        key={num}
        buttonClass={`decBtn`}
        buttonContent={num}
        clicked={clicked}></NumberButton>
    } else {
      return <NumberButton
        key={num}
        buttonClass={`btn${num}`}
        buttonContent={num}
        clicked={clicked}></NumberButton>
    }
   

  })

// console.log(createNumBtns)
  return (
    <div className='numberButtons'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {createNumBtns}
    </div>
  );
};

export default Numbers;