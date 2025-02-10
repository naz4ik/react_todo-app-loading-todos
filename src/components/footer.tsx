import React from 'react';
import { Filter } from '../types/Filter';
import classNames from 'classnames';
interface Props {
  todoClear: boolean;
  newFilter: Filter;
  setNewFilter: (newFilter: Filter) => void;
  todosLeft: number;
}
export const Footer: React.FC<Props> = ({
  newFilter,
  setNewFilter,
  todosLeft,
}) => {
  return (
    <div className="todoapp__content">
      <footer className="todoapp__footer" data-cy="Footer">
        <span className="todo-count" data-cy="TodosCounter">
          {todosLeft} items left
        </span>
        <nav className="filter" data-cy="Filter">
          <a
            href="#/"
            className={classNames('filter__link', {
              selected: newFilter === Filter.All,
            })}
            data-cy="FilterLinkAll"
            onClick={() => setNewFilter(Filter.All)}
          >
            All
          </a>
          <a
            href="#/active"
            className={classNames('filter__link', {
              selected: newFilter === Filter.Active,
            })}
            data-cy="FilterLinkActive"
            onClick={() => setNewFilter(Filter.Active)}
          >
            Active
          </a>
          <a
            href="#/completed"
            className={classNames('filter__link', {
              selected: newFilter === Filter.Completed,
            })}
            data-cy="FilterLinkCompleted"
            onClick={() => setNewFilter(Filter.Completed)}
          >
            Completed
          </a>
        </nav>
        <button
          type="button"
          className="todoapp__clear-completed"
          data-cy="ClearCompletedButton"
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
};
