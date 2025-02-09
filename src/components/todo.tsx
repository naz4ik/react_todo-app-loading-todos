import React from 'react';
import { Todo } from '../types/Todo';
import classNames from 'classnames';

interface TodoItemProps {
  todo: Todo;
  isActive: number | undefined;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo: { id, title, completed },
  isActive,
}) => {
  return (
    <div
      data-cy="Todo"
      className={classNames('todo', {
        completed,
      })}
      key={id}
    >
      <label
        className="todo__status-label"
        htmlFor="forInput"
        aria-label="Toggle todo status"
      >
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={completed}
          onChange={() => {}}
          id="forInput"
        />
      </label>

      {id === isActive ? (
        <form>
          <input
            data-cy="TodoTitleField"
            type="text"
            className="todo__title-field"
            placeholder="Empty todo will be deleted"
            value={title}
            onChange={() => {}}
          />
        </form>
      ) : (
        <>
          <span data-cy="TodoTitle" className="todo__title">
            {title}
          </span>

          <button
            type="button"
            className="todo__remove"
            data-cy="TodoDelete"
            onChange={() => {}}
          >
            ×
          </button>
        </>
      )}

      <div
        data-cy="TodoLoader"
        className={classNames('modal overlay', 'is-active')}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
