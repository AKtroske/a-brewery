import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';

// componenets
import BrewCard from '../components/BrewCard/brewCard';

// apis
import fetchData from '../apis/fetchData';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [breweryData, setBreweryData] = useState([]);

  useEffect(() => {
    const getBreweryData = async () => {
      const data = await fetchData();
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
      ...data,
      name: data.name,
      type: type.charAt(0).toUpperCase() + type.slice(1),
      address: `${street}, ${city}, ${state} ${postalCode}`,
      url: data.website_url,
    };
  };

  return (
    <div className="DashContainer flex flex-col items-center">
      <div className="DashHeader md:h-24 flex flex-col flex-grow md:w-3/5 w-3/5 justify-center my-8">
        <h2 className="HeaderText text-center text-base-blue text-5xl font-bold mb-2">A Brewery</h2>
        <p className="text-gray-med text-center text-md">A List of Seattle-based Breweries powered by openbrewerydb.org</p>
      </div>
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
            {breweryData.map((data) => {
              const brewData = formatData(data);
              // eslint-disable-next-line react/jsx-props-no-spreading
              return <BrewCard {...brewData} />;
            })}
          </div>
        )}
    </div>
  );
}

export default Dashboard;
