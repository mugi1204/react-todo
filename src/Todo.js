import React from 'react'

const formatDateTime = (dateTimeString) => {
  if(!dateTimeString) return "";

  const date = new Date(dateTimeString);

  if (isNaN(date)) return dateTimeString;

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${month}/${day} ${hours}:${minutes}`;
};

const Todo = ({ todo,toggleTodo }) => {

const handleTodoClick = () => {
    toggleTodo(todo.id);
}

const formattedStart = formatDateTime(todo.startTime);
const formattedEnd = formatDateTime(todo.endTime);

const hasDateTimeInfo = formattedStart || formattedEnd;

const startStyle = {color: 'green', fontWeight: 'bold'};
const endStyle = {color: 'red', fontWeight: 'bold'};

  return (
      <div>
        <label>
            <input 
              type='checkbox' 
              checked={todo.completed} 
              readOnly 
              onChange={handleTodoClick} 
            />
            {hasDateTimeInfo && (
              <span style={{marginRight: '10px'}}>
                (
                  {formattedStart && (
                    <span style={startStyle}>{formattedStart}</span>
                  )}
                  {formattedStart && formattedEnd && '-'}
                  {formattedEnd && (
                    <span style={endStyle}>{formattedEnd}</span>
                  )}
                )
                </span>
            )}
            {todo.name}
        </label>
      </div>
  );
}

export default Todo