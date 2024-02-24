import { useState, useContext } from 'react';
import TodosContext from '../context/todos';

function TodoCreate() {
  const [ todo, setTodo ] = useState({
    name: '',
    isActive: true,
    isCompleted: false
  });
  const { createTodo, darkTheme } = useContext(TodosContext);

  const handleChange = (e) => {
    setTodo({...todo, name: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo({...todo, name: ''});
  }

  return (
    <form onSubmit={handleSubmit} className={`todo-create flex-row ${darkTheme ? "dark-theme" : ""}`}>
      <input required onChange={handleChange} type="text" value={todo.name} className="text-input flex-row" placeholder='Create new todo...'/>
      <button className='add-btn'>Add</button>
    </form>
  );
}

export default TodoCreate;