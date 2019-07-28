import React, { useState } from "react";

import NumberButton from './NumberButton'
import { numbers } from '../../../data';

export let firstArg = ''
export let secondArg = ''

const numberHandler = (e) => firstArg.concat(e.target.textContent)


const Numbers = () => {

  const createNumBtns = numbers.map(num => {
    if (num === '.') {
      return <NumberButton
        key={num}
        buttonClass={`decBtn`}
        buttonContent={num}
        clicked={numberHandler}></NumberButton>
    } else {
      return <NumberButton
        key={num}
        buttonClass={`btn${num}`}
        buttonContent={num}
        clicked={numberHandler}></NumberButton>
    }


  })

  // console.log(createNumBtns)
  return (
    <div className='number-buttons'>
      {createNumBtns}
    </div>
  );
};

export default Numbers;

