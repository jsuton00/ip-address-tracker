import React from 'react';
import { Marker } from 'react-leaflet';
import { PinLocationIcon } from '../utils/PinLocationIcon';
import PinPopupInfo from './PinPopupInfo';

export default function PinLocation(props) {
  const { pinLocation } = props;
  return (
    <Marker position={pinLocation} icon={PinLocationIcon}>
      <PinPopupInfo />
    </Marker>
  );
}
