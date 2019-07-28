import React from "react";

import NumberButton from './NumberButton'
import { numbers } from '../../../data';

export let firstArg = ''
export let secondArg = ''




const Numbers = (props) => {

  const {clicked} = props

  const createNumBtns = numbers.map(num => {
      return <NumberButton
        key={num.char}
        buttonClass={num.class}
        buttonContent={num.char}
        clicked={clicked}></NumberButton>
  })

  // console.log(createNumBtns)
  return (
    <div className='number-buttons'>
      {createNumBtns}
    </div>
  );
};

export default Numbers;

