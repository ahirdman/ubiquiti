import React, { useEffect, useState } from 'react';
import { filterDevices, searchDevices, productLines } from '../utils';
import Filter from '../Filter/Filter';
import './Toolbar.scss';
import listDefault from '../assets/list/list-default.svg';
import listActive from '../assets/list/list-active.svg';
import gridDefault from '../assets/grid/grid-default.svg';
import gridActive from '../assets/grid/grid-active.svg';
import magnifier from '../assets/Search-icon.svg';
import close from '../assets/Close-icon.svg';
import { IToolbarProps } from '../utils/interfaces';
import { CheckBox } from '../utils/types';

const Toolbar = ({
  gridView, setGridView, setFilter, devices,
}: IToolbarProps) => {
  const [displayFilter, setDisplayFilter] = useState(false);
  const [query, setQuery] = useState('');
  const [checked, setChecked] = useState<CheckBox[]>();

  useEffect(() => {
    const products = productLines.map((productLine:string) => ({ isChecked: false, productLine }));
    setChecked(products);
  }, []);

  useEffect(() => {
    if (!devices || !checked) return;

    const clickedOptions = checked
      .filter((box: CheckBox) => box.isChecked === true)
      .map((box: CheckBox) => box.productLine);

    const filteredLines = clickedOptions.length > 0
      ? filterDevices(clickedOptions, devices)
      : devices;

    const searchResult = searchDevices(query, filteredLines);
    setFilter(searchResult);
  }, [query, checked]);

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
        <Filter
          setDisplayFilter={setDisplayFilter}
          checked={checked}
          setChecked={setChecked}
        />
      )}
    </nav>
  );
};

export default Toolbar;
