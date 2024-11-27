import React from "react";

const Card = () => {
  return (
    <div className="max-w-[300px] bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://via.placeholder.com/300x150" // Replace with your image
        alt="Project Preview"
        className="w-full h-[150px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Web Developer</h3>
        <p className="text-sm text-gray-600 mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
      </div>
    </div>
  );
};

export default Card;
