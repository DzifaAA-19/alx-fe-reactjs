import React, { useState } from 'react'

function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim()) {
      onAdd(value.trim())
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="New todo input"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm