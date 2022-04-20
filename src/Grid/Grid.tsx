import React from 'react';
import { IDevice } from '../interfaces';
import { imgUrlCreator } from '../utils';
import './Grid.scss';

type GridProps = {
  devices: IDevice[] | undefined;
}

function Grid({ devices }: GridProps) {
  return (
    <main className="grid-container">
      {devices && (devices.map((device: IDevice, index: number) => (
        <section className="card" key={index}>
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
}

export default Grid;
