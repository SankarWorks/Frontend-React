import React from 'react';
import './About.css'; 

export default function AboutUs() {
  return (
    <div className="aboutus-1">
      <h1>About Us</h1>
      <p>
        Welcome to Rockerz, your go-to destination for premium audio experiences. We are dedicated to bringing you the best in sound technology, offering a range of high-quality speakers designed to elevate your listening experience.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        At Rockerz, our mission is to provide top-notch audio products that deliver crystal-clear sound and exceptional performance. We are passionate about sound technology and strive to offer products that meet the highest standards of quality and innovation.
      </p>

      <h2>Our Speakers</h2>
      <div className="speaker-info">
        <div className="speaker-item">
          <img src="https://i.pcmag.com/imagery/reviews/03V8y6C5wPv1ZV44gbJFZtQ-8.fit_lim.size_919x518.v1698156812.jpg" alt="Bose SoundLink Revolve+" />
          <h3>Bose SoundLink Revolve+</h3>
          <p>A powerful speaker with deep bass and crystal-clear sound, perfect for any music lover.</p>
        </div>
        <div className="speaker-item">
          <img src="https://i.pcmag.com/imagery/reviews/00EU3U5rRoe9swRlkJE2yDa-1.fit_lim.size_919x518.v1601052236.jpg" alt="Sonos One (Gen 2)" />
          <h3>Sonos One (Gen 2)</h3>
          <p>Compact and portable, this speaker delivers impressive sound quality and is ideal for on-the-go listening.</p>
        </div>
        <div className="speaker-item">
          <img src="https://i.pcmag.com/imagery/reviews/03RrUSRqQ2Uue1S4gllxYY9-1.fit_lim.size_919x518.v1633466643.jpg" alt="JBL Charge 5" />
          <h3>JBL Charge 5</h3>
          <p>Featuring advanced technology, this speaker provides a rich, immersive audio experience for any environment.</p>
        </div>
        <div className="speaker-item">
          <img src="https://i.pcmag.com/imagery/reviews/00KbFjhSP8upEpoFJGxRqkf-12.fit_lim.size_919x518.v1573095114.jpg" alt="Sony SRS-XB43" />
          <h3>Sony SRS-XB43</h3>
          <p>An elegant speaker with high-fidelity sound and sleek design, perfect for enhancing your home audio setup.</p>
        </div>
      </div>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or need more information about our products, feel free to <a href="/contact">contact us</a>. We are always here to help and provide you with the best service possible.
      </p>
    </div>
  );
}
