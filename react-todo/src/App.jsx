import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import TodoList from './components/TodoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
)