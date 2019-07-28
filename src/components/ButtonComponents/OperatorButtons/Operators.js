import React from "react";

import OperatorButton from './OperatorButton'
import { operators } from '../../../data'

const Operators = (props) => {

  const {clicked} = props

  const createOperatorBtns = operators.map(op => {
    return <OperatorButton
      key={op.char}
      buttonClass={`btn ${op.class}`}
      buttonContent={op.char}
      clicked={clicked}
      operation={op.value}></OperatorButton>
  })

  return (
    <div className="operator-buttons">
      {createOperatorBtns}
    </div>
  );
};

export default Operators
 