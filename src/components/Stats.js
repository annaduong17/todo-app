import { useContext } from 'react';
import TodosContext from '../context/todos';

function Stats() {
  const { todos, handleClearCompleted, handleFilterChange } = useContext(TodosContext);

  const activeTodos = todos.filter(todo => {
    return todo.isCompleted === false;
  });

  return (
    <div className='stats flex-row justify-between align-center'>
      <section>
        <span>{activeTodos.length} items left</span>
      </section>
     <section>
        <button onClick={() => handleFilterChange('all')} >All</button>
        <button onClick={() => handleFilterChange('active')} >Active</button>
        <button onClick={() => handleFilterChange('completed')} >Completed</button>
     </section>
      <section>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </section>
    </div>
  );
}

export default Stats;