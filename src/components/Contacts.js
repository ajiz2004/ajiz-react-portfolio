import React, { useRef } from 'react';
import './Contact.css';
import { MdMarkEmailRead } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tcwtwnu', 
      'template_jqq18ob', 
      form.current, 
      'O56YBEOVKpdFO2NvM'
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message. Please try again.");
    });

    e.target.reset();  // Reset the form after submission
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-group">
          <input type="text" id="name" name="name" placeholder="Full Name" required />
          <input type="email" id="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="input-group">
          <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
          <input type="text" id="subject" name="subject" placeholder="Subject" required />
        </div>
        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="send-message">Send Message</button>
      </form>

      {/* Contact Info with Icons */}
      <div className="contact-info">
        <a 
          href="mailto:abdulajiz786123@gmail.com?subject=Contact%20Request&body=Hello%20Ajiz," 
          className="contact-icon" 
          aria-label="Email">
          <span className='icons'> <MdMarkEmailRead/></span> 
          <span>abdulajiz786123@gmail.com</span>
        </a>
        <a href="tel:+919344565175" className="contact-icon" aria-label="Phone">
        <span className='icons'> <IoCall/></span> 
          <span>+91 9677477535</span>
        </a>
        <a href="tel:+919344565175" className="contact-icon" aria-label="Phone">
          <span className='icons'> <MdHomeWork/></span> 
          <span>Tirunelveli,Tamil Nadu,India</span>
        </a>
        <a href="https://github.com/ajiz2004" className="contact-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <span className='icons'> <FaGithub/></span>
        </a>
        <a href="https://www.linkedin.com/in/abdul-ajiz-s-s-38baa7242" className="contact-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <span className='icons'> <FaLinkedin/></span> 
        </a>
      </div>

      {/* Copyright */}
      <p className="copyright">© 2024 Ajiz, All Rights Reserved</p>
    </section>
  );
};

export default Contact;
