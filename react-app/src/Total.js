import React, { useContext } from 'react';
import { TodoListContext } from './store';

export const Total = () => {
    const todoListContext = useContext(TodoListContext);

    const { todoList } = todoListContext;

    return (
        <div>Total item: {todoList.length}</div>
    )
}