import React from 'react';

const BenefitCard = ({ image, title, description }) => {
  return (
    <div className='font-roboto group rounded-lg p-[1px] overflow-hidden max-w-sm mx-auto hover:bg-gradient-to-br hover:from-gray-700 hover:via-green-700 hover:to-purple-700'>
      <div className='flex flex-col items-center justify-between rounded-lg w-full h-full bg-slate-900 group-hover:bg-gradient-to-br group-hover:from-black group-hover:via-gray-950 group-hover:to-slate-900 '>
        <img className="w-full h-32 object-contain pt-6" src={image} alt={title} />
        <div className='flex flex-col items-center justify-center p-4 text-center'>
          <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
