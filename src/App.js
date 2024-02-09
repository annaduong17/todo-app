import { useState, useEffect, useContext } from 'react';
import TodosContext from './context/todos';
import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import Stats from './components/Stats';

function App() {
  const { fetchTodos, todos } = useContext(TodosContext);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <Header />
      <TodoCreate />
      <div>
        <TodoList />
      </div>
      <Stats />
      <p>Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
