import React from 'react'
import Item from './Item.js';
import './ItemList.css'

const ItemList = ({ items, handleChange, handleDelete }) => {
    return (
        <ul className='itemList'>
            {items.length ? (items.map((item) =>
                <Item handleChange={handleChange} handleDelete={handleDelete} item={item} key={item.id}></Item>
            )) :
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            }
        </ul>
    )
}

export default ItemList;