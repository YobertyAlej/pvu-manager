import React from 'react';
import PropTypes from 'prop-types';

const TurnChecker = ({ group }) => {
  if (group.currentGroup == group.inGroup) {
    return (
      <a href="https://marketplace.plantvsundead.com/farm#/farm" target="_tab">
        <span className="cursor-pointer w-10 relative  mr-3">
          <i className="fas fa-users p-2 bg-green-500 rounded-full text-white"></i>
        </span>
      </a>
    );
  } else {
    return (
      <a href="https://marketplace.plantvsundead.com/farm#/farm" target="_tab">
        <span className="cursor-pointer w-10 relative  mr-3">
          <i className="fas fa-users p-2 bg-red-500 rounded-full text-white"></i>
        </span>
      </a>
    );
  }
};

TurnChecker.propTypes = {
  group: PropTypes.object,
};

export default TurnChecker;
