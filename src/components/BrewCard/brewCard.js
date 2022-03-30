/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '../General/button';

/**
 * Pure Component for Displaying a Breweries Information
 */
function BrewCard({
  name, type, address, url, longitude, latitude,
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="BrewContainer flex flex-col lg:max-h-80 md:w-11/12 w-100 p-4 m-sm bg-white rounded-xl shadow-md">
      <div className="BrewHeader flex border-b-2 border-teal-med content-center">
        <div className="BrewInfo flex flex-col content-center p-2">
          <h2 className="text-left text-base-blue text-lg font-bold p-0">
            { name }
          </h2>
          <p className="flex-grow text-gray-med text-left text-sm">{ address }</p>
          <p className="text-left text-sm text-gray-med">{ type }</p>
        </div>
        <div className="flex flex-grow flex-row justify-end">
          <div className="flex flex-col justify-center"><Button size="circle" type="base"><a href={url}>Go</a></Button></div>
        </div>
      </div>
      <div className="justify-self-center flex flex-col justify-center items-center rounded-b-xl py-2 hover:bg-gray-light" onClick={() => setShowDetails((prevState) => !prevState)}>
        {showDetails && <p>{`Longitude: ${longitude}, Latitude: ${latitude}`}</p> }
        {showDetails ? <i className="fas fa-angle-down fa-lg"></i> : <i className="fas fa-angle-up fa-lg"></i> }
      </div>
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
};

export default BrewCard;
