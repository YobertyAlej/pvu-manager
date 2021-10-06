import React from 'react';

const DarkMode = () => {
  return (
    <div className="p-4 h-16 bg-gray-800 flex items-center justify-between">
      <div className="p-2 w-full text-gray-700 bg-gray-900 rounded-lg shadow-lg font-medium flex items-center justify-center md:justify-between">
        <div>
          <img
            src="./icon.png"
            alt="alt placeholder"
            className="h-100 -mt-1 mx-auto hidden md:inline border-r border-gray-700 pr-2 mr-2"
          />
          <span className="hidden md:inline-block text-center text-white">
            <i className="w-8 fas fa-clock p-2 bg-gray-800 rounded-full mr-2"></i>
          </span>
        </div>
      </div>

      {false && (
        <div className="p-2 text-gray-700 bg-gray-900 rounded-lg shadow-lg font-medium capitalize">
          <span className="px-2 mr-2 border-r border-gray-600 hidden lg:inline-block">
            <img
              src="./icon.png"
              alt="alt placeholder"
              className="w-8 h-8 -mt-1 inline mx-auto"
            />
          </span>
          <span className="hidden md:inline-block text-center text-white">
            <i className="w-8 fas fa-clock p-2 bg-gray-800 rounded-full mr-2"></i>
          </span>
          <span className="text-center hidden md:inline-block lg:hidden text-white border-l border-gray-700 ml-5 pl-5">
            PVU Manager
          </span>
        </div>
      )}
    </div>
  );
};

export default DarkMode;
