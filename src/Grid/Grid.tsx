import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IDevice, IDeviceView } from '../utils/interfaces';
import { imgUrlCreator } from '../utils';
import './Grid.scss';

const Grid = ({ devices }: IDeviceView) => {
  const navigate = useNavigate();

  const navigateDevice = (shortname: string) => {
    navigate(`/device/${shortname}`);
  };

  return (
    <main className="grid-container">
      {devices && (devices.map((device: IDevice, index: number) => (
        <section
          className="card"
          key={index}
          onClick={() => navigateDevice(device.shortnames[0])}
        >
          <section className="card__img">
            <img
              src={imgUrlCreator(device.icon.id, 129)}
              alt="device-logo"
            />
          </section>
          <section className="card__info">
            <h4 className="card__name">{device.product.name}</h4>
            <p className="card__line">{device.line.name}</p>
          </section>
        </section>
      )))}
    </main>
  );
};

export default Grid;
