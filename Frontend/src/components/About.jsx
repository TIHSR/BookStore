import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [greeting, setGreeting] = useState('');

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: isDarkMode ? '#333' : '#f4f4f4',
          color: isDarkMode ? '#fff' : '#000',
          minHeight: '100vh',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        <button
          onClick={toggleTheme}
          style={{
            marginBottom: '10px',
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: isDarkMode ? '#ffcc00' : '#333',
            color: isDarkMode ? '#000' : '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

        <h1>{greeting}, Welcome to Our Store!</h1>

        <p>
          We are passionate about bringing you a wide variety of books across genres, 
          from timeless classics to modern bestsellers.
        </p>

        <button
          onClick={() => setShowMore((prev) => !prev)}
          style={{
            margin: '10px 0',
            padding: '8px 16px',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {showMore ? 'Show Less' : 'Read More'}
        </button>

        {showMore && (
          <div style={{ marginTop: '10px' }}>
            <p>
              Our mission is to create a seamless and enjoyable book purchasing experience for readers of 
              all ages and preferences. Whether you're looking for a thrilling mystery, a deep philosophical read, 
              or an educational resource, we’ve got you covered.
            </p>

            <h2>Our Values</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>📚 Passion for Books</li>
              <li>🌍 Commitment to Sustainability</li>
              <li>🎯 Focus on Customer Satisfaction</li>
              <li>🤝 Support for Local Communities</li>
            </ul>

            <p>
              We hope to become your go-to destination for all things books, constantly improving 
              our services and selection. Thank you for visiting, and happy reading!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default About;
