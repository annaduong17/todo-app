import { useEffect, useContext } from 'react';
import TodosContext from './context/todos';
import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {
  const { fetchTodos, todos, darkTheme } = useContext(TodosContext);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className={`app-wrapper ${darkTheme ? "dark-theme" : ""}`}>
      <div className={`app ${darkTheme ? "dark-theme" : ""}`}>
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
