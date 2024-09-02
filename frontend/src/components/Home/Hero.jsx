// eslint-disable-next-line no-unused-vars
import React from "react";
import '../../index.css'
import { Link } from 'react-router-dom';
import ArrowUp from '../../assets/arrow-up.png'

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] bg-gradient-to-br from-black via-gray-900 to-gray-950 font-pop text-white">
      <div className="flex flex-col justify-center items-center mx-8">
        {/* 1st Box */}
        <div className="flex items-center justify-center group rounded-full bg-slate-800 p-[2px]  md:w-[400px] hover:bg-gradient-to-br hover:from-gray-700 hover:via-green-700 hover:to-purple-700">
          <div className="flex justify-center itemse-center rounded-full px-12 py-2 w-full h-full bg-black group-hover:bg-gradient-to-br group-hover:from-gray-950 group-hover:via-green-950 group-hover:to-purple-950">
            <h5>Where Champions are made...</h5>
          </div>
        </div>
        {/* 2nd Box */}
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold pt-8 md:text-4xl xl:text-6xl">RISING SUN FOOTBALL <span className="text-[#78FF40]">ACADEMY</span></h2>
        </div>
        {/* 3rd Box */}
        <div className="flex justify-center py-2 text-white text-sm">
          <h4>Unlock your potential with top-tier training and expert coaching.</h4>
        </div>
        {/* 4th Box */}
        <div className="flex justify-center mt-8">
          <Link to="/login" className="flex items-center rounded-md bg-[#D7FF40] px-6 py-2 font-semibold text-black hover:bg-[#B5D53E] md:px-8 md:py-3">
            Join Now
            <img src={ArrowUp} alt="Arrow Up" className="ml-2 w-4 h-4" />
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;