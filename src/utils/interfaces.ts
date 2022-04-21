import { CheckBox } from './types';

interface IDevice {
  guids: []
  icon: {
    id: string,
    resolutions: [
      [number, number]
    ]
  }
  line: {
    id: string,
    name: string,
  }
  product: {
    abbrev: string,
    name: string,
  }
  shortnames: [string]
  triplets: [
    {
      k2: string,
      k1: string,
    }
  ]
  unifi?: {
    network?: {
      radios?: {
        na?: {
          maxPower?: number;
          maxSpeedMegabitsPerSecond?: number;
        };
      };
      numberOfPorts?: number;
    };
  };
}

interface IDeviceDetails {
  product: {
    name: string
  }
  line: {
    id: string,
  }
  shortnames: [string]
  unifi?: {
    network?: {
      radios?: {
        na?: {
          maxPower?: number;
          maxSpeedMegabitsPerSecond?: number;
        };
      };
      numberOfPorts?: number;
    };
  };
}

interface IDeviceObject {
  title: string
  info: string | number
}

interface IDeviceViewProps {
  deviceDetails?: IDeviceDetails
  device?: IDevice
  devices?: IDevice[]
}

/* eslint-disable no-unused-vars */
interface IFilterProps {
  setDisplayFilter: (prevState: boolean) => void
  checked?: CheckBox[]
  setChecked: (prevState: CheckBox[]) => void
}

interface IToolbarProps {
  deviceDetails?: IDeviceObject[]
  gridView: boolean
  setGridView: (prevState: boolean) => void
  setFilter: (prevState: IDevice[]) => void
  devices?: IDevice[]
}

interface IDeviceProps {
  devices?: IDevice[]
  setDeviceDetails: (prevState: IDeviceObject[]) => void
  deviceDetails?: IDeviceObject[]
}

export type {
  IDevice,
  IFilterProps,
  IToolbarProps,
  IDeviceViewProps,
  IDeviceDetails,
  IDeviceProps,
  IDeviceObject,
};
