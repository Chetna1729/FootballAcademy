import React from "react";

const AboutContent = () => {
  return (
    <div className="font-pop h-auto w-72 bg-[#CBFF4D] text-[#000000]">
      <ul className="flex flex-col items-center justify-center py-4">
        <li className="p-2 hover:font-bold"><a href="/">History</a></li>
        <li className="p-2 hover:font-bold"><a href="/">Achievements</a></li>
        <li className="p-2 hover:font-bold"><a href="/">Mission</a></li>
      </ul>
    </div>
  );
};

export default AboutContent;
