import React from "react";

const OperatorButton = (props) => {

  const { buttonClass, buttonContent, clicked, operation } = props

  return (
    <>
      <button className={`btn ${buttonClass}`}
        onClick={clicked}
        operation={operation}>{buttonContent}</button>
    </>
  );
};

export default OperatorButton
