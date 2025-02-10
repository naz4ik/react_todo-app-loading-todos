import React from 'react';
import { Filter } from '../types/Filter'; // Імпорт enum

interface Props {
  todoClear: boolean;
  newFilter: Filter;
  setNewFilter: (newFilter: Filter) => void;
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

          <nav className="filter" data-cy="Filter">
            {Object.values(Filter).map(filter => (
              <a
                key={filter}
                href={`#/${filter}`}
                className={`filter__link ${newFilter === filter ? 'selected' : ''}`}
                data-cy={`FilterLink${filter}`}
                onClick={() => setNewFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </a>
            ))}
          </nav>

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
