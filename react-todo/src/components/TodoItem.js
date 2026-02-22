import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span
        onClick={() => onToggle(todo.id)}
        style={{ cursor: 'pointer' }}
        aria-label={`Toggle ${todo.text}`}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} aria-label={`Delete ${todo.text}`}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;