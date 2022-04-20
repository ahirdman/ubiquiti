import React, { useState, useEffect } from 'react';
import { IDevice } from './utils/interfaces';
import { getDevices } from './utils';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Devices from './List/List';
import Grid from './Grid/Grid';
import './App.scss';

const App = () => {
  const [devices, setDevices] = useState<IDevice[]>();
  const [filter, setFilter] = useState<IDevice[]>();
  const [gridView, setGridView] = useState(false);

  useEffect(() => {
    getDevices(setDevices, setFilter);
  }, []);

  return (
    <>
      <Header />
      <Toolbar
        gridView={gridView}
        setGridView={setGridView}
        setFilter={setFilter}
        devices={devices}
      />
      {gridView
        ? <Grid devices={filter} />
        : <Devices devices={filter} />}
    </>
  );
};

export default App;
