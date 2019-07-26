import React from "react";

const Display = (props) => {
  const { readOut } = props

  return <div className="display">{readOut}</div>;
};

export default Display