/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// Seattle
const defaultCenter = {
  lat: 47.6062,
  lng: -122.3321,
};

/**
 * Generates Map container using Google API Maps data
 * @param {Object} data  center and name field
 * @returns Component
 *
 * Improvements: Add nice loading component
 */
function MapContainer({ center, name }) {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={center || defaultCenter}
      >
        <Marker key={name} position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

MapContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  center: PropTypes.object,
  name: PropTypes.string.isRequired,
};

export default MapContainer;
