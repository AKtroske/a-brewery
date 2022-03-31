import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';

// components
import BrewCard from '../components/BrewCard/brewCard';
import Map from '../components/Map/map';

// apis
import fetchBreweryData from '../apis/fetchData';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [breweryData, setBreweryData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getBreweryData = async () => {
      const data = await fetchBreweryData();
      setTimeout(() => { //  for show
        setBreweryData(() => data);
        setLoading(() => false);
      }, 1000);
    };
    getBreweryData();
  }, []);

  const formatData = (data) => {
    const {
      street, city, state, postal_code: postalCode, brewery_type: type,
    } = data;
    return {
      name: data.name,
      type: type.charAt(0).toUpperCase() + type.slice(1),
      address: `${street || ''}, ${city || ''}, ${state || ''} ${postalCode || ''}`,
      url: data.website_url,
      latitude: data.latitude,
      longitude: data.longitude,
    };
  };

  const getKey = (data) => {
    const { name, postal_code: postalCode } = data;
    return `${name}-${postalCode}`;
  };

  /**
   * Sets index of currently selected child
   * @param {Number} index index of currently selected brewery
   * @returns function
   *
   * Improvement: prevent rerender of other children who are not selected
   */
  const onClickChild = (index) => {
    setSelected((prevState) => {
      if (prevState === index) {
        return null;
      }
      return index;
    });
    return setSelected;
  };

  return (
    <div className="DashContainer flex flex-col items-center pb-10">
      <div className="DashHeader md:h-24 flex flex-col flex-grow md:w-3/5 w-3/5 justify-center my-4">
        <h2 className="HeaderText text-center text-base-blue text-5xl font-bold mb-2">A Brewery</h2>
        <p className="text-gray-med text-center text-md">A List of Seattle-based Breweries Powered by openbrewerydb.org</p>
      </div>
      {(selected === null) && <div className="MapContainer h-80 w-3/5"><Map name="home"></Map></div>}
      <p className="text-black text-center text-xl font-bold my-8">Expand a brewery below to see its location on the map!</p>
      {(loading)
        ? (
          <div className="Loader flex flex-col md:w-3/5 mt-24 items-center">
            <Bars
              color="#00CCCC"
              height={80}
              width={80}
              timeout={5000}
            />
          </div>
        )
        : (
          <div className="DashFeed flex flex-col md:w-3/5 border-x-2 border-gray-light items-center">
            {breweryData.map((data, i) => {
              const brewData = formatData(data);
              const key = getKey(data);
              return (
                <BrewCard
                  key={key}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...brewData}
                  index={i}
                  selected={selected}
                  onClick={onClickChild}
                />
              );
            })}
          </div>
        )}
    </div>
  );
}

export default Dashboard;
