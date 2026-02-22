import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {

  // TEST 1: Does the page show up correctly?
  test('renders the TodoList with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests with Jest')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  // TEST 2: Is the form visible?
  test('renders the input and Add button', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  // TEST 3: Can we add a new todo?
  test('adds a new todo on form submission', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: 'Buy groceries' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
  });

  // TEST 4: Does the input clear after submitting?
  test('clears input after adding a todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: 'Read a book' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(input.value).toBe('');
  });

  // TEST 5: Does empty input get ignored?
  test('does not add empty or whitespace-only todos', () => {
    render(<TodoList />);
    const initialCount = screen.getAllByRole('listitem').length;
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getAllByRole('listitem')).toHaveLength(initialCount);
  });

  // TEST 6: Can we toggle a todo?
  test('toggles a todo between completed and not completed', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    const listItem = todoText.closest('li');

    expect(listItem).toHaveStyle('text-decoration: none');
    fireEvent.click(todoText);
    expect(listItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText);
    expect(listItem).toHaveStyle('text-decoration: none');
  });

  // TEST 7: Is an already-completed todo shown correctly?
  test('pre-completed todo renders with line-through', () => {
    render(<TodoList />);
    const completedTodo = screen.getByText('Build a Todo App');
    expect(completedTodo.closest('li')).toHaveStyle('text-decoration: line-through');
  });

  // TEST 8: Can we delete a todo?
  test('deletes a todo when Delete is clicked', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByLabelText('Delete Learn React'));
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  // TEST 9: Does deleting one todo leave the others?
  test('deleting one todo does not remove others', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByLabelText('Delete Learn React'));
    expect(screen.getByText('Write tests with Jest')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  // TEST 10: Full lifecycle — add then delete
  test('can add a todo and then delete it', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: 'Temporary task' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('Temporary task')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Delete Temporary task'));
    expect(screen.queryByText('Temporary task')).not.toBeInTheDocument();
  });

});