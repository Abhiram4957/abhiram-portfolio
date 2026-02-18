import React, { useState } from "react";
import axios from "axios";
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3003/add", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

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
          {/* ✅ Controlled inputs */}
          <input
            type="text"
            id="fname"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="femail"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            id="fsubject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            id="fmessage"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <br />
          <button type="button" onClick={handleSubmit}>Send</button>
          {status && <p className="status">{status}</p>}
        </div>
      </div>
    </>
  );
}

export default Contact;
