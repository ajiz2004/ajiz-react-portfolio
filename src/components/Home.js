import React from 'react';
import './Home.css'; // Import the CSS file
import Lottie from 'lottie-react'; // Import Lottie React for animations
import codingAnimation from './animation.json'; // Import the Lottie animation JSON file

const Home = () => {
  // Function to handle the scroll
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the contact section
  };

  return (
    <section name="home">
      <div className="home-container">
        {/* Left Column - Text Content */}
        <div className="home-text">
          <h1>Hello, I am Abdul Ajiz</h1>
          <p>
            <h3>I am a Software Engineer</h3>
          </p>
          <button className="cta-button" onClick={scrollToContact}>
            Get in Touch
          </button>
        </div>

        {/* Right Column - Animation */}
        <div className="home-animation">
          <Lottie animationData={codingAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};
 
export default Home;
