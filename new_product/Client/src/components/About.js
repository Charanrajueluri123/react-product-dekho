import React from 'react';
import '../css/about.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>507-XXX-XXXX</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>wrub7d7810e@temporary-mail.net</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Type your Message...</label>
              <textarea id="message" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
