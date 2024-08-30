import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqs = [
  {
    question: "What age groups do you cater to?",
    answer: "We offer training programs for children and young adults aged 6 to 18. Each age group has its own specialized curriculum designed to enhance their skills at the appropriate level.",
  },
  {
    question: "How can I register my child for the academy?",
    answer: "You can register your child online by visiting our Registration Page or by visiting our academy in person. For online registration, you'll need to fill out a form with basic details and complete the payment process.",
  },
  {
    question: "What is the fee structure for the programs?",
    answer: "Our fee structure varies depending on the program and age group. For detailed information on fees, please visit our Fee Structure Page or contact our administration office.",
  },
  {
    question: "What is the schedule for training sessions?",
    answer: "Training sessions are held three times a week. The exact days and times depend on the age group and the program. You can find the specific schedule on our Training Schedule Page.",
  },
];

const HomeFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='font-roboto min-w-full bg-[#010B13]'>
    <div className="max-w-3xl mx-auto p-4 bg-[#010B13] py-20">
      <h2 data-aos="fade-left" className="text-5xl font-bold text-center mb-12 text-[#78FF40]">Frequently Asked Questions</h2>
      <div className="space-y-4 text-white">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b-2 border-gray-200 pb-4"
            data-aos="fade-right"
          >
            <h3
              className="text-xl font-extrathin cursor-pointer mt-8"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h3>
            {activeIndex === index && (
              <p className="mt-2 text-slate-400">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomeFaq;
