import React from "react";

import NumberButton from './NumberButton'
import { numbers } from '../../../data';

export const numbersChars = numbers.map(numChar => numChar = numChar.char)

console.log(`numbers.js line 8`, typeof numbersClasses)

const Numbers = (props) => {

  const { clicked } = props

  const createNumBtns = numbers.map(num => {

    return <NumberButton
      key={num.char}
      buttonClass={num.class}
      buttonContent={num.char}
      clicked={clicked}></NumberButton>
  })

  return (
    <div className='number-buttons'>
      {createNumBtns}
    </div>
  );
};

export default Numbers;

