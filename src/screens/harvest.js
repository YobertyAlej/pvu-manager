import React, { useEffect, useState } from 'react';
import HarvestPlant from '../components/harvest-plant.js';
import useToken from '../hooks/useToken.js';

const Harvest = () => {
  const [errors, setErrors] = useState();
  const [sows, setSows] = useState([]);
  const [page, setPage] = useState(1);

  const { token } = useToken();

  const getData = async () => {
    return fetch('http://127.0.0.1:8000/api/sows?page=' + page, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
  };

  useEffect(() => {
    getData()
      .then((data) => handleSuccess(data))
      .catch((error) => handleErrors(error));
  }, [page]);

  const handleSuccess = async (data) => {
    if (!data.ok) {
      setErrors(data.statusText);
      return;
    }
    const parsed = await data.json();
    setSows(parsed);
  };
  const handleErrors = async (data) => {
    console.log('error', data);
    setErrors(data);
  };

  const nextPage = async () => {
    if (page < sows.last_page) {
      setPage(page + 1);
    }
  };

  const previousPage = async () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between">
          <h3 className="text-gray-700 text-3xl font-medium">Harvest</h3>
          <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-4 inline-flex items-center">
            <span className="mr-2">Add plant</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentcolor"
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col mt-8">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Datetime to harvest
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Remaining time
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Link
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Harvest
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {sows.data &&
                    sows.data.map((sow, index) => (
                      <HarvestPlant sow={sow} key={sow.id} />
                    ))}
                </tbody>
              </table>
            </div>
            <div className="text-md flex justify-center mt-4">
              Current page: {page}
            </div>
            <div className="text-md flex justify-center">
              Total page: {sows.last_page}
            </div>
            <div className="flex items-center justify-center">
              <ul className="flex pl-0 list-none rounded my-2">
                <li
                  onClick={previousPage}
                  className={
                    page == 1
                      ? 'relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-700 border-r-0 ml-0 rounded-l'
                      : 'relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200 cursor-pointer'
                  }
                >
                  <a className="page-link">Previous</a>
                </li>
                <li
                  onClick={nextPage}
                  className={
                    page == sows.last_page
                      ? 'relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-700 border-r-0 ml-0 rounded-l'
                      : 'relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200 cursor-pointer'
                  }
                >
                  <a className="page-link">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Harvest;
