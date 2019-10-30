import React, { useContext } from 'react';
import { TodoListContext } from './store';

export const TodoList = () => {
    const { todoList, removeItem } = useContext(TodoListContext);

    const handleRemove = (item) => {
        removeItem(item);
    }

    return (
        <ul>
            {todoList && todoList.map(todoList => (
                <li>
                    {todoList}
                    <button onClick={handleRemove.bind(null, todoList)}>Remove Item</button>
                </li>
            ))}
            {(todoList.length === 0) && (<div>There is not any item added. Please add one</div>)}
        </ul>
    )
}