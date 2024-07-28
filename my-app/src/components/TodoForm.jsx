
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <div>
      <form className="form js--form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          required
          className="form__input js--form__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="form__btn" type="submit">Додати</button>
      </form>
      <ul className="js--todos-wrapper">
        <li className="todo-item">
          <input type="checkbox" />
          <span className="todo-item__description">Text</span>
          <button className="todo-item__delete">Видалити</button>
        </li>
        <li className="todo-item todo-item--checked">
          <input type="checkbox" />
          <span className="todo-item__description">Text</span>
          <button className="todo-item__delete">Видалити</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoForm;

