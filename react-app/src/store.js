import React, { useState } from 'react';

export const TodoListContext = React.createContext({});

export const TodoListProvider = ({ todoList, children }) => {
    const [todos, setTodos] = useState(todoList);

    const addItem = (item) => {
        if (!todos || !todos.find(listItem => listItem === item)) {
            setTodos([...todos, item])
        }
    };
    const removeItem = (item) => {
        setTodos(
            todos.filter(listItem => listItem !== item)
        )
    };


    return (
        <TodoListContext.Provider
            value={{
                todoList: todos,
                addItem,
                removeItem
            }}
        >
            {children}
        </TodoListContext.Provider>
    )
}

export const TodoListConsumer = TodoListContext.Consumer;