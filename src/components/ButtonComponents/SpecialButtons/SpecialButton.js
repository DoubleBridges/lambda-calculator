import React from "react";

const SpecialButton = (props) => {

  const { buttonClass, buttonContent, clicked } = props

  return (
    <>
      <button className={`btn ${buttonClass}`}
        onClick={clicked}>{buttonContent}</button>
    </>
  );
};

export default SpecialButton