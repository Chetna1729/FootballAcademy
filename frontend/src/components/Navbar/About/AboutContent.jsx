import React from "react";
import { Link } from "react-router-DOM";

const AboutContent = () => {
  return (
    <div className="font-pop h-auto w-72 bg-[#FFD700] border-4 border-[#000000] rounded-md text-[#000000] ">
      <ul className="flex flex-col items-center justify-center py-4">
        <li className="p-2 hover:font-bold"><Link to="/history">History</Link></li>
        <li className="p-2 hover:font-bold"><a href="/">Achievements</a></li>
        <li className="p-2 hover:font-bold"><a href="/">Mission</a></li>
      </ul>
    </div>
  );
};

export default AboutContent;
