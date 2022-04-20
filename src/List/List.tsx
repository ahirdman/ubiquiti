import React from 'react';
import { IDevice, IDeviceView } from '../utils/interfaces';
import { imgUrlCreator } from '../utils';
import './List.scss';

const List = ({ devices }: IDeviceView) => (
  <main className="table-container">
    <table className="table-list">
      <thead>
        <tr className="table-list__header">
          <th className="table-list__header--counter">
            {devices && (devices.length)}
            {' '}
            devices
          </th>
          <th className="table-list__header--line">PRODUCT LINE</th>
          <th className="table-list__header--name">NAME</th>
        </tr>
      </thead>
      <tbody>
        {devices && (devices.map((device:IDevice, index:number) => (
          <tr className="table-row" key={index} onClick={() => console.log(device.product.name)}>
            <td className="table-row__img"><img src={imgUrlCreator(device.icon.id, 51)} alt="device-img" /></td>
            <td className="table-row__line">{device.line.name}</td>
            <td className="table-row__name">{device.product.name}</td>
          </tr>
        )))}
      </tbody>
    </table>
  </main>
);

export default List;
