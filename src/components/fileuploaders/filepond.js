import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useToken from '../../hooks/useToken.js';

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
const AvatarPicker = ({ id = -1 }) => {
  const [files, setFiles] = useState([]);
  const { token } = useToken();
  const server = {
    url: `http://127.0.0.1:8000/api/plants/${id}/update`,
    process: {
      method: 'POST',
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: 7000,
      onload: (data) => console.log('Successful file upload filepond', data),
      onerror: (data) => console.error('Error at file upload filepond', data),
      ondata: null,
    },
  };
  return (
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={false}
      maxFiles={1}
      server={server}
      name="files"
    />
  );
};

AvatarPicker.propTypes = {
  id: PropTypes.number,
};

export default AvatarPicker;
