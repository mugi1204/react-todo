import React from 'react';
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid'

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />)
}

export default TodoList;