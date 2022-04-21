import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { filterDevices, searchDevices, productLines } from '../utils';
import { IToolbarProps } from '../utils/interfaces';
import { CheckBox } from '../utils/types';
import Filter from '../Filter/Filter';
import listDefault from '../assets/list/list-default.svg';
import listActive from '../assets/list/list-active.svg';
import gridDefault from '../assets/grid/grid-default.svg';
import gridActive from '../assets/grid/grid-active.svg';
import magnifier from '../assets/Search-icon.svg';
import close from '../assets/Close-icon.svg';
import back from '../assets/Back-icon.svg';
import './Toolbar.scss';

const Toolbar = ({
  gridView, setGridView, setFilter, devices, deviceDetails,
}: IToolbarProps) => {
  const [displayFilter, setDisplayFilter] = useState(false);
  const [query, setQuery] = useState('');
  const [checked, setChecked] = useState<CheckBox[]>();

  const navigate = useNavigate();
  const location = useLocation();
  const detailsPath = location.pathname.includes('device');

  useEffect(() => {
    const products = productLines
      .map((productLine: string) => ({ isChecked: false, productLine }));
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

  return detailsPath && deviceDetails ? (
    <nav className="toolbar">
      <img
        className="toolbar__back"
        src={back}
        alt="back"
        onClick={() => navigate('/')}
      />
      <p className="toolbar__label">{deviceDetails[2].info}</p>
    </nav>
  ) : (
    <nav className="toolbar">
      <img src={magnifier} alt="focus" className="toolbar__icon" />
      <input
        type="text"
        placeholder="Search"
        className="toolbar__search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
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
