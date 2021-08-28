import React, { useState } from 'react';
import Card from '../components/cards/card';

const Farm = () => {
  const [saplings, setSaplings] = useState(0);
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 text-3xl font-medium">Farm</h3>

        <div className="mt-4">
          <div className="flex flex-wrap">
            <Card metric={saplings} text="🌼 Mama" />
            <Card metric={saplings} text="🌻 Saplings" />
            <Card metric={saplings} text="☀️ LE" />
            <Card metric={saplings} text="🍀 PVU" />
            <Card metric={saplings} text="🌻 saplings growing" />
            <Card metric={saplings} text="🌻 saplings to harvest" />
            <Card metric={saplings} text="🌼 mamas growing" />
            <Card metric={saplings} text="🌼 mamas to harvest" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Farm;
