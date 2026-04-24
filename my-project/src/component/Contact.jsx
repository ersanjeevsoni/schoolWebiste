import React, { useState } from 'react'
import './Contact.css'


function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Inquiry Submitted Successfully!");

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">

      {/* Header */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you</p>
      </section>

      {/* Contact Section */}
      <section className="contact-container">

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Inquiry</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
          
        </form>
        {/* Contact Info */}
        <div className="contact-info">
          <h2>School Info</h2>
          <p>📍 Address: Bright Future School, Your City</p>
          <p>📞 Phone: +91 9876543210</p>
          <p>📧 Email: info@school.com</p>
          <p>🕒 Timing: Mon - Sat (8:00 AM - 3:00 PM)</p>
        </div>

      </section>
      

    </div>
  )
}

export default Contact;