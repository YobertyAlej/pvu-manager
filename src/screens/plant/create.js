import React, { useState } from 'react';
import FilePicker from '../../components/fileuploaders/file-picker';
import useToken from '../../hooks/useToken.js';

const Create = () => {
  const [errors, setErrors] = useState();
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [le, setLE] = useState('');
  const [time, setTime] = useState('');
  const [permanent, setPermanent] = useState(true);
  const [price, setPrice] = useState('');

  const { token } = useToken();

  const submit = async () => {
    const form = {
      name,
      photo: image,
      le,
      time_in_hours: time,
      permanent,
      price,
    };
    return fetch('http://127.0.0.1:8000/api/plants', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then((data) => handleSuccess(data));
  };

  const handleSuccess = async (data) => {
    if (data.status == 422) {
      setErrors(data.statusText);
      return;
    }
    if (data.ok) {
      console.log('success!');
      alert('success!');
    }
  };

  return (
    <div className="flex mt-20 items-center justify-center bg-center bg-gray-50 items-center overflow-auto">
      <div className="w-full px-10 py-10 bg-white rounded-xl shadow-lg">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-center">
              <h1 className="font-bold text-xl mr-auto">Create New Plant ☘️</h1>
            </div>
            <div className="mt-4">
              <div className="form">
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Name <span title="required">*</span>
                    </label>
                    <input
                      placeholder="Plant Name"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <p className="text-red-500 text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Harvest LE <span title="required">*</span>
                    </label>
                    <input
                      placeholder="Harvest LE"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="number"
                      onChange={(e) => setLE(e.target.value)}
                    />
                    <p className="text-red-500 text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Time <span title="required">*</span>
                    </label>
                    <input
                      placeholder="Time"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="number"
                      onChange={(e) => setTime(e.target.value)}
                    />
                    <p className="text-red-500 text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Price <span title="required">*</span>
                    </label>
                    <input
                      placeholder="Price"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <p className="text-red-500 text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>

                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Upload image<span title="required">*</span>
                    </label>
                    <FilePicker handler={setImage} />
                  </div>

                  <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2">
                      Permanent<span title="required">*</span>
                    </label>

                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={permanent}
                      onChange={(e) => setPermanent(!permanent)}
                    />

                    <p className="text-sm text-red-500 hidden mt-3" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                {false && (
                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Description
                    </label>
                    <textarea
                      required=""
                      name="message"
                      id=""
                      className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="Enter your comapny info"
                      spellCheck="false"
                    ></textarea>
                    <p className="text-xs text-gray-400 text-left my-3">
                      You inserted 0 characters
                    </p>
                  </div>
                )}
                <p className="text-xs text-red-500 text-center my-3">
                  Required fields are marked with an asterisk{' '}
                  <span title="Required field">*</span>
                </p>
                <div className="mt-5 text-center md:space-x-3 md:block flex flex-col-reverse">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                    {' '}
                    Cancel{' '}
                  </button>
                  <button
                    onClick={submit}
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
