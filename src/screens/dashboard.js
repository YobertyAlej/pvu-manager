import React from 'react';
import Sidebar from '../components/sidebar.js';
import Dashboard from '../components/dashboard';

const App = () => {
  return (
    <div>
      <div className="flex h-screen bg-gray-200">
        <div className="block fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
