import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputText));
    setInputText('');
  };
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.desc}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Todo;
