import { useState, useEffect } from 'react';
import { IDevice } from './interfaces';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Devices from './Devices/Devices';
import Grid from './Grid/Grid'
import './App.scss';

function App() {
  const [devices, setDevices] = useState<IDevice[]>()
  const [gridView, setGridView] = useState(false)
  
  const getUi = async () => {
    const query = await fetch('https://static.ui.com/fingerprint/ui/public.json');
    const json = await query.json();
    setDevices(json.devices)
  }

  useEffect(() => {
    getUi();
  }, [])
  

  return (
    <>
      <Header />
      <Toolbar gridView={gridView} setGridView={setGridView}/>
      {gridView ?
        <Grid devices={devices} />
        :
        <Devices devices={devices} />
      }
    </>
  );
}

export default App;
