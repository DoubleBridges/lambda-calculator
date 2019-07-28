import React from "react";

import SpecialButton from './SpecialButton'
import { specials } from '../../../data'

const Specials = (props) => {

  const { clicked } = props

  const createSpecialBtns = specials.map(char => {
    return <SpecialButton
      key={char.char}
      buttonClass={`btn ${char.class}`}
      buttonContent={char.char}
      clicked={clicked}></SpecialButton>

  })


  return (
    <div className="special-buttons">
      {createSpecialBtns}
    </div>
  );
};

export default Specials