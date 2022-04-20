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
}

/* eslint-disable no-unused-vars */
interface IFilterProps {
  setDisplayFilter: (prevState: boolean) => void
  checked?: CheckBox[]
  setChecked: (prevState: CheckBox[]) => void
}

interface IToolbarProps {
  gridView: boolean
  setGridView: (prevState: boolean) => void
  setFilter: (prevState: IDevice[]) => void
  devices?: IDevice[]
}

interface IDeviceView {
  devices?: IDevice[]
}

export type {
  IDevice,
  IFilterProps,
  IToolbarProps,
  IDeviceView,
};
