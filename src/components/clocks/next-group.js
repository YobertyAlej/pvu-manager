import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { PVU_AUTH_TOKEN } from '../../constants.js';

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
      <span className="text-white relative float-right mt-1 mr-10">
        Cargando data
      </span>
    );
  }

  return (
    <>
      {group.currentGroup == group.inGroup && (
        <a
          href="https://marketplace.plantvsundead.com/farm#/farm"
          target="_tab"
        >
          <span className="cursor-pointer w-10 relative float-right mr-3">
            <i className="fas fa-users p-2 bg-green-500 rounded-full text-white"></i>
          </span>
        </a>
      )}
      {group.currentGroup != group.inGroup && (
        <a
          href="https://marketplace.plantvsundead.com/farm#/farm"
          target="_tab"
        >
          <span className="cursor-pointer w-10 relative float-right mr-3">
            <i className="fas fa-users p-2 bg-red-500 rounded-full text-white"></i>
          </span>
        </a>
      )}
      <span className="text-white w-30 relative float-right mr-5  pl-5">
        <i className="fas fa-check mr-2"></i>
        <span className="text-gray-500">Current Group: </span>{' '}
        {group.currentGroup}
      </span>
      <span className="text-white w-30 relative float-right pl-5 pr-5 border-r">
        <i className="fas fa-user mr-2"></i>
        <span className="text-gray-500">Your group: </span> {group.inGroup}
      </span>
      <span className="text-white relative float-right pr-5 border-r">
        <i className="fas fa-clock mr-2"></i>
        <span className="text-gray-500">Next group: </span>
        {getNextGroupTime()}
      </span>
    </>
  );
};

export default NextGroup;
