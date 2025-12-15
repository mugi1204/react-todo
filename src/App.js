import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false, date: "", startTime: "", endTime:"" }
  ]);

  const todoNameRef = useRef();
  const todoStartDateTimeRef = useRef();
  const todoEndDateTimeRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    const startDateTime = todoStartDateTimeRef.current.value;
    const endDateTime = todoEndDateTimeRef.current.value;

    if (name === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, 
        { 
        id: uuidv4(), 
        name: name, 
        completed: false,
        startTime: startDateTime,
        endTime: endDateTime }];
    });

    todoNameRef.current.value = null;
    todoStartDateTimeRef.current.value = null;
    todoEndDateTimeRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="datetime-local" ref={todoStartDateTimeRef} />
      <input type="datetime-local" ref={todoEndDateTimeRef} />
      <input type="text" ref={todoNameRef} placeholder="新しいtodo" />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleClear}>削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
