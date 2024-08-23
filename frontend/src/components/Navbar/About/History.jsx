// HistoryPage.jsx
import React from "react";

const HistoryPage = () => {
  return (
    <div className="font-pop bg-[#010B13] text-white min-h-screen p-6">
      <header className="py-4">
        <h1 className="text-4xl font-bold">History</h1>
      </header>
      <main>
        <section className="py-6">
          <h2 className="text-2xl font-semibold">Our Journey</h2>
          <p className="mt-4">
            Founded in 2010, Rising Sun Football Academy began with a vision to create a nurturing environment for young football enthusiasts. Over the years, we have grown into a leading football academy, known for our top-tier training programs and successful teams.
          </p>
          <p className="mt-4">
            Our commitment to excellence and the development of our players has led to numerous achievements and a growing community of dedicated athletes. From local tournaments to national championships, our academy has been a beacon of football talent and sportsmanship.
          </p>
        </section>
        <section className="py-6">
          <h2 className="text-2xl font-semibold">Milestones</h2>
          <ul className="mt-4 list-disc pl-5">
            <li>2010: Academy Founded</li>
            <li>2012: First Major Championship Win</li>
            <li>2015: Expansion to Multiple Locations</li>
            <li>2018: Partnership with International Coaches</li>
            <li>2020: Launch of Advanced Training Programs</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HistoryPage;
