import React from 'react';

interface Props {
  todoClear: boolean;
  newFilter: string;
  setNewFilter: (newFilter: string) => void;
  todosLeft: number;
}

export const Footer: React.FC<Props> = ({
  todoClear,
  newFilter,
  setNewFilter,
  todosLeft,
}) => {
  return (
    <div className="todoapp__content">
      {todoClear && (
        <footer className="todoapp__footer" data-cy="Footer">
          <span className="todo-count" data-cy="TodosCounter">
            {todosLeft} items left
          </span>

          {/* Active link should have the 'selected' class */}
          <nav className="filter" data-cy="Filter">
            <a
              href="#/"
              className={`filter__link ${newFilter === 'All' ? 'selected' : ''} `}
              data-cy="FilterLinkAll"
              onClick={() => setNewFilter('All')}
            >
              All
            </a>

            <a
              href="#/active"
              className={`filter__link ${newFilter === 'Active' ? 'selected' : ''} `}
              data-cy="FilterLinkActive"
              onClick={() => setNewFilter('Active')}
            >
              Active
            </a>

            <a
              href="#/completed"
              className={`filter__link ${newFilter === 'Completed' ? 'selected' : ''} `}
              data-cy="FilterLinkCompleted"
              onClick={() => setNewFilter('Completed')}
            >
              Completed
            </a>
          </nav>

          {/* this button should be disabled if there are no completed todos */}
          <button
            type="button"
            className="todoapp__clear-completed"
            data-cy="ClearCompletedButton"
          >
            Clear completed
          </button>
        </footer>
      )}
    </div>
  );
};
