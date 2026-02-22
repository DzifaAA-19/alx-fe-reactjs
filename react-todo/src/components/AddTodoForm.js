import React, { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();          // stops page from reloading
    if (inputValue.trim()) {     // ignore empty input
      onAdd(inputValue);
      setInputValue('');         // clear the input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="New todo input"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;