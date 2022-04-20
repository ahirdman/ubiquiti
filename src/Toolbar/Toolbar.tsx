import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import './Toolbar.scss';
import listDefault from '../assets/list/list-default.svg';
import listActive from '../assets/list/list-active.svg';
import gridDefault from '../assets/grid/grid-default.svg';
import gridActive from '../assets/grid/grid-active.svg';
import magnifier from '../assets/Search-icon.svg';
import close from '../assets/Close-icon.svg';

type ToolbarProps = {
  gridView: any
  setGridView: any
  query: any
  setQuery: any
}

function Toolbar({
  gridView, setGridView, query, setQuery,
}: ToolbarProps) {
  const [displayFilter, setDisplayFilter] = useState(false);

  return (
    <nav className="toolbar">
      <img src={magnifier} alt="focus" className="toolbar__icon" />
      <input
        type="text"
        placeholder="Search"
        className="toolbar__search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <h2 className='toolbar__label'>Label</h2> */}
      <img
        src={close}
        alt="close"
        className="toolbar__close"
        onClick={() => setQuery('')}
      />
      <section className="toolbar__options">
        <img
          className="toolbar__options--list"
          src={gridView ? listDefault : listActive}
          alt="list-wiew"
          onClick={() => setGridView(false)}
        />
        <img
          className="toolbar__options--grid"
          src={gridView ? gridActive : gridDefault}
          alt="grid-view"
          onClick={() => setGridView(true)}
        />
        <button
          className="toolbar__options--filter"
          onClick={() => setDisplayFilter(true)}
        >
          Filter
        </button>
      </section>
      {displayFilter && (
        <Filter setDisplayFilter={setDisplayFilter} />
      )}
    </nav>
  );
}

export default Toolbar;
