import { IDevice, IDeviceDetails } from './interfaces';

const imgUrlCreator = (id: string, res: number) => {
  const resolution = `${res}x${res}`;
  return `https://static.ui.com/fingerprint/ui/icons/${id}_${resolution}.png`;
};

const getDevices = async (deviceCallback: Function, filterCallback: Function) => {
  const query = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const json = await query.json();
  deviceCallback(json.devices);
  filterCallback(json.devices);
};

const searchDevices = (searchText: string, deviceArray: IDevice[]) => {
  const regExp = new RegExp(searchText, 'gmi');
  return deviceArray.filter((device:IDevice) => regExp.test(device.product.name));
};

const filterDevices = (filterArray: string[], searchObject: IDevice[]): IDevice[] => searchObject
  .filter((device: IDevice) => filterArray.includes(device.line.name));

const productLines = ['UniFi', 'UniFi LTE', 'UniFi Protect', 'UniFi Access', 'airMAX', 'EdgeMAX'];

const deviceGenerator = (device: IDeviceDetails) => [
  {
    title: 'Product Line',
    info: device.product.name,
  },
  {
    title: 'ID',
    info: device.line.id,
  },
  {
    title: 'Name',
    info: device.product.name,
  },
  {
    title: 'Shortname',
    info: device.shortnames[0],
  },
  {
    title: 'Max.power',
    info: device.unifi?.network?.radios?.na?.maxPower || 'NA',
  },
  {
    title: 'Speed',
    info: device.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond || 'NA',
  },
  {
    title: 'Number of ports',
    info: device.unifi?.network?.numberOfPorts || 'NA',
  },
];

export {
  imgUrlCreator,
  getDevices,
  searchDevices,
  filterDevices,
  productLines,
  deviceGenerator,
};
