// eslint-disable-next-line no-unused-vars
import React from "react";
import { ReactTyped } from "react-typed";
  
const Hero = () => {
  return (
    <div className="font-pop bg-[#010B13] text-white">
      <div className="w-full md:w-[750px] pl-8 md:pl-32 pt-12 md:pt-24">
        <div className="">
          <p className="text-base md:text-lg">Where Champions Are Made...</p>
          <h2 className="pb-4 pt-8 text-3xl md:text-6xl font-bold">
            RISING SUN FOOTBALL <span className="text-[#78FF40]">ACADEMY</span>
          </h2>
          <div className="text-white py-5">
          <ReactTyped
            strings={[
              "Unlock your potential with top-tier training and expert coaching.<br/>Elevate your game and chase your football dreams with us.",
            ]}
            typeSpeed={40}
            showCursor={false}
            htmlTag="div"
            className="text-white"
          />
        </div>
        </div>
        <div className="py-12">
          <button className="rounded-sm bg-[#D7FF40] px-6 md:px-8 py-2 md:py-3 font-semibold text-black hover:bg-[#B5D53E]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;