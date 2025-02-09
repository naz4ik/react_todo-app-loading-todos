/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useRef, useState } from 'react';
import { UserWarning } from './UserWarning';
import { getTodos, USER_ID } from './api/todos';
import { Header } from './components/header';
import { TodoList } from './components/todoList';
import { Footer } from './components/footer';
import { Error } from './components/Error';
import { Todo } from './types/Todo';

export const App: React.FC = () => {
  const newTodoInputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newFilter, setNewFilter] = useState<string>('');
  const [todoClear, seTodoClear] = useState<boolean>(false);
  const [filter] = useState<string>('All');
  const [isActive] = useState<number>();
  const todosLeft = todos.filter(todo => !todo.completed).length;

  const loadTodos = async () => {
    setErrorMessage('');
    try {
      const todosData = await getTodos();

      setTodos(todosData);
    } catch (error) {
      setErrorMessage('Unable to load todos');
    }
  };

  useEffect(() => {
    loadTodos();
    newTodoInputRef.current?.focus();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }, [errorMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === '') {
      setErrorMessage('Title should not be empty');
      newTodoInputRef.current?.focus();
    } else {
      setNewTodo('');
      setErrorMessage('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') {
      return true;
    }

    if (filter === 'Active') {
      return !todo.completed;
    }

    if (filter === 'Completed') {
      return todo.completed;
    }

    return true;
  });

  if (!USER_ID) {
    return <UserWarning />;
  }

  if (todosLeft !== 0) {
    seTodoClear(true);
  }

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>
      <Header
        handleSubmit={handleSubmit}
        newTodoInputRef={newTodoInputRef}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <TodoList filteredTodos={filteredTodos} isActive={isActive} />
      <Footer
        todoClear={todoClear}
        newFilter={newFilter}
        setNewFilter={setNewFilter}
        todosLeft={todosLeft}
      />
      <Error errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
    </div>
  );
};
