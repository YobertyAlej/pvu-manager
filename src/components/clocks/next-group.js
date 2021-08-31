import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { PVU_AUTH_TOKEN } from '../../constants.js';
import TurnChecker from './turn-checker.js';

const NextGroup = () => {
  const [utc, setUtc] = useState(moment.utc());
  const [errors, setErrors] = useState();
  const [group, setGroup] = useState(null);

  const tick = () => {
    setUtc(moment.utc());
  };

  const getData = async () => {
    return fetch('https://backend-farm-stg.plantvsundead.com/farm-status', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + PVU_AUTH_TOKEN,
      },
    });
  };

  const handleSuccess = async (data) => {
    if (!data.ok) {
      setErrors(data.statusText);
      return;
    }
    const parsed = await data.json();
    setGroup(parsed.data);
  };
  const handleErrors = async (data) => {
    console.log('error', data);
    setErrors(data);
  };

  const getNextGroupTime = () => {
    var diff = moment(group.nextGroup).fromNow();
    return `${diff}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getData()
      .then((data) => handleSuccess(data))
      .catch((error) => handleErrors(error));
  }, []);

  if (!group) {
    return (
      <span className="text-white relative  mt-1 mr-10">Cargando data</span>
    );
  }

  return (
    <div>
      <span className="hidden md:inline-block text-white pr-5 mr-5 border-r">
        <i className="fas fa-user mr-2"></i>
        <span className="text-gray-500 hidden lg:inline-block mr-1">
          Your group:
        </span>
        {group.inGroup}
      </span>
      <span className="lg:inline-block text-white pr-5 mr-5 border-r">
        <i className="fas fa-clock mr-2"></i>
        <span className="text-gray-500 hidden lg:inline-block mr-1">Turn:</span>
        {getNextGroupTime()}
      </span>
      <span className="hidden md:inline-block text-white pr-5 mr-5 border-r">
        <i className="fas fa-check mr-2"></i>
        <span className="text-gray-500 hidden lg:inline-block mr-1">
          Current Group:
        </span>
        {group.currentGroup}
      </span>
      <TurnChecker group={group} />
    </div>
  );
};

export default NextGroup;
