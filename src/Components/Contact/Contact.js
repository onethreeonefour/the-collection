import React from "react";
import Model from "../../Images/Hero/9.webp";
function Contact() {
  return (
    <div className="contact-heading">
      <h1>CONTACT</h1>
      <div className="contact-form-container">
        <div>
          <img src={Model} alt="contact-show" />
        </div>
        <div>
          <h1>MAKE AN ENQUIRY</h1>
          <div style={{ padding: "1rem 0" }}>
            <h3>Phone Us</h3>
            <p>(03)9999 4582</p>
          </div>
          <div className="trading-hours">
            <p>Mon-Fri: 9pm - 5pm</p>
            <p>Sat-Sun: Only By Special Request</p>
          </div>
          <label>
            Name
            <input type="text" placeholder="John Smith"></input>
          </label>
          <label>
            Email
            <input type="text" placeholder="john@gmail.com"></input>
          </label>
          <label>
            Enquiry
            <textarea type="text" wrap="off" rows="10" placeholder="Enter your message here.."></textarea>
          </label>
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
