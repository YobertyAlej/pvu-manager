import React, { useState } from 'react';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types';
import moment from 'moment';

const HarvestPlant = ({ type, time }) => {
  const getPlantName = () => (type == 'sapling' ? 'Sapling' : 'Mama');
  const getPlantIcon = () => (type == 'sapling' ? '/sapling.png' : '/mama.png');

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
          {moment(time).add(72, 'hours').format('LLL')}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <Countdown
          daysInHours={true}
          date={moment(time).add(72, 'hours').toString()}
        />
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Open in PVU
        </a>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
        <button className="bg-white font-bold rounded border-b-2 border-green-600 bg-green-500 text-white shadow-md py-2 px-4 inline-flex items-center">
          <span className="mr-2">Harvest</span>
        </button>
      </td>
    </tr>
  );
};

HarvestPlant.propTypes = {
  type: PropTypes.string,
  time: PropTypes.any,
};

export default HarvestPlant;
