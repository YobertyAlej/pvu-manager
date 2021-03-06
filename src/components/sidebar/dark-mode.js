import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const DarkMode = () => {
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
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
