import React, { useState, useEffect } from 'react';
import '../AboutTestimonials.css'; // Assuming you have CSS styles for your components

const AboutTestimonials = () => {
  const testimonials = [
    {
      imgSrc: "https://res.cloudinary.com/dxyzgyveu/image/upload/v1710155161/abroad_5_axoytk.jpg",
      name: "Samantha Jones",
      location: "San Francisco, USA",
      text: "Delighted with my recent Java book purchase from Book Exchange; exceptional service and satisfaction guaranteed! Satisfied beyond measure with my Java book from Book Exchange—a testament to their commitment to excellence and client satisfaction."
    },
    {
      imgSrc: "https://res.cloudinary.com/dxyzgyveu/image/upload/v1710155132/abroad_4_gtorpy.jpg",
      name: "James Johnson",
      location: "San Francisco, USA",
      text: "Extremely happy with my DSA book purchase from Book Exchange. The website was easy to navigate, and the book arrived in perfect condition. A fantastic shopping experience overall!"
    },
    {
      imgSrc: "https://res.cloudinary.com/dxyzgyveu/image/upload/v1710235484/abroad_15_cn61cd.png",
      name: "Emily Johnson",
      location: "San Francisco, USA",
      text: "I'm absolutely thrilled with my new Linear Algebra book from Book Exchange! The quality is outstanding, and the process was so smooth. I am happier with my purchase!"
    },
    {
      imgSrc: "https://res.cloudinary.com/dxyzgyveu/image/upload/v1710154979/abroad_2_ei1fmh.jpg",
      name: "Jessica Davis",
      location: "San Francisco, USA",
      text: "Upon purchasing a DBMS book from Book Exchange. The book's exceptional quality and comprehensive content have exceeded my expectations, ensuring a fulfilling reading experience. My satisfaction with Book Exchange is matched, and I look forward to further enriching my library with their offerings."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change interval time as needed

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="container3">
      <div className="contents-wraper">
        <section className="header">
          <h1>Testimonial</h1>
        </section>
        <section className="testRow">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testItem ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={testimonial.imgSrc} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.location}</h4>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AboutTestimonials;
