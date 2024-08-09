import React from "react";

const TeamContent = () => {
  return (
    <div className="font-pop h-auto w-[600px] bg-[#CBFF4D] text-[#000000]">
      <ul className="flex flex-col items-center justify-center py-4">
        <p className="font-bold">Boys</p>
        <li className="p-2 hover:font-bold"><a href="/">Team 1</a></li>
        <li className="p-2 hover:font-bold"><a href="/">Team 2</a></li>
      </ul>
    </div>
  );
};

export default TeamContent;
