import React from 'react'
import Books from './Books'
import { useEffect, useRef, useState } from 'react';
import home_bg1 from '../assets/home_bg1.png'
import home_bg2 from '../assets/home_bg2.png'
import home_bg3 from '../assets/home_bg3.png'
import { Link } from 'react-router-dom';
import dsa from '../assets/dsa.jpg'
import daa from '../assets/daa.png'
import dbms from '../assets/dbms.png'
import java from '../assets/java.webp'
import phy from '../assets/phy.png'
import la from '../assets/la.jpg'
import registration from '../assets/registration.webp'
import list from '../assets/list.svg'
import contact from '../assets/address.svg'

import Testimonials from './Testimonials';
const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);
  const timeoutRef = useRef(null);

  const showSlides = () => {
    const slides = slidesRef.current;
    const dots = dotsRef.current;

    if (slides.length === 0 || dots.length === 0) {
      return;
    }

    for (let i = 0; i < slides.length; i++) {
      if (slides[i]) {
        slides[i].style.display = 'none';
      }
    }

    const newIndex = (slideIndex + 1) % slides.length;
    setSlideIndex(newIndex);

    for (let i = 0; i < dots.length; i++) {
      if (dots[i]) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
    }

    if (slides[newIndex]) {
      slides[newIndex].style.display = 'block';
    }
    if (dots[newIndex]) {
      dots[newIndex].className += ' active';
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      showSlides();
    }, 2000); // Change image every 2 seconds

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [slideIndex]);
  return (

    <div className='home-body'>
      <div className="home-slideshow-container">
        {/* <!-- images --> */}
        <div className="mySlides fade" ref={(el) => slidesRef.current[0] = el} style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
          <img src={home_bg3} style={{ width: "100%" }} />

          <div className="centered">
            <p className='slide-font'>
              <span className="first-letter">T</span>
              ransform Your Books into Savings!
            </p>
          </div>
        </div>

        <div className="mySlides fade" ref={(el) => slidesRef.current[1] = el} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
          <img src={home_bg1}
            style={{ width: "100%" }} />
          <div className="centered">
            <p className='slide-font'>
              Buy Smart, Sell Smart: BookXchange!
            </p>
          </div>
        </div>

        <div className="mySlides fade" ref={(el) => slidesRef.current[2] = el} style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
          <img src={home_bg2}
            style={{ width: "100%" }} />

          <div className="centered">
            <p className='slide-font'>Eco-Friendly Learning, Budget-Friendly Prices!</p>

          </div>

        </div>
        <div className='ctrl-buttons'>

          <div className="cta-buttons">
            <Link className='button' to="/sell" role='submit'>Sell Your Books</Link>
            <Link className='button' to="/buy" role='submit'>Browse Books for Sale</Link>
            {/* <button onClick="http://localhost:3000/sell">Sell Your Books</button>
              <button onClick="http://localhost:3000/buy">Browse Books for Sale</button> */}
          </div>
        </div>

      </div>

      <div style={{ textAlign: "center" }}>
        <span className={`dot ${slideIndex === 0 ? 'active' : ''}`} ref={(el) => dotsRef.current[0] = el}></span>
        <span className={`dot ${slideIndex === 1 ? 'active' : ''}`} ref={(el) => dotsRef.current[1] = el}></span>
        <span className={`dot ${slideIndex === 2 ? 'active' : ''}`} ref={(el) => dotsRef.current[1] = el}></span>
      </div>
      <div className="home-container">

        {/* <!-- Introduction Section --> */}
        <section className="section">
          <h2>Introduction to BookXchange</h2>
          <p>BookXchange is the perfect platform for students to buy and sell second-hand books. By offering
            affordable prices for used textbooks, we help students save money while also providing an opportunity
            for sellers to recoup some of their investment
            <br/>

            Selling your old books is simple: just upload them with your price. And if you're buying, browse our selection for great deals. We're all about making sure everyone gets what they need without spending too much.
            <br/>

            But it's not just about saving money. By buying and selling second-hand books, we're also reducing waste and helping the environment. It's a win-win for everyone.

              <br/>
            So come on in and join us. Welcome to BookXchange, where buying and selling books is as easy as ABC.</p>
        </section>

        {/* <!-- Featured Books Section --> */}
     
        <div id="move1">
        <div className="container1">
          <h1 className="heading">Our Popular Books</h1>
          <div className="box-container">
            <div className="box">
              <img className="about-img" src={java} />
              <h3>Java</h3>
              <p>Customer delight, ensured with Java excellence.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/662a23eb790ae6c092b0b5f6" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src={dsa}/>

              <h3>DSA</h3>
              <p>100% client satisfaction and high success rate.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/662a2414790ae6c092b0b5f8" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src={daa}/>

              <h3>DAA</h3>
              <p>Guaranteed satisfaction, high success rates.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/66618870ccc7071ed6cbf9c8" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src={la} />

              <h3>Linear Algebra</h3>
              <p>Ensuring customer delight, with success guaranteed.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/66619e758fd0160744bcea88" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src={dbms}/>

              <h3>DBMS</h3>
              <p>Ensuring client satisfaction alongside top success rates.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/662a244c790ae6c092b0b5fa" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src={phy}/>

              <h3>Physics</h3>
              <p>"100% client satisfaction and exceptional success."</p>
              <a href="http://localhost:3000/buy/viewBookDetails/66619e128fd0160744bcea86" className="btn">Buy Now</a>
            </div>
          </div>
        </div>
      </div>


   

        {/* <!-- Testimonials Section --> */}
        <Testimonials/>

        {/* <!-- How It Works Section --> */}
        <section className="how-it-works section">
          <h2>How It Works</h2>
          <div className="how-it-works-item">
            <img src={registration} alt="Register Icon" />
            <p>Create an account</p>
          </div>
          <div className="how-it-works-item">
            <img src={list} alt="List Icon" />
            <p>List your books for sale or browse available books</p>
          </div>
          <div className="how-it-works-item">
            <img src={contact} alt="Contact Icon" />
            <p>Contact the seller or buyer to arrange the transaction</p>
          </div>
        </section>

        {/* <!-- Benefits Section --> */}
        <section className="benefits section">
          <h2>Benefits of BookXchange</h2>
          <div className="benefit-item">
            <p>Save money by buying affordable second-hand books</p>
          </div>
          <div className="benefit-item">
            <p>Reduce paper waste and support sustainable practices in education</p>
          </div>
          <div className="benefit-item">
            <p>Earn money by selling your old textbooks</p>
          </div>
        </section>

      </div>





    </div>
  )
}

export default Home
