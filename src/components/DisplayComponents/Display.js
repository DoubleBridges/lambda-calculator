import React from "react";

import './Display.scss'

const Display = (props) => {

  const { display } = props

  return <div className="screen">
    <div className="display">{display}</div>
  </div>;
};

export default Display