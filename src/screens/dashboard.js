import React, { useState } from 'react';
import Card from '../components/cards/card';

const Dashboard = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto h-full bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 text-3xl font-medium">Farm</h3>

        <div className="mt-4">
          <div className="flex flex-wrap"></div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
