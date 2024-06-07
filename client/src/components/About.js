
import { useEffect, React, useState } from 'react';
// import CountUp from 'react-countup';
import bookXchangeintro from '../assets/bookXchange-intro.png'
import bookXchangemission from '../assets/bookXchange-mission.png'
import bookXchangevission from '../assets/bookXchange-vision.png'
import AboutTestimonials from './AboutTestimonials'
const About = () => {
  console.log("jsbjdk")

  const testItems = document.querySelectorAll('.testItem');

  // Check if testItems is not empty and contains elements'
  console.log(testItems)
  if (testItems.length > 0) {
    let index = 0;

    setInterval(() => {
      // Check if index is within bounds of the testItems NodeList
      if (index >= 0 && index < testItems.length) {
        // Remove 'active' class from the current testItem
        if (testItems[index].classList.contains('active')) {
          testItems[index].classList.remove('active');
        }

        // Increment index and add 'active' class to the next testItem
        index = (index + 1) % testItems.length;
        testItems[index].classList.add('active');
      } else {
        console.error('Index out of bounds or invalid testItems NodeList');
      }
    }, 5000); // Change the interval as needed
  } else {
    console.error('No testItems found or empty NodeList');
  }
  const [missionExpanded, setMissionExpanded] = useState(false);
  const [visionExpanded, setVisionExpanded] = useState(false);

  const handleMissionToggle = (e) => {
    e.preventDefault()
    setMissionExpanded(!missionExpanded);
  };

  const handleVisionToggle = () => {
    setVisionExpanded(!visionExpanded);
  };


  return (

    <div className="hero">
      <div className="heading">
        <h1>About Us</h1>
      </div>
      <div className="container00">
        <div className="hero-content">
          <h2>Welcome to BookXchange!</h2>
          <p>
            Welcome to BookXchange, where textbooks find new homes, students find affordable resources, and trees breathe a sigh of relief. Step into a world where education meets sustainability, and every page turned is a step towards a brighter future..</p>
          {/* <button className="cta-button"><a href="#vision">Learn More</a></button> */}
        </div>
        <div className="hero-image">
          <img className="about-img" src={bookXchangeintro} />
        </div>
      </div>


      {/* Our Mission */}
      <div className="heading0" id="mission">
        <h1>Our Mission</h1>
      </div>
      <div className="container0">
        <section className="about">
          <div className="about-image">
            <img className="about-img" src={bookXchangemission} />
          </div>
          <div className="about-content">
            <h3>Empowering Minds, Saving Trees: Our Mission for Sustainable Education.</h3>
            {console.log(missionExpanded)}
            <p>{missionExpanded ?
              <>
                At BookXchange, we believe in the power of knowledge and accessibility. Our mission is to bridge the gap between students who have finished their academic journeys and those who are just beginning theirs. We aim to create a sustainable and equitable platform where textbooks find new homes and eager minds find affordable resources.
                <h3>Environmental Sustainability</h3 >
                <p>
                  Every year, countless trees are cut down to produce paper for textbooks. By facilitating the exchange of second-hand books, BookXchange helps reduce the demand for new textbooks, thus minimizing the environmental impact of deforestation and paper production.
                </p>
                <h3>Affordability for Students</h3>
                <p>We understand the financial challenges faced by students, especially when it comes to purchasing expensive textbooks. BookXchange provides an avenue for students to buy quality second-hand books at a fraction of the cost, making education more accessible and affordable for all</p>

                <h3>Supporting Education</h3>
                <p>  Education is the cornerstone of progress and development. By ensuring that no book goes to waste and that every student has access to essential learning materials, BookXchange contributes to fostering a more educated and empowered society.</p>


                <h3> How BookXchange Works</h3>
                <p>  Sell Your Old Books
                  If you've completed your academic journey and have textbooks gathering dust on your shelves, why not give them a new lease on life? List your old books on BookXchange and earn money while helping fellow students.</p>

                <h3> Buy Second-Hand Books</h3>
                <p>  For students embarking on their educational journey, finding affordable textbooks can be a daunting task. Browse through our collection of second-hand books and get the resources you need at prices that won't break the bank.</p>

                <h3>Join the Community</h3>
                <p> BookXchange is more than just a marketplace; it's a community of students passionate about learning and sustainability. Join our platform to connect with like-minded individuals, share resources, and contribute to a brighter future for education and the planet.</p>

                <h3> Join Us in Making a Difference</h3>
                <p>Whether you're a seller looking to declutter your bookshelf or a buyer in search of affordable textbooks, BookXchange is here to serve you. Together, let's transform the way textbooks are bought, sold, and reused, and make education accessible to all.

                  Feel free to customize and expand upon this draft to better reflect the unique aspects and goals of your BookXchange platform!</p>
              </> :
              (`At BookXchange, we believe in the power of knowledge and accessibility. Our mission is to bridge the gap between students who have finished their academic journeys and those who are just beginning theirs.`)}
            </p>

            <a href="#mission" className="read-more" onClick={handleMissionToggle}>
              {missionExpanded ? 'Read Less' : 'Read More'}
            </a>
          </div>
        </section>
      </div>


      <div className="heading0" id="vision">
        <h1>Our Vision</h1>

      </div>
      <div className="container0">
        <section className="about">
          <div className="about-content">
            <h3>Empowering Education, Enriching Lives</h3>

            <p>{visionExpanded ?
              <>
               
                At BookXchange, our vision is to revolutionize the way students access and interact with educational resources.We envision a future where every student, regardless of their background or financial means, has equal opportunities to pursue knowledge and achieve their academic goals.
                <h3>Sustainability at the Core</h3>
                <p> Central to our vision is a commitment to sustainability and environmental stewardship. We envision a world where textbooks are valued, reused, and circulated within a closed-loop system, significantly reducing the need for new paper production and minimizing the ecological footprint of education.</p>

                <h3>Bridging the Gap</h3>
                <p> We aspire to bridge the gap between those who have completed their academic journey and those who are just beginning theirs. By providing a platform for the exchange of second-hand textbooks, we aim to create a symbiotic ecosystem where sellers find value in their old books, and buyers gain access to affordable learning materials.</p>

                <h3>Fostering Community and Collaboration</h3>
                <p>Our vision extends beyond transactional exchanges; we aim to cultivate a vibrant community of students, educators, and book enthusiasts. Through collaborative efforts and knowledge-sharing initiatives, we seek to create a supportive ecosystem that fosters lifelong learning and personal growth.</p>

                <h3>Driving Impact and Empowerment</h3>
                <p>  Ultimately, our vision is grounded in the belief that education has the power to transform lives and drive positive change in society. By democratizing access to educational resources and promoting sustainability, we strive to empower individuals, uplift communities, and contribute to a more equitable and enlightened world.</p>
              </>
              :
              `
              
              At BookXchange, our vision is to revolutionize the way students access and interact with educational resources.We envision a future where every student, regardless of their background or financial means, has equal opportunities to pursue knowledge and achieve their academic goals.`}


            </p>

            <a href="#vision" className="read-more" onClick={handleVisionToggle}>
              {visionExpanded ? 'Read Less' : 'Read More'}
            </a>
          </div>
          <div className="about-image">
            <img className="about-img" src={bookXchangevission}/>
          </div>
        </section>
      </div>



      <div id="move1">
        <div className="container1">
          <h1 className="heading">Our Popular Books</h1>
          <div className="box-container">
            <div className="box">
              <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714111237/java_prog_book_resized_g92rb7.webp" />
              <h3>Java</h3>
              <p>Customer delight, ensured with Java excellence.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/662a23eb790ae6c092b0b5f6" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714112813/dsa2_hd_resized_y29ebs.jpg" />

              <h3>DSA</h3>
              <p>100% client satisfaction and high success rate.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/662a2414790ae6c092b0b5f8" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714113757/daa2_hd_resized_c65kaz.jpg" />

              <h3>DAA</h3>
              <p>Guaranteed satisfaction, high success rates.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/66618870ccc7071ed6cbf9c8" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714114495/LA_hd_resized_jhkxdv.jpg" />

              <h3>Linear Algebra</h3>
              <p>Ensuring customer delight, with success guaranteed.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/66619e758fd0160744bcea88" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714115171/dbms_hd_resized_bapeqi.png" />

              <h3>DBMS</h3>
              <p>Ensuring client satisfaction alongside top success rates.</p>
              <a href="http://localhost:3000/buy/viewBookDetails/662a244c790ae6c092b0b5fa" className="btn">Buy Now</a>
            </div>
            <div className="box">
              <img className="about-img" src="https://res.cloudinary.com/dgccnrp7w/image/upload/v1714116257/physics_hd-resized_tidyuq.png" />

              <h3>Physics</h3>
              <p>"100% client satisfaction and exceptional success."</p>
              <a href="http://localhost:3000/buy/viewBookDetails/66619e128fd0160744bcea86" className="btn">Buy Now</a>
            </div>
          </div>
        </div>
      </div>




      {/* 
      <!-- testimonals --> */}
      <AboutTestimonials />


    </div>

  )
}

export default About
