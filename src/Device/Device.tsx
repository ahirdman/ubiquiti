import React from 'react';
import './Device.scss';
import { useParams } from 'react-router-dom';
import { IDeviceView } from '../utils/interfaces';

const Device = ({ devices }: IDeviceView) => {
  const { shortname } = useParams();
  const thisDevice = devices?.find((device) => device.shortnames[0] === shortname);

  return (
    <section className='device'>{thisDevice?.product.name}</section>
  );
};

export default Device;
