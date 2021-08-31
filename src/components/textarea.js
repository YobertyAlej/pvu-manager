import React from 'react';

const Textarea = () => {
  return (
    <div className="flex-auto w-full mb-1 text-sm space-y-2">
      <label className="font-semibold text-gray-600 py-2">Description</label>
      <textarea
        required=""
        name="message"
        id=""
        className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
        placeholder="Enter your comapny info"
        spellCheck="false"
      ></textarea>
      <p className="text-sm text-gray-400 text-left my-3">
        You inserted 0 characters
      </p>
    </div>
  );
};

export default Textarea;
