import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, please feel free to contact us by filling out
        the form below or reaching out to us through our contact information.
      </p>
      <div className="contact-info">
        <p>
          <strong>Address:</strong> Near Seshnetra Ashram Mana Road, Badrinath,
          India
        </p>
        <p>
          <strong>Phone:</strong> +91-9411565459
        </p>
        <p>
          <strong>Email:</strong> hotelnewurvashi1@gmail.com
        </p>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
