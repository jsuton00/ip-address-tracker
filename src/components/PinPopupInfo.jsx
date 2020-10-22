import React from 'react';
import { Popup } from 'react-leaflet';

export default function PinPopupInfo() {
  return (
    <Popup>
      <div className="map-popup-text">My Location</div>
    </Popup>
  );
}
