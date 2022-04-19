import { useState, useEffect } from 'react';
import { IDevice } from './interfaces';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Devices from './Devices/Devices';
import Grid from './Grid/Grid'
import './App.scss';

const getUi = async (callback:any) => {
  const query = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const json = await query.json();
  callback(json.devices)
}

function App() {
  const [devices, setDevices] = useState<IDevice[]>()
  const [filter, setFilter] = useState<IDevice[]>()
  const [gridView, setGridView] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    getUi(setDevices);
  }, [])

  // useEffect(() => {
  //   setFilter(devices)
  //   console.log(filter)
  // }, [devices])
  
  
  const searchResults = (searchText:string) => {
    const regExp = new RegExp(searchText, 'gmi');
    return devices?.filter((d) => regExp.test(d.product.name))
  }

  useEffect(() => {
    const searchResult = searchResults(query)
    setFilter(searchResult)
    console.log(filter)
  }, [query])
  

  return (
    <>
      <Header />
      <Toolbar
        gridView={gridView}
        setGridView={setGridView}
        query={query}
        setQuery={setQuery}
      />
      {gridView ?
        <Grid devices={devices} />
        :
        <Devices devices={devices} />
      }
    </>
  );
}

export default App;
