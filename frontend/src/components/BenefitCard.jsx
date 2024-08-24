import React from 'react';

const BenefitCard = ({ image, title, description }) => {
  return (
    <div className="bg-[#D7FF40] shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
