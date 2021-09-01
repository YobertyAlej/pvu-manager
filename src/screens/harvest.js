import React, { useEffect, useState } from 'react';
import HarvestPlant from '../components/harvest-plant.js';
import moment from 'moment';
import { PVU_AUTH_TOKEN } from '../constants.js';

const Harvest = () => {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(false);
  const [farms, setFarms] = useState([]);

  const getData = async () => {
    return fetch('https://backend-farm-stg.plantvsundead.com/farms', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + PVU_AUTH_TOKEN,
      },
    });
  };

  useEffect(() => {
    getData()
      .then((data) => handleSuccess(data))
      .catch((error) => handleErrors(error));
  }, [errors]);

  const handleSuccess = async (data) => {
    if (!data.ok) {
      setErrors(data.statusText);
      return;
    }
    const parsed = await data.json();
    if (parsed.status == 444) {
      setStatus(false);
      return;
    }
    setStatus(true);
    setFarms(parsed);
  };
  const handleErrors = async (data) => {
    console.log('error from farm', data);
    console.log('errors', errors);
    setErrors([...errors, { time: moment(), data }]);
  };

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between">
          <h3 className="text-gray-700 text-3xl font-medium">Harvest</h3>
        </div>

        {!status && (
          <div
            className="mt-40 mx-auto w-max bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Not your turn to farm</p>
                <p className="text-sm">Wait until your next turn</p>
              </div>
            </div>
          </div>
        )}
        {farms.data && (
          <div className="flex flex-col mt-8">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Icon
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Remaining time
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Paused time
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Water
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {farms.data.map((sow, index) => (
                      <HarvestPlant sow={sow} key={sow._id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Harvest;
