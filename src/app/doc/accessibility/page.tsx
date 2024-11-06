import React from "react";

const page = () => {
  return (
    <div>
      <span className="text-sm font-semibold text-blue-500">accessibility</span>
      <h1 className="text-4xl font-black py-2">How to use accessibility</h1>
      <div className="mt-20 mb-80">
        <div className="p-6 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            You can close the modal by pressing the button
          </h3>
          <h4 className="text-lg text-white opacity-80">
            <span className="font-medium text-base">onClose:</span> Press{" "}
            <span className="font-extrabold text-yellow-400">Esc</span> key
          </h4>
        </div>
      </div>
    </div>
  );
};

export default page;
