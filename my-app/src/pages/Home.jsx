import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';

const Home = () => {
  const [todos, setTodos] = useState([]);

  // Відновлення задач з localStorage при завантаженні компонента
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Збереження задач в localStorage при зміні списку задач
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoForm addTodo={addTodo} />
      <ul className="js--todos-wrapper">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'todo-item--checked' : ''}`} data-id={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo-item__description">{todo.text}</span>
            <button className="todo-item__delete" onClick={() => removeTodo(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
