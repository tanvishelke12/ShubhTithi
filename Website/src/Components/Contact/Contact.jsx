
import React from 'react';
import './Contact.css';
import about1 from './about1.jpg';
import about from './about.jpg';

const Contact = () => {
  return (
    <div>
      <header className="about">
        <div>
          <section>
            <h1>About Us</h1>
          </section>
        </div>
      </header>

      <section className="welcome">
        <h2>
          Welcome to the home of exquisite wedding outfits.<br />
        </h2>
        <p>
          Drawing on India's rich heritage of traditions and crafts, 
          we empower the modern bride and groom with elegance and ease.
        </p>
      </section>
      
      <section className="our-story">
        <h3>Our Story</h3>
        <p>
          Founded in 2020, our boutique was born from a passion for timeless elegance and modern design.<br /> 
          Our mission is to make every bride and groom feel unique and stunning on their special day.
        </p>
      </section>
      
      <section className="craftsmanship">
        <h2>Our Craftsmanship</h2>
        <img src={about1} alt="Craftsmanship 1" className="i1" />
        <img src={about} alt="Craftsmanship 2" className="i2" />
        <p>
          Each dress is handcrafted with the finest materials and meticulous attention to detail.<br />
          Our designs blend traditional techniques with contemporary aesthetics to create outfits that are both classic 
          and modern.
        </p>
      </section>

    </div>
  );
}

export default Contact;
