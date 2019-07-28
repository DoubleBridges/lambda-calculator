import React from "react";

import OperatorButton from './OperatorButton'
import { operators } from '../../../data'

export let operator = ''

const Operators = () => {

  const operatorHandler = (e) => operator = e.target.textContent

  const createOperatorBtns = operators.map(op => {
    return <OperatorButton
      key={op.char}
      buttonClass={`btn ${op.class}`}
      buttonContent={op.char}
      clicked={operatorHandler}
      operation={op.value}></OperatorButton>
  })

  return (
    <div className="operator-buttons">
      {createOperatorBtns}
    </div>
  );
};

export default Operators
 