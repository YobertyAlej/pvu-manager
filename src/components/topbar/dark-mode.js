import React from 'react';
import NextGroup from '../clocks/next-group.js';
import UTCClock from '../clocks/utc-clock';

const DarkMode = () => {
  return (
    <div className="p-4 w-full lg:w-100 bg-gray-800">
      <div className=" p-2 text-gray-700 bg-gray-900 rounded-lg shadow-lg font-medium capitalize">
        <span className="px-2 mr-2 border-r border-gray-600">
          <img
            src="./icon.png"
            alt="alt placeholder"
            className="w-8 h-8 -mt-1 inline mx-auto"
          />
        </span>
        <span className="text-center text-white mb-10">
          <i className="w-8 fas fa-clock p-2 bg-gray-800 rounded-full mr-2"></i>
          <UTCClock />
        </span>
        <span className="px-1 text-white cursor-pointer w-8 relative float-right mr-5">
          <i className="w-8 fas fa-bell p-2 bg-gray-800 rounded-full"></i>
          <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-1 shadow-lg rounded-full">
            3
          </span>
        </span>
        <NextGroup />
      </div>
    </div>
  );
};

export default DarkMode;
