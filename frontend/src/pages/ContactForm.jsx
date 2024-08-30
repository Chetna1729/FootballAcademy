import React, { useState } from 'react';

const ContactForm = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending the data to a backend
    console.log('Form Data Submitted:', formData);

    // Set the form as submitted
    setSubmitted(true);

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Thank you!</h3>
          <p>Your message has been sent successfully.</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
