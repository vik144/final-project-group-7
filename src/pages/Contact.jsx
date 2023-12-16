import React from "react";

function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>Get in touch to start your next project</p>
      <form class="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" />

        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
