import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types';
import moment from 'moment';

const HarvestPlant = ({ sow }) => {
  const [harvest, setHarvest] = useState(false);
  const getPlantName = () => sow.plant.name;
  const getPlantIcon = () => sow.image;

  useEffect(() => {
    const today = moment();
    const harvest_time = moment(sow.created_at).add(72, 'hours');

    if (harvest_time.diff(today) < 0) {
      setHarvest(true);
    }
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
        <span className="text-sm ">
          {moment(sow.created_at)
            .add(sow.plant.time_in_hours, 'hours')
            .format('LLL')}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <Countdown
          daysInHours={true}
          date={moment(sow.created_at)
            .add(sow.plant.time_in_hours, 'hours')
            .toString()}
          onComplete={() => setHarvest(true)}
        />
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Open in PVU
        </a>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
        <button
          className={
            harvest
              ? 'font-bold rounded border-b-2 border-green-600 bg-green-500 text-white shadow-md py-2 px-4 inline-flex items-center'
              : 'cursor-not-allowed font-bold rounded border-b-2 border-green-600 bg-gray-500 text-white shadow-md py-2 px-4 inline-flex items-center'
          }
        >
          <span className="mr-2">Harvest</span>
        </button>
      </td>
    </tr>
  );
};

HarvestPlant.propTypes = {
  sow: PropTypes.object,
};

export default HarvestPlant;
