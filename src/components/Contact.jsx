import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h1 id="Con">Contact</h1>
      <div className="contact">
        <div className="column-left">
          <div className="ctext">
            <h1>Get in Touch</h1>
            <p>
              Feel free to reach out! Whether you have an exciting project,
              internship opportunity, or simply want to connect, I’d love to
              hear from you. Drop me a message via email or connect with me on
              LinkedIn. Let’s collaborate and create something impactful
              together!
            </p>
          </div>
          <div className="cicons">
            <div className="row">
              <i className="fas fa-user"></i>
              <div className="cinfo">
                <div className="c1head">Name</div>
                <div className="subtitle">Abhiram</div>
              </div>
            </div>
            <div className="row">
              <i className="fas fa-map-marker-alt"></i>
              <div className="cinfo">
                <div className="c1head">Address</div>
                <div className="subtitle">Hyderabad, Telangana, India</div>
              </div>
            </div>
            <div className="row">
              <i className="fas fa-envelope"></i>
              <div className="cinfo">
                <div className="c1head">Email</div>
                <div className="subtitle">abhiram4957@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-right">
          <h1>Message Me</h1>
          <input type="text" id="fname" placeholder="Name" />
          <input type="email" id="femail" placeholder="Email" />
          <br />
          <input type="text" id="fsubject" placeholder="Subject" />
          <br />
          <input type="text" id="fmessage" placeholder="Message" />
          <br />
          <input type="submit" id="fsend" value="Send" />
        </div>
      </div>
    </>
  );
};

export default Contact;
