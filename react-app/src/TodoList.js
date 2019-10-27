import React, { useContext } from 'react';
import { TodoListContext } from './store';

export const TodoList = () => {
    const todoListContext = useContext(TodoListContext);
    const handleRemove = (item) => {
        todoListContext.removeItem(item);
    }

    const { todoList } = todoListContext;

    return (
        <ul>
            {todoList && todoList.map((todo, index) => {
                return (
                    <li key={`${index}_${todo}`}>
                        {todo}
                        <button onClick={handleRemove.bind(null, todo)}>Remote Item</button>
                    </li>
                )
            })}
            {(todoList.length === 0) && (<div>There is not any item added. Please add one</div>)}
        </ul>
    )
}