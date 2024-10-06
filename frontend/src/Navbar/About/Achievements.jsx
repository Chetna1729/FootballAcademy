// src/components/AchievementsPage/AchievementsPage.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import u8 from "../../assets/u8.jpg";
import { Link } from "react-router-dom";

const AchievementsPage = () => {
  const achievements = [
    {
      title: "2010: Academy Founded",
      description: "The journey began in 2010 with a mission to nurture young talent.",
      imageUrl: "https://via.placeholder.com/300", 
    },
    {
      title: "2012: First Major Championship Win",
      description: "We won our first major championship, marking the start of our success.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      title: "2015: Expansion to Multiple Locations",
      description: "Expanded to multiple locations, bringing our training to more aspiring athletes.",
      imageUrl: "https://via.placeholder.com/300", 
    },
    {
      title: "2018: Partnership with International Coaches",
      description: "Collaborated with international coaches to enhance our training programs.",
      imageUrl: "https://via.placeholder.com/300", 
    },
    {
      title: "2020: Launch of Advanced Training Programs",
      description: "Introduced advanced training programs to further develop our players.",
      imageUrl: "https://via.placeholder.com/300", 
    },
    {
      title: "2022: Launch of Advanced Training Programs",
      description: "Introduced advanced training programs to further develop our players.",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="bg-[#010B13] text-white min-h-screen p-8">
    <header className="py-4">
      <Link to="/" className="flex items-center text-yellow-400 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
        <img src={u8} alt="Academy Team" className="w-full h-65 object-cover" />
        <h1 className="text-4xl font-bold text-center mb-8">Our Achievements</h1>
      </header>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-[#FFD700] text-black rounded-md p-4 shadow-lg">
            <img src={achievement.imageUrl} alt={achievement.title} className="rounded-md w-full h-48 object-cover mb-4" />
            <h2 className="text-2xl font-bold mb-2">{achievement.title}</h2>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
