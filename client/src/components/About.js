
import { useEffect, React ,useState} from 'react';


const About = () => {
  const [counter, setCounter] = useState(0);
  const [testSlide, setTestSlide] = useState([]);
  const [dots, setDots] = useState([]);
  const [deleteInterval, setDeleteInterval] = useState(null);

  useEffect(() => {
    const testItems = document.querySelectorAll('.testItem');
    setTestSlide(Array.from(testItems));
  
    const dotItems = document.querySelectorAll('.dot');
    console.log('dotItems:', dotItems);
    setDots(Array.from(dotItems));

    // Start auto-sliding
    const intervalId = setInterval(slideNext, 2000);
    setDeleteInterval(intervalId);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once on mount

  const switchTest = (currentTest) => {
    const testId = parseInt(currentTest.getAttribute('attr'), 10);
    if (testId > counter) {
      testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
      setCounter(testId);
      testSlide[testId].style.animation = 'next2 0.5s ease-in forwards';
    } else if (testId === counter) {
      return;
    } else {
      testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
      setCounter(testId);
      testSlide[testId].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
  };

  const indicators = () => {
    // Check if dots array is defined
    if (!dots) {
      console.error('dots array is not initialized.');
      return;
    }

    for (let i = 0; i < dots.length; i++) {
      // Check if dots[i] is not undefined before accessing its classList
      if (dots[i]) {
        dots[i].classList.remove('active');
      }
    }

    // Check if dots[counter] is not undefined before accessing its classList
    if (dots[counter]) {
      dots[counter].classList.add('active');
    }
  };

  const slideNext = () => {
    console.log('testSlide:', testSlide);
    console.log('counter:', counter);
  
    if (!testSlide || counter < 0 || counter >= testSlide.length) {
      console.error('Invalid testSlide array or counter value.');
      return;
    }
  
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    const nextCounter = counter >= testSlide.length - 1 ? 0 : counter + 1;
    setCounter(nextCounter);
    testSlide[nextCounter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
  };
  
  const pause = () => {
    clearInterval(deleteInterval);
  };

  const autoSliding = () => {
    const intervalId = setInterval(() => {
      slideNext();
      indicators();
    }, 2000);
    setDeleteInterval(intervalId);
  };



  return (
    
      <div className="hero">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="container00">
          <div className="hero-content">
            <h2>About BookXchange</h2>
            <p>Welcome to BookXchange, the ultimate hub for book enthusiasts seeking to connect and swap beloved reads! Our
              platform acts as a dynamic bridge between passionate readers, facilitating the seamless exchange of literary
              treasures.</p>
            <button className="cta-button"><a href="#move1">Learn More</a></button>
          </div>
          <div className="hero-image">
           <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714116776/book_about_hd_jem22h.png"/>
          </div>
        </div>
     

      <div className="heading0">
        <h1>Our Mission</h1>
   
      </div>
      <div className="container0">
        <section className="about">
          <div className="about-image">
           <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714117905/group_study_hd__resized_gpgrfk.png"/>
          </div>
          <div className="about-content">
            <h3>Empowering readers globally with expert guidance.</h3>
            <p>At Book Exchange, our mission is to revolutionize the way people access and engage with knowledge. Beyond
              facilitating the exchange of beloved reads, we're committed to providing a platform where academic books
              find their rightful place.Join us in our mission to make learning accessible, collaborative, and
              transformative for all.</p>
            <a href="" className="read-more">Read More</a>
          </div>
        </section>
      </div>

      <div className="heading0">
        <h1>Our Vision</h1>
        
      </div>
      <div className="container0">
        <section className="about">
          <div className="about-content">
            <h3>Revolutionizing global education through knowledge exchange at BookXchange.</h3>

            <p>We extend our vision beyond digital realms to physical spaces, facilitating gatherings for idea-sharing and
              collaboration. Innovating in the literary world, we leverage technology to empower exploration, learning,
              and creativity.Ultimately, our goal is to ignite a passion for reading and lifelong learning, leaving a
              positive impact on individuals, communities.</p>

            <a href="" className="read-more">Read More</a>
          </div>
          <div className="about-image">
           <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714119283/group_study3_resized_aiaf3k.jpg"/>
          </div>
        </section>
      </div>



      <div id="move1">
        <div className="container1">
          <h1 className="heading">Our Popular Books</h1>
          <div className="box-container">
            <div className="box">
             <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714111237/java_prog_book_resized_g92rb7.webp"/>
                <h3>Java</h3>
                <p>Customer delight, ensured with Java excellence.</p>
                <a href="" className="btn">Buy Now</a>
            </div>
            <div className="box">
             <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714112813/dsa2_hd_resized_y29ebs.jpg"/>

                <h3>DSA</h3>
                <p>100% client satisfaction and high success rate.</p>
                <a href="http://localhost:3000/buy/viewBookDetails/662a2414790ae6c092b0b5f8" className="btn">Buy Now</a>
            </div>
            <div className="box">
             <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714113757/daa2_hd_resized_c65kaz.jpg"/>

                <h3>DAA</h3>
                <p>Guaranteed satisfaction, high success rates.</p>
                <a href="" className="btn">Buy Now</a>
            </div>
            <div className="box">
             <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714114495/LA_hd_resized_jhkxdv.jpg"/>

                <h3>Linear Algebra</h3>
                <p>Ensuring customer delight, with success guaranteed.</p>
                <a href="" className="btn">Buy Now</a>
            </div>
            <div className="box">
             <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714115171/dbms_hd_resized_bapeqi.png"/>

                <h3>DBMS</h3>
                <p>Ensuring client satisfaction alongside top success rates.</p>
                <a href="" className="btn">Buy Now</a>
            </div>
            <div className="box">
             <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714116257/physics_hd-resized_tidyuq.png"/>

                <h3>Physics</h3>
                <p>"100% client satisfaction and exceptional success."</p>
                <a href="" className="btn">Buy Now</a>
            </div>
          </div>
        </div>
      </div>




{/* 
      <!-- testimonals --> */}
      <div className="container3">
      <div className="contents-wraper">
        <section className="header">
          <h1>Testimonial</h1>
        </section>
        <section class="testRow">
          <div class="testItem active">
            <img src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1710155161/abroad_5_axoytk.jpg"/>
            <h3>Samantha Jones</h3>
            <h4>san Fransisco,USA</h4>
            <p>Delighted with my recent Java book purchase from Book Exchange; exceptional service and satisfaction
              guaranteed!
              Satisfied beyond measure with my Java book from Book Exchange—a testament to their commitment to
              excellence and client satisfaction.
            </p>

          </div>

          <div class="testItem">
            <img src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1710155132/abroad_4_gtorpy.jpg"/>
            <h3>James Johnson</h3>
            <h4>san Fransisco,USA</h4>
            <p>Extremely happy with my DSA book purchase from Book Exchange. The website was easy to navigate, and the
              book arrived in perfect condition. A fantastic shopping experience overall!</p>

          </div>

          <div class="testItem">
            <img src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1710235484/abroad_15_cn61cd.png"/>
            <h3>Emily Johnson</h3>
            <h4>san Fransisco,USA</h4>
            <p>I'm absolutely thrilled with my new Linear Algebra book from Book Exchange! The quality is outstanding,
              and the process was so smooth. Iam happier with my purchase!"</p>

          </div>

          <div class="testItem">
            <img src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1710154979/abroad_2_ei1fmh.jpg"/>
            <h3>Jessica Davis</h3>
            <h4>san Fransisco,USA</h4>
            <p>Upon purchasing a DBMS book from Book Exchange. The book's exceptional quality and comprehensive content
              have exceeded my expectations, ensuring a fulfilling reading experience. My satisfaction with Book
              Exchange is matched, and I look forward to further enriching my library with their offerings.</p>

          </div>


        </section>
        <section className="indicators" onMouseOver={pause} onMouseOut={autoSliding}>
          {dots.map((dot, index) => (
            <div className={`dot ${index === counter ? 'active' : ''}`} key={index} attr={index} onClick={() => switchTest(dot)}></div>
          ))}
        </section>
      </div>
    </div>
  
    </div>
    
  )
}

export default About

