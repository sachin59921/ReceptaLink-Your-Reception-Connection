import React from "react";
import "./Home.css";
import { FaUser, FaClock, FaCalendarAlt, FaHistory } from "react-icons/fa";
import visitorImage from "../Assest/visitor-registration.jpg";
import checkInImage from "../assets/check-in.jpg";
import meetingImage from "../assets/meeting-scheduling.jpg";
import historyImage from "../assets/visitor-history.jpg";

function Home() {
  return (
    <div className="home-container">
      <h1 className="animated-title">Welcome to ReceptaLink: Your Reception Connection</h1>
      <p className="intro-text">
        Keep your workforce safe and manage your visitors at any scale with a
        simple yet effective visitor management system
      </p>
      <br />
      <h4 className="features-title">Features and Functionality</h4>
      <p>Track and collect information about your office visitors</p>

      <div className="cards-container">
        {/* Card 1 */}
        <div className="card card-hover">
          <FaUser size={40} style={{ color: "#16a085" }} />
          <img src={visitorImage} alt="Visitor Registration" className="card-image" />
          <h5 className="card-title">Visitor Registration</h5>
          <p className="card-text">
            Add, edit, and delete visitors from your database
          </p>
        </div>

        {/* Card 2 */}
        <div className="card card-hover">
          <FaClock size={40} style={{ color: "#16a085" }} />
          <img src={checkInImage} alt="Check-In/Check-Out" className="card-image" />
          <h5 className="card-title">Check-In/Check-Out</h5>
          <p className="card-text">
            Track visitor's check-in and check-out times easily
          </p>
        </div>

        {/* Card 3 */}
        <div className="card card-hover">
          <FaCalendarAlt size={40} style={{ color: "#16a085" }} />
          <img src={meetingImage} alt="Meeting Scheduling" className="card-image" />
          <h5 className="card-title">Meeting Scheduling</h5>
          <p className="card-text">
            Schedule and manage visitor meetings with employees
          </p>
        </div>

        {/* Card 4 */}
        <div className="card card-hover">
          <FaHistory size={40} style={{ color: "#16a085" }} />
          <img src={historyImage} alt="Visitor History" className="card-image" />
          <h5 className="card-title">Visitor History</h5>
          <p className="card-text">
            Keep track of past visitors and their activities
          </p>
        </div>
      </div>

      <div className="why-choose">
        <h4>Why Choose ReceptaLink?</h4>
        <p>
          ReceptaLink provides a seamless experience for managing your visitors.
          Our intuitive interface and powerful features ensure that you can
          focus on what matters most, while we handle the rest.
        </p>
        <ul className="features-list">
          <li>✔ Easy-to-use interface</li>
          <li>✔ Scalable for businesses of all sizes</li>
          <li>✔ Real-time visitor tracking</li>
          <li>✔ Secure data management</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 ReceptaLink. All Rights Reserved.</p>
        <p>
          Contact us: <a href="mailto:support@receptalink.com">support@receptalink.com</a>
        </p>
        <p>Follow us on:
          <a href="https://www.facebook.com/ReceptaLink" className="social-link">Facebook</a> |
          <a href="https://www.twitter.com/ReceptaLink" className="social-link">Twitter</a> |
          <a href="https://www.linkedin.com/company/receptalink" className="social-link">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
