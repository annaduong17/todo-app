import { useContext } from 'react';
import TodosContext from '../context/todos';
import Todo from "./Todo";

function TodoList() {
  const { todos, filter } = useContext(TodosContext);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.isCompleted;
    } else if (filter === 'completed') {
      return todo.isCompleted;
    } else {
      return true;
    }
  });

  const renderedTodos = filteredTodos.map((todo) => {
    return (
      <Todo key={todo._id} todo={todo} />
    )
  })

  return (
    <div>
      {renderedTodos}
    </div>
  );
}

export default TodoList;