// pages/index.js
import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-gray-100 h-full ">
      <div className="container border-2 bg-gray-300 border-gray-400 rounded p-4 m-4 flex gap-x-4">


        <div className="container mx-auto flex flex-row">
          <img
            src="data:image/jpeg;base64,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"
            alt="Avatar"
            className="float-left mr-4 border-2 border-white rounded-full"
            style={{ width: '90px' }}
          />
          <div>
            <p className="text-lg font-semibold">
              <span>Chris Fox.</span> CEO at Mighty Schools.
            </p>
            <p>John Doe saved us from a web disaster.</p>
          </div>
        </div>
        <div className="container mx-auto flex flex-row">
          <img
            src="data:image/jpeg;base64,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"
            alt="Avatar"
            className="float-left mr-4 border-2 border-white rounded-full"
            style={{ width: '90px' }}
          />
          <div>
            <p className="text-lg font-semibold">
              <span>Chris Fox.</span> CEO at Mighty Schools.
            </p>
            <p>John Doe saved us from a web disaster.</p>
          </div>
        </div>

        <div className="container mx-auto mt-4">
          <img
            src="data:image/jpeg;base64,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"
            alt="Avatar"
            className="float-left mr-4 border-2 border-white rounded-full"
            style={{ width: '90px' }}
          />
          <div>
            <p className="text-lg font-semibold">
              <span>Rebecca Flex.</span> CEO at Company.
            </p>
            <p>No one is better than John Doe.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
