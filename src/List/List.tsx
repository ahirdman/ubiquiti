import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IDevice, IDeviceViewProps } from '../utils/interfaces';
import { imgUrlCreator } from '../utils';
import './List.scss';

const List = ({ devices }: IDeviceViewProps) => {
  const navigate = useNavigate();

  const navigateDevice = (shortname: string) => {
    navigate(`/device/${shortname}`);
  };

  return (
    <ul className="table-list">
      <li className="table-list__header">
        <p className="table-list__header--counter">
          {devices && (devices.length)}
          {' '}
          devices
        </p>
        <p className="table-list__header--line">PRODUCT LINE</p>
        <p className="table-list__header--name">NAME</p>
      </li>
      {devices && (devices.map((device: IDevice, index: number) => (
        <li
          className="table-list__row"
          key={index}
          onClick={() => navigateDevice(device.shortnames[0])}
        >
          <section className="table-list__row--img">
            <img
              src={imgUrlCreator(device.icon.id, 25)}
              alt="device-img"
            />
          </section>
          <p className="table-list__row--line">{device.line.name}</p>
          <p className="table-list__row--name">{device.product.name}</p>
        </li>
      )))}
    </ul>
  );
};

export default List;
