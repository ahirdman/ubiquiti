import { IDevice } from "../interfaces";

const imgUrlCreator = (id:string, res:number) => {
  const resolution = `${res}x${res}` 
  return `https://static.ui.com/fingerprint/ui/icons/${id}_${resolution}.png`;
}

const getDevices = async (deviceCallback:any, filterCallback:any) => {
  const query = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const json = await query.json();
  deviceCallback(json.devices)
  filterCallback(json.devices)
}

const filterDevices = (searchText:string, searchObject:IDevice[] | undefined) => {
  const regExp = new RegExp(searchText, 'gmi');
  return searchObject?.filter((d) => regExp.test(d.product.name))
}

export {
  imgUrlCreator,
  getDevices,
  filterDevices
}