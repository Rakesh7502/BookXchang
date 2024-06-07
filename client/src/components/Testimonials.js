// Testimonials.js
import React, { useEffect, useState } from 'react';
// import './Testimonials.css'; // Make sure you have this file

const Testimonials = () => {
  const testimonials = [
    "BookXchange helped me find affordable textbooks for my courses. Highly recommended!",
    "Selling my old books on BookXchange was quick and easy. I made some extra cash without any hassle.",
    "I love the idea of reducing paper waste and saving money on textbooks. BookXchange is fantastic!",
    "Great platform for students who want to save money and find quality used books."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials section">
      <h2>What Our Users Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className={`testimonial ${idx === index ? 'active' : ''}`}>
            <p>{testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
