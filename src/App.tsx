import React, { useState, useEffect } from 'react';
import { IDevice } from './interfaces';
import { getDevices, filterDevices } from './utils';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Devices from './List/List';
import Grid from './Grid/Grid';
import './App.scss';

function App() {
  const [devices, setDevices] = useState<IDevice[]>();
  const [filter, setFilter] = useState<IDevice[]>();
  const [gridView, setGridView] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getDevices(setDevices, setFilter);
  }, []);

  useEffect(() => {
    const searchResult = filterDevices(query, devices);
    setFilter(searchResult);
  }, [query]);

  return (
    <>
      <Header />
      <Toolbar
        gridView={gridView}
        setGridView={setGridView}
        query={query}
        setQuery={setQuery}
      />
      {gridView
        ? <Grid devices={filter} />
        : <Devices devices={filter} />}
    </>
  );
}

export default App;
