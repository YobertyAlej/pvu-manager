import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  PVU_AUTH_TOKEN,
  ENDPOINT_MARKETPLACE_LATEST_PUBLISHED,
  PLANT_TYPES_NOT_TO_SHOW,
} from '../constants.js';
import MarketplacePlant from '../components/marketplace-plant.js';

const Marketplace = () => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [plants, setPlants] = useState([]);

  const filterByType = (plants) =>
    plants.filter(
      (plant) => !PLANT_TYPES_NOT_TO_SHOW.includes(plant.config.stats.type)
    );

  const filterByPlants = (plants) =>
    plants.filter((plant) =>
      PLANTS_TO_SHOW.includes(plant.iconUrl.split('/').pop())
    );

  const tick = () => {
    setLoading(true);
    fetch(ENDPOINT_MARKETPLACE_LATEST_PUBLISHED, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + PVU_AUTH_TOKEN,
        'sec-ch-ua': `"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"`,
        'sec-ch-ua-mobile': `?0`,
        'sec-ch-ua-platform': `"macOS"`,
        'sec-fetch-dest': `empty`,
        'sec-fetch-mode': `cors`,
        'user-agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36`,
        'if-none-match': `W/"143a-HihP8HEavyoaGItTNTwOGhSVpuo"`,
        accept: `application/json, text/plain, */*`,
      },
    })
      .then((data) => handleSuccess(data))
      .catch((error) => handleErrors(error));
  };

  useEffect(() => {
    tick();
  }, []);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       tick();
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  const handleSuccess = async (data) => {
    if (!data.ok) {
      setErrors(data.statusText);
      return;
    }
    const parsed = await data.json();
    if (parsed.status == 444) {
      return;
    }

    // const filtered = filterByType(parsed.data);
    const filtered = parsed.data;
    setPlants(filtered);
    setLoading(false);
  };

  const sortPlants = (plants) =>
    plants.sort((a, b) => a.endingPrice - b.endingPrice);

  const handleErrors = async (data) => {
    console.log('Error', data);
    setErrors([...errors, { data }]);
    setLoading(false);
  };

  return (
    <main className="flex-1 overflow-x-hidden bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between">
          <h3 className="text-gray-700 text-3xl font-medium">
            Marketplace, plantas: {plants.length} {loading && 'Loading'}
          </h3>
          <button
            className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            onClick={tick}
          >
            <i className="w-8 fa fa-redo p-2 text-gray-700 rounded-full"></i>
            Refresh
          </button>
        </div>

        <div className="flex flex-col mt-8 justify-between">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block w-50 shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Icon
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      LE/Hora
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Rareza
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Comprar
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {sortPlants(plants)
                    .slice(0, plants.length / 2)
                    .map((plant, index) => (
                      <MarketplacePlant plant={plant} key={index} />
                    ))}
                </tbody>
              </table>
            </div>

            <div className="ml-10 align-middle inline-block w-50 shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Icon
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      LE/Hora
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Rareza
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Comprar
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {sortPlants(plants)
                    .slice(plants.length / 2)
                    .map((plant, index) => (
                      <MarketplacePlant plant={plant} key={index} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Marketplace;
