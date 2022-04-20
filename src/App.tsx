import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { IDevice } from './utils/interfaces';
import { getDevices } from './utils';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import List from './List/List';
import Grid from './Grid/Grid';
import Device from './Device/Device';
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
      <Routes>
        {gridView
          ? <Route path="/" element={<Grid devices={filter} />} />
          : <Route path="/" element={<List devices={filter} />} />}
        <Route
          path="/device/:shortname"
          element={<Device devices={devices} />}
        />
      </Routes>
    </>
  );
};

export default App;
