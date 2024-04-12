import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import './Item.css'

const Item = ({ item, handleChange, handleDelete }) => {
    return (
        <li className='item' key={item.id}>
            <input type="checkbox" onChange={() => handleChange(item.id)} checked={item.checked} />
            <label style={item.checked ? { textDecoration: "line-through" } : {}}>{item.item}</label>
            <FaTrashAlt onClick={() => handleDelete(item.id)}></FaTrashAlt>
        </li>
    )
}


export default Item;