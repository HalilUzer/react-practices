import React, {useRef} from 'react'
import {useState} from 'react';
import {FaPlus} from 'react-icons/fa';
import './AddItem.css'
import item from "./Item";

const AddItem = ({items, setItems, addItem}) => {
    const inputRef = useRef();
    const [itemValue, setItemValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!itemValue) return;
        addItem({
            id: items.length ? items[items.length - 1].id + 1 : 1,
            item: itemValue,
            checked: false
        });
        setItemValue('');
    }

    return (
        <form action="" className='addItemForm' onSubmit={handleSubmit}>
            <input type="text" id='addBar' onChange={(e) => {
                setItemValue(e.target.value)
            }} ref={inputRef} value={itemValue}/>
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus/>
            </button>
        </form>
    )
}

export default AddItem