import React from 'react'
import './ColorDisplayer.css'
import colorNames from 'colornames';


const ColorDisplayer = ({ color, isDarkText }) => {
  return (
    <div className='ColorDisplayer' style={{ backgroundColor: color, color: isDarkText ? "#000" : "#FFF" }}>
      <p>{color ? color : "Empty value"} <br />
      {color ? colorNames(color) : ""}</p>
    </div>
  )
}

export default ColorDisplayer