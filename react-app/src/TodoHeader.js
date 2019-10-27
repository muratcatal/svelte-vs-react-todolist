import React, { useContext, useState } from 'react';
import { TodoListContext } from './store';

export const TodoHeader = () => {
    const { addItem } = useContext(TodoListContext);

    const [itemName, setItemName] = useState('')

    const handleAddItem = (e) => {
        e.preventDefault();
        addItem(itemName);
        setItemName('');
    }

    return (
        <>
            <input placeholder="Item name" type="text" value={itemName} onChange={(event) => setItemName(event.target.value.trim())} />
            <button onClick={handleAddItem} disabled={!itemName} className={!itemName && 'disabled'}>Add Item</button>
        </>
    )
}