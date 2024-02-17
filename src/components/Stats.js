import { useContext } from 'react';
import TodosContext from '../context/todos';

function Stats() {
  const { todos, handleClearCompleted, handleFilterChange, filter, darkTheme } = useContext(TodosContext);

  const activeTodos = todos.filter(todo => {
    return todo.isCompleted === false;
  });

  return (
    <div className={`stats flex-row justify-between align-center ${darkTheme ? "dark-theme" : ""}`}>
      <section>
        <span>{activeTodos.length} items left</span>
      </section>
     <section>
        <button className={`${filter === 'all' ? "active" : ""}`} onClick={() => handleFilterChange('all')} >All</button>
        <button className={`${filter === 'active' ? "active" : ""}`} onClick={() => handleFilterChange('active')} >Active</button>
        <button className={`${filter === 'completed' ? "active" : ""}`} onClick={() => handleFilterChange('completed')} >Completed</button>
     </section>
      <section>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </section>
    </div>
  );
}

export default Stats;