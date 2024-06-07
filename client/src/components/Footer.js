import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer>
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: BookXchange@gmail.com</p>
            <p>Phone: +91 1123456789</p>
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://www.facebook.com/BookXChange/"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/bookxchange/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 BookXchange.com, All Books reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
