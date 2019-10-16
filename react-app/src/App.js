import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { TodoListProvider } from './store';
import { Total } from './Total';

function App() {
  return (
    <TodoListProvider todoList={[]}>
      <Total />
      <TodoHeader />
      <TodoList />
    </TodoListProvider>
  );
}

export default App;
