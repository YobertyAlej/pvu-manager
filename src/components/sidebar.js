import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className="translate-x-0 ease-out fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
    <div className="flex items-center justify-center mt-8">
      <div className="flex items-center">
        <img className="h-10 w-10 rounded-full" src="/icon.png" alt="" />
      </div>
    </div>
    <div className="flex justify-center items-center mt-4">
      <span className="text-white text-2xl mx-2 font-semibold">
        Plant vs Undead
      </span>
    </div>

    <nav className="mt-10">
      <NavLink
        to="/farm"
        className="flex items-center py-2 px-6 bg-opacity-25 text-gray-100"
        activeClassName="flex items-center py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100"
      >
        👨🏻‍🌾 Farm
      </NavLink>
      <NavLink
        to="/harvest"
        className="flex items-center py-2 px-6 bg-opacity-25 text-gray-100"
        activeClassName="flex items-center py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100"
      >
        ⏰ Harvest
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
