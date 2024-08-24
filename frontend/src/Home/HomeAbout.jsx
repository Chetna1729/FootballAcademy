import React, { useEffect } from 'react'
import BenefitCard from '../components/BenefitCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
    {
      image: 'https://example.com/elite-coaching.jpg',
      title: 'Elite Coaching',
      description: 'Learn from the best! Our coaches are seasoned professionals dedicated to bringing out the champion in you.',
    },
    {
      image: 'https://example.com/state-of-the-art-facilities.jpg',
      title: 'State-of-the-Art Facilities',
      description: 'Train in top-notch facilities with the latest equipment and resources.',
    },
    {
      image: 'https://example.com/community-support.jpg',
      title: 'Community and Support',
      description: 'Be part of a community that supports and uplifts each other, both on and off the field.',
    },
    {
      image: 'https://example.com/community-support.jpg',
      title: 'Oppurtunity',
      description: 'Get a chance to experience exciting tournaments alongside our dedicated and talented football team.',
    },
  ];
  
const HomeAbout = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-[#010B13] font-pop text-white">
      <div className="w-full pl-8 pt-12 md:w-[750px] md:pl-32 md:pt-24">
        <div>
          <p className="relative text-2xl font-bold text-[#78FF40] before:mr-6 before:inline-block before:h-12 before:w-2 before:bg-[#78FF40] before:align-middle before:content-['']">
            WHY TO CHOOSE US?
          </p>
          <h2 className="pb-4 pt-8 text-xl md:text-xl font-sans">
            We are a team of passionate individuals who are dedicated to providing the best possible experience for our customers
          </h2>
        </div>
      </div>
      <div data-aos="fade-out-up" className="grid grid-cols-1 my-14 mx-24 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard 
              key={index} 
              image={benefit.image} 
              title={benefit.title} 
              description={benefit.description} 
          />
        ))}
      </div>
      <div className="w-full h-20 bg-black">
        <p></p>
      </div>
    </div>
  )
}

export default HomeAbout