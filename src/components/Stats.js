import { useContext } from 'react';
import TodosContext from '../context/todos';

function Stats() {
  const { todos, handleFilterChange } = useContext(TodosContext);

  const activeTodos = todos.filter(todo => {
    return todo.isCompleted === false;
  });

  return (
    <div>
      <span>{activeTodos.length} items left</span>
      <button onClick={() => handleFilterChange('all')} >All</button>
      <button onClick={() => handleFilterChange('active')} >Active</button>
      <button onClick={() => handleFilterChange('completed')} >Completed</button>
      <button onClick={() => handleFilterChange('clear completed')}>Clear Completed</button>
    </div>
  );
}

export default Stats;