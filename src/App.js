import { useEffect, useContext } from 'react';
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
    <div className='app-wrapper'>
      <div className='app w-2/5 m-auto'>
        <Header />
        <TodoCreate />
        {todos.length !== 0 && <div>
          <TodoList />
        </div>}
        <p className='dragndrop'>Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
