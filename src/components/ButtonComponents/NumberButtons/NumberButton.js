import React from "react";

const NumberButton = (props) => {
  const { buttonClass, buttonContent, btnKey, clicked } = props
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={`btn ${buttonClass}`}
        key={btnKey}
        onClick={clicked}>{buttonContent}</button>
    </>
  );
};


export default NumberButton;