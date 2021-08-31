import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useToken from '../../hooks/useToken.js';

const DarkMode = () => {
  const [errors, setErrors] = useState();
  const [sows, setSows] = useState(0);

  const { token } = useToken();

  const getData = async () => {
    return fetch('http://pvu-api.test/api/sows', {
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
  }, []);

  const handleSuccess = async (data) => {
    if (!data.ok) {
      setErrors(data.statusText);
      return;
    }
    const parsed = await data.json();
    setSows(parsed.total);
  };
  const handleErrors = async (data) => {
    console.log('error', data);
    setErrors(data);
  };

  return (
    <div className="w-20 md:w-32 lg:w-64 h-full bg-gray-800">
      <div className="p-4">
        <div className="w-full lg:h-full py-4 px-2 text-gray-700 bg-gray-900 rounded-lg text-left capitalize font-medium shadow-lg justify-start flex flex-col">
          <div className="border-b border-gray-700 mb-4 mt-4">
            <img
              src="logo.png"
              alt="alt placeholder"
              className="w-full mx-auto hidden md:inline-block"
            />
            <img
              src="icon.png"
              alt="alt placeholder"
              className="w-full mx-auto md:hidden"
            />
            <div className="flex justify-center hover:bg-gray-800 mt-4">
              <a
                href="https://github.com/YobertyAlej"
                target="_tab"
                className="p-2 mx-2 text-white hidden lg:inline-block lg:mb-4"
              >
                <i className="fab fa-github inline-block w-5"></i>
                <span className="mx-2 text-white">@YobertyAlej</span>
              </a>
            </div>
          </div>

          <NavLink
            to="/dashboard"
            className="flex lg:inline-block justify-center  cursor-pointer px-2 py-1 hover:bg-gray-800 text-gray-300 rounded block mb-5"
            activeClassName="flex lg:inline-block justify-center cursor-pointer px-2 py-1 bg-gray-800 text-gray-300 rounded block mb-5"
          >
            <i className="w-8 fas fa-stream p-2 bg-gray-800 rounded-full ml-4 mr-4"></i>
            <span className="mx-2 text-white hidden lg:inline-block">
              Dashboard
            </span>
          </NavLink>
          <NavLink
            to="/plants"
            className="flex lg:inline-block justify-center cursor-pointer px-2 py-1 hover:bg-gray-800 text-gray-300 rounded block mb-5"
            activeClassName="flex lg:inline-block justify-center cursor-pointer px-2 py-1 bg-gray-800 text-gray-300 rounded block mb-5"
          >
            <i className="w-8 fas fa-leaf p-2 bg-gray-800 rounded-full ml-4 mr-4"></i>
            <span className="mx-2 text-white hidden lg:inline-block">
              Plants
            </span>
          </NavLink>
          <NavLink
            to="/harvest"
            className="flex lg:inline-block justify-center cursor-pointer px-2 py-1 hover:bg-gray-800 text-gray-300 rounded block mb-5"
            activeClassName="flex lg:inline-block justify-center cursor-pointer px-2 py-1 bg-gray-800 text-gray-300 rounded block mb-5"
          >
            <span className="w-8 relative lg:ml-4">
              <i className="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full"></i>
              <span className="absolute right-1 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-1 rounded-full">
                {sows}
              </span>
            </span>
            <span className="mx-2 text-white ml-4 hidden lg:inline-block">
              Harvest
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );

  // running buggy
  return (
    <div className="mx-auto w-32 flex flex-wrap">
      <div className="p-4 w-64 bg-gray-800">
        <div className="w-full lg:h-full py-4 px-2 text-gray-700 bg-gray-900 rounded-lg text-left capitalize font-medium shadow-lg justify-start flex flex-col">
          <img
            src="logo.png"
            alt="alt placeholder"
            className="w-full mx-auto mb-4 mt-10 hidden lg:inline-block"
          />
          <div className="flex justify-center hover:bg-gray-800">
            <a
              href="https://marketplace.plantvsundead.com/farm#/farm/"
              target="_tab"
              className="p-2 mx-2 text-white lg:hidden"
            >
              <img
                src="icon.png"
                alt="alt placeholder"
                className="w-full mx-auto mb-4 border-b pb-4 border-gray-700"
              />
            </a>
            <a
              href="https://github.com/YobertyAlej"
              target="_tab"
              className="p-2 mx-2 text-white hidden lg:inline-block  lg:mb-10"
            >
              <i className="fab fa-github inline-block w-5"></i>
              <span className="mx-2 text-white">@YobertyAlej</span>
            </a>
          </div>

          <NavLink
            to="/dashboard"
            className="flex lg:inline-block justify-center  cursor-pointer px-2 py-1 hover:bg-gray-800 text-gray-300 rounded block mb-5"
            activeClassName="flex lg:inline-block justify-center cursor-pointer px-2 py-1 bg-gray-800 text-gray-300 rounded block mb-5"
          >
            <i className="w-8 fas fa-stream p-2 bg-gray-800 rounded-full ml-4 mr-4"></i>
            <span className="mx-2 text-white hidden lg:inline-block">
              Dashboard
            </span>
          </NavLink>
          <NavLink
            to="/plants"
            className="flex lg:inline-block justify-center cursor-pointer px-2 py-1 hover:bg-gray-800 text-gray-300 rounded block mb-5"
            activeClassName="flex lg:inline-block justify-center cursor-pointer px-2 py-1 bg-gray-800 text-gray-300 rounded block mb-5"
          >
            <i className="w-8 fas fa-leaf p-2 bg-gray-800 rounded-full ml-4 mr-4"></i>
            <span className="mx-2 text-white hidden lg:inline-block">
              Plants
            </span>
          </NavLink>
          <NavLink
            to="/harvest"
            className="flex lg:inline-block justify-center cursor-pointer px-2 py-1 hover:bg-gray-800 text-gray-300 rounded block mb-5"
            activeClassName="flex lg:inline-block justify-center cursor-pointer px-2 py-1 bg-gray-800 text-gray-300 rounded block mb-5"
          >
            <span className="w-8 relative lg:ml-4">
              <i className="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full"></i>
              <span className="absolute right-1 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-1 rounded-full">
                {sows}
              </span>
            </span>
            <span className="mx-2 text-white ml-4 hidden lg:inline-block">
              Harvest
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
