import React, { useEffect } from 'react'
import BenefitCard from '../components/BenefitCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import coachImg from '../assets/undraw_teaching_re_g7e3.svg'
import oppurnityImg from '../assets/undraw_junior_soccer_6sop.svg'
import supportImg from '../assets/undraw_fans_re_cri3.svg'
import facilityImg from '../assets/undraw_goal_-0-v5v.svg'


const benefits = [
  {
    image: coachImg,
    title: 'Elite Coaching',
    description: 'Learn from the best! Our coaches are seasoned professionals dedicated to bringing out the champion in you.',
  },
  {
    image: facilityImg,
    title: 'State-of-the-Art Facilities',
    description: 'Train in top-notch facilities with the latest equipment and resources.',
  },
  {
    image: supportImg,
    title: 'Community and Support',
    description: 'Be part of a community that supports and uplifts each other, both on and off the field.',
  },
  {
    image: oppurnityImg,
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
    <div className="bg-slate-950 font-pop text-white">
      <div className="w-full pl-8 pt-12 pb-20 md:w-[750px] md:pl-32 md:pt-24">
        <div>
          <p className="relative text-2xl font-bold text-[#78FF40] before:mr-6 before:inline-block before:h-12 before:w-2 before:bg-[#78FF40] before:align-middle before:content-['']">
            WHY TO CHOOSE US?
          </p>
          <h2 className="pb-4 pt-8 text-lg sm:text-xl md:text-2xl font-sans">
            We are a team of passionate individuals who are dedicated to providing the best possible experience for our customers.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 px-6 pb-14 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10 md:px-16 shadow-lg shadow-white-500/50">
        {benefits.map((benefit, index) => (
          <BenefitCard
            data-aos="fade-out-up"
            key={index}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>

  )
}

export default HomeAbout
