import React from "react";
import ItemList from './ItemList.js';
import AddItem from './AddItem.js';
import './Main.css'


const Main = ({ items, setItems }) => {


    const handleChange = (id) => {
        const listItems = items.map((item) => {
            return item.id === id ? { ...item, checked: !item.checked } : item
        });
        setItems(listItems);
        localStorage.setItem("items", JSON.stringify(listItems));
    }


    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
    }

    const addItem = (item) => {
        const newItems = [...items, item];
        setItems(newItems)
    }

    return (
        <main className='main'>
            <AddItem items={items} setItems={setItems} addItem={addItem}></AddItem>
            <ItemList handleChange={handleChange} items={items} handleDelete={handleDelete}></ItemList>
        </main>
    )
}

export default Main;