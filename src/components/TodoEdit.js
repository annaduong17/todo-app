import { useContext } from 'react';
import TodosContext from '../context/todos';

function TodoEdit({ newTodo, handleChange, handleSubmit }) {
  const { darkTheme } = useContext(TodosContext);

  return (
    <form className={`todo-edit flex-row justify-between align-center ${darkTheme ? "dark-theme" : ""}`} onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newTodo.name} />
      <button>Save</button>
    </form>
  );
}

export default TodoEdit;