import React, { useContext, useState } from 'react';
import { TodoListContext } from './store';

export const TodoHeader = () => {
    const todoListStore = useContext(TodoListContext);
    const [itemName, setItemName] = useState('')

    const handleAddItem = (e) => {
        e.preventDefault();
        todoListStore.addItem(itemName);
        setItemName('');
    }

    return (
        <>
            <input placeholder="Item name" type="text" value={itemName} onChange={(event) => setItemName(event.target.value.trim())} />
            <button onClick={handleAddItem} disabled={!itemName} className={!itemName && 'disabled'}>Add Item</button>
        </>
    )
}