import { useEffect, useContext } from 'react';
import TodosContext from './context/todos';
import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import Stats from './components/Stats';

function App() {
  const { fetchTodos } = useContext(TodosContext);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className='app-wrapper'>
      <div className='app w-2/5 m-auto'>
        <Header />
        <TodoCreate />
        <div>
          <TodoList />
        </div>
        <p>Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
