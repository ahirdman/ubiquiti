import React, { useEffect } from 'react';
import './Device.scss';
import { useParams } from 'react-router-dom';
import { IDevice, IDeviceObject, IDeviceProps } from '../utils/interfaces';
import { imgUrlCreator, deviceGenerator } from '../utils';

const Device = ({ devices, setDeviceDetails, deviceDetails }: IDeviceProps) => {
  const { shortname } = useParams();
  const selectedDevice = devices?.find((device: IDevice) => device.shortnames[0] === shortname);

  useEffect(() => {
    if (!selectedDevice) return;
    setDeviceDetails(deviceGenerator(selectedDevice));
  }, []);

  return (
    <section className="device">
      <section className="device__image">
        {selectedDevice && (
          <img
            src={imgUrlCreator(selectedDevice.icon.id, 257)}
            alt="device"
          />
        )}
      </section>
      <article className="device__table">
        {deviceDetails && (
          deviceDetails.map((device: IDeviceObject, index: number) => (
            <section className="device__row" key={index}>
              <p className="device__row--title">{device.title}</p>
              <p className="device__row--info">{device.info}</p>
            </section>
          ))
        )}
      </article>
    </section>
  );
};

export default Device;
