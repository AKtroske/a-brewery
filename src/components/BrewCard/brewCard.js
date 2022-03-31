/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';

import Button from '../General/button';
import Map from '../Map/map';

/**
 * Card component for displaying brewery details and a map based on provided information
 *
 * Improvement: prevent rerendering of map on every iteration
 */
function BrewCard({
  name, type, address, url, longitude, latitude, index, selected, onClick,
}) {
  const center = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  const locationDefined = (latitude && longitude);

  return (
    <div className="BrewContainer flex flex-col w-11/12 p-4 m-sm bg-white rounded-xl shadow-md">
      <div className="BrewHeader flex border-b-2 border-teal-med content-center">
        <div className="BrewInfo flex flex-col content-center p-2">
          <h2 className="text-left text-base-blue text-lg font-bold p-0">
            { name }
          </h2>
          <p className="text-left text-lg text-base-black">{ type }</p>
          <p className="flex-grow text-gray-med text-left text-sm">{ address }</p>
        </div>
        <div className="flex flex-grow flex-row justify-end">
          <div className="flex flex-col justify-center">
            {(url) && <Button size="circle" type="base"><a href={url} target="_blank" rel="noopener noreferrer">Go</a></Button>}
          </div>
        </div>
      </div>
      {
        locationDefined
        && (
        <div className="Expansion justify-self-center flex flex-col justify-center items-center">
          {(selected === index) && <div className="MapContainer h-80 w-full"><Map center={center} name={name}></Map></div>}
          <div className="IconContainer flex justify-center w-full rounded-b-xl hover:bg-gray-light cursor-pointer py-2" onClick={() => onClick(index)}>
            {(selected === index) ? <i className="fas fa-angle-down fa-lg"></i> : <i className="fas fa-angle-up fa-lg"></i>}
          </div>
        </div>
        )
      }
    </div>
  );
}

BrewCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BrewCard;
