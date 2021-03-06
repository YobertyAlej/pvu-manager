import React from 'react';
import PropTypes from 'prop-types';

const FilePicker = ({ handler }) => {
  return (
    <label className="flex flex-col items-center px-4 py-2 bg-blue-500 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer text-white hover:text-gray-800">
      <svg
        className="w-8 h-6"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </svg>
      <input
        type="file"
        className="hidden"
        onChange={(e) => handler(e.target.files[0])}
      />
    </label>
  );
};

FilePicker.propTypes = {
  handler: PropTypes.func,
};

export default FilePicker;
