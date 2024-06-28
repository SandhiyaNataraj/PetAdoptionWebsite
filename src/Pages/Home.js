import React from 'react';
import './index.css'; 
import About from './About';
import FeaturedPages from './FeaturedPages';

const Home = () => {
  return (
    <div className="home-container">
      {/* Left side image */}
      <div className="left-section">
        <img
          src="https://i.pinimg.com/564x/1e/2f/e4/1e2fe409b23f4a0d0db762ac20719384.jpg"
          alt="Home Page Image"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Right side content */}
      <div className="right-section">
        <div className="content">
          <h2>Let us take care of your pets!</h2>
          <div className="star-rating">
            {/* Insert your 5-star rating component or content here */}
            ⭐️⭐️⭐️⭐️⭐️
          </div>
          <button className="login-button">Login</button>
        </div>
      </div>

      <About />
      <FeaturedPages />
    </div>
  );
}

export default Home;
