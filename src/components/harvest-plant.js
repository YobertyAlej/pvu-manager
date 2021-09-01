import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types';
import moment from 'moment';

const HarvestPlant = ({ sow }) => {
  const [harvest, setHarvest] = useState(sow.harvestTime);
  const [paused, setPaused] = useState();

  const getPlantName = () => sow.plant.name;
  const getPlantIcon = () => sow.plant.iconUrl;

  const tick = () => {
    const harvest = moment(sow.harvestTime).fromNow();
    if (sow.pausedTime) {
      const paused = moment(sow.pausedTime).fromNow();
      setPaused(paused);
    }
    setHarvest(harvest);
  };

  const payload_apply_tool_water = {
    farmId: '612f052cb7e229000967afba',
    toolId: 1,
    token: { challenge: 'default', seccode: 'default', validate: 'default' },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={getPlantIcon()}
              alt=""
            />
          </div>

          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">
              {getPlantName()}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {harvest}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {paused}
        {!paused && 'Clean'}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {sow.needWater && (
          <span className="fas fa-water p-2 rounded-full text-yellow-800 bg-yellow-500"></span>
        )}
        {!sow.needWater && (
          <span className="fas fa-water p-2 rounded-full text-blue-800 bg-blue-400"></span>
        )}
      </td>
    </tr>
  );
};

HarvestPlant.propTypes = {
  sow: PropTypes.object,
};

export default HarvestPlant;
