import { useContext } from 'react';
import TodosContext from '../context/todos';
import Todo from "./Todo";

function TodoList() {
  const { todos } = useContext(TodosContext);

  const renderedTodos = todos.map((todo) => {
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