import { useState, useContext } from 'react';
import TodosContext from '../context/todos';
import TodoEdit from './TodoEdit';

function Todo({ todo }) {
  const [ showEdit, setShowEdit ] = useState(false);
  const [ newTodo, setNewTodo ] = useState(todo);
  const { editTodo, deleteTodo, darkTheme } = useContext(TodosContext);

  const handleCheckboxClick = () => {
    setNewTodo(prevTodo => ({...prevTodo, isCompleted: !prevTodo.isCompleted}))
    editTodo(todo._id, {...todo, isCompleted: !todo.isCompleted});
  }

  const handleDeleteClick = () => {
    deleteTodo(todo._id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleChange = (e) => {
    setNewTodo(prev => ({...prev, name: e.target.value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEdit(false);
    editTodo(todo._id, newTodo);
  }

  return (
    <div className={`todo ${darkTheme ? "dark-theme" : ""}`}>
      {showEdit? <TodoEdit todo={todo} newTodo={newTodo} handleChange={handleChange} handleSubmit={handleSubmit}/> : <div className='align-center flex-row justify-between'>
      <section className='flex-row align-center'>
       <div className="round">
          <input id={todo._id} type="checkbox" checked={newTodo.isCompleted} readOnly/>
          <label onClick={handleCheckboxClick} htmlFor={todo._id} className={`${darkTheme ? "dark-theme": ""}`}></label>
        </div>
        <p className={newTodo.isCompleted ? "completed" : ""}>{newTodo.name}</p>
      </section>
      <section>
        <button onClick={handleEditClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
          </svg>
        </button>
        <button className='close-btn' onClick={handleDeleteClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </button>
      </section>
    </div>}
    </div>
    
  );
}

export default Todo;