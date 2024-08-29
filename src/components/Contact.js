// src/components/Contact.js

import React from 'react';
import './contact.css'; // Include your CSS file here

const Contact = () => {
  return (
    <section className="contact section__container" id="contact">
      <div className="contact__container">
        <p className="section__subheader">GET IN TOUCH</p>
        <h2 className="section__header">Got A Question? Contact Us!</h2>
        <div className="contact__form__container">
          <form action="https://formspree.io/f/xjvzjoay" method="POST">
            <div className="form__group">
              <label>Name</label>
              <input type="text" placeholder="Name" name="name" required />
            </div>
            <div className="form__group">
              <label>Email</label>
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div className="form__group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
