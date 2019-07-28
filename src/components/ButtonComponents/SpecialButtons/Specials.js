import React from "react";

import SpecialButton from './SpecialButton'
import { specials } from '../../../data'

//import any components needed

//Import your array data to from the provided data file

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