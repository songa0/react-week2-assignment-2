import { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function newId(list) {
  if (!list.length) {
    return 1;
  }
  const id = list[list.length - 1].id + 1;

  return id;
}

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, updateTodoInput] = useState('');

  function handleSubmit() {
    setTodos([...todos, { id: newId(todos), value: todoInput }]);

    updateTodoInput('');
  }

  function handleChange(value) {
    updateTodoInput(value);
  }

  function handleDelete(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <h1>
        To-do
      </h1>
      <TodoForm
        input={todoInput}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <TodoList
        todos={todos}
        onClickDelete={handleDelete}
      />
    </>
  );
}