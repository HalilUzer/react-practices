import React from 'react'
import './Footer.css'

const Footer = ({length}) => {
    const today = new Date();
  return (
    <footer className='Footer'>
        <p>{length} list {length >= 2 ? "Items" : "Item"}</p>
    </footer>
  )
}

export default Footer