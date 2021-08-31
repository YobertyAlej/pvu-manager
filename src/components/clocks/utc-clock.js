import React, { useEffect, useState } from 'react';
import moment from 'moment';

const UTCClock = () => {
  const [utc, setUtc] = useState(moment.utc());

  const tick = () => {
    setUtc(moment.utc());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      <span className="hidden sm:inline-block">UTC</span>{' '}
      {`${utc.format('hh:mm:ss')}`}
    </span>
  );
};

export default UTCClock;
