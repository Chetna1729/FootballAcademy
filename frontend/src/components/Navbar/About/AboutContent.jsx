// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="font-pop h-auto w-72 bg-[#CBFF4D] text-[#000000]">
      <ul className="flex flex-col items-center justify-center py-4">
        <li className="p-2 hover:font-bold"><Link to="/history">History</Link></li>
        <li className="p-2 hover:font-bold"><Link to="/achievments">Achievements</Link></li>
        <li className="p-2 hover:font-bold"><Link to="/mission">Mission</Link></li>
      </ul>
    </div>
  );
};

export default AboutContent;