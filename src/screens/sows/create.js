import React, { useState } from 'react';
import useToken from '../../hooks/useToken.js';
import { useHistory, NavLink } from 'react-router-dom';

const Create = () => {
  const [errors, setErrors] = useState();
  const [plant_id, setPlantId] = useState(0);
  const [contract, setContract] = useState('');
  const [url, setURL] = useState('');

  const { token } = useToken();
  const history = useHistory();

  const submit = async () => {
    const form = {
      plant_id,
      contract,
      url,
    };
    return fetch('http://127.0.0.1:8000/api/sows', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then((data) => handleSuccess(data));
  };

  const handleSuccess = async (data) => {
    if (data.status == 422) {
      setErrors(data.statusText);
      return;
    }
    if (data.ok) {
      history.push('/harvest');
    }
  };

  return (
    <div className="flex mt-20 items-center justify-center bg-center bg-gray-50 items-center overflow-auto">
      <div className="w-full px-10 py-10 bg-white rounded-xl shadow-lg">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-center">
              <h1 className="font-bold text-xl mr-auto">Create New Sow 🌾</h1>
            </div>
            <div className="mt-4">
              <div className="form">
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Plant <span title="required">*</span>
                    </label>
                    <input
                      placeholder="Plant"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      onChange={(e) => setPlantId(e.target.value)}
                    />
                    <p className="text-red-500 text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Contract <span title="required">*</span>
                    </label>
                    <input
                      placeholder="Contract"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      onChange={(e) => setContract(e.target.value)}
                    />
                    <p className="text-red-500 text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>

                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className=" font-semibold text-gray-600 py-2">
                      URL
                    </label>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                      <div className="flex">
                        <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder="https://"
                        onChange={(e) => setURL(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-red-500 text-center my-3">
                  Required fields are marked with an asterisk{' '}
                  <span title="Required field">*</span>
                </p>
                <div className="mt-5 text-center md:space-x-3 md:block flex flex-col-reverse">
                  <NavLink to="/harvest">
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                      {' '}
                      Cancel{' '}
                    </button>
                  </NavLink>
                  <button
                    onClick={submit}
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
