import React, { useState, useEffect } from 'react';
import Card from '../cards/card.js';
import PropTypes from 'prop-types';

const CryptoPriceTracker = ({ coin }) => {
  const [pvu_value, setPVU] = useState('');
  const [errors, setErrors] = useState('');

  const API_KEY = 'a63608d1-1fa4-4e6d-a6ea-762567b43b7c';

  const getData = async () => {
    return fetch('https://api.livecoinwatch.com/coins/single', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({
        currency: 'USD',
        code: coin,
        meta: true,
      }),
    });
  };

  useEffect(() => {
    getData()
      .then((data) => handleSuccess(data))
      .catch((error) => handleErrors(error));
  }, []);

  const handleSuccess = async (data) => {
    if (!data.ok) {
      setErrors(data.statusText);
      return;
    }
    const parsed = await data.json();
    setPVU(parsed);
  };
  const handleErrors = async (data) => {
    console.log('error', data);
    setErrors(data);
  };

  return (
    <Card
      metric={pvu_value ? pvu_value.rate.toFixed(8) : 0}
      text={pvu_value.name}
      image={pvu_value.png32}
      bg="yellow"
    />
  );
};

CryptoPriceTracker.propTypes = {
  coin: PropTypes.string,
};

export default CryptoPriceTracker;
