// eslint-disable-next-line no-unused-vars
import React from "react";
import '../index.css'
import ArrowUp from '../assets/arrow-up.png'
  
const Hero = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center custom-gradient-bg font-pop text-white">
      <div className="px-4 text-center">
        <p className="text-base md:text-lg">Where Champions Are Made...</p>
        <h2 className="pb-4 pt-8 text-3xl font-bold md:text-6xl">
          RISING SUN FOOTBALL <span className="text-[#78FF40]">ACADEMY</span>
        </h2>
        <div className="py-5 text-white">
          <p>
            Unlock your potential with top-tier training and expert coaching.
            <br />
            Elevate your game and chase your football dreams with us.
          </p>
        </div>
        <div className="pt-6 flex justify-center">
          <button className="flex items-center justify-center rounded-sm bg-[#D7FF40] px-6 py-2 font-semibold text-black hover:bg-[#B5D53E] md:px-8 md:py-3">
            Join Now 
            <img src={ArrowUp} alt="Arrow Up" className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;