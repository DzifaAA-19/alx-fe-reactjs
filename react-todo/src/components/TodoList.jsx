import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoItem from './TodoItem'

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Write tests with Jest', completed: false },
  { id: 3, text: 'Build a Todo App', completed: true },
]

function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const active = todos.filter((t) => !t.completed)
  const done   = todos.filter((t) =>  t.completed)

  return (
    <div className="app">
      <h1>Todo List</h1>

      <AddTodoForm onAdd={addTodo} />

      {todos.length === 0 ? (
        <p className="empty">No tasks yet!</p>
      ) : (
        <>
          {active.length > 0 && (
            <>
              <p className="section-title">To Do</p>
              <ul>
                {active.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
                ))}
              </ul>
            </>
          )}

          {done.length > 0 && (
            <>
              <p className="section-title">Done</p>
              <ul>
                {done.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default TodoList