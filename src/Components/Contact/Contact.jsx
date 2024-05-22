import React, { useState } from 'react';
import './Contact.css';
import msg from '../../assets/msg.jpeg';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png';
import location from '../../assets/location.png';
import insta from '../../assets/insta.png';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', '35c4ef4b-e7be-451f-8cc2-219f6d1ceed1');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg} alt="Message icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact information below. Your feedback, questions,
          and suggestions are important to us as we strive to provide exceptional art to our community.
        </p>
        <ul>
          <li>
            <img src={mail} alt="Email icon" />
            info@artesiadesigns.com
          </li>
          <li>
            <img src={phone} alt="Phone icon" />
            +1 813-360-1236
          </li>
          <li>
            <img src={location} alt="Location icon" />
            Tampa, Florida, United States
          </li>
          <li>
            <img src={insta} alt="Instagram icon" />
            @artesiadesigns
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required />
          <label>Write your message/enquiries here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required />
          <button type="submit" className="btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
