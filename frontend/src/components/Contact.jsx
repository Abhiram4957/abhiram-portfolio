import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, MapPin, Mail, Send } from "lucide-react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:3003/add", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="Con" className="contact-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">Connect</span>
        <h2 className="section-title">Contact Me</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-glass-panel info-panel">
            <h3 className="panel-title">Get in Touch</h3>
            <p className="contact-desc">
              Feel free to reach out! Whether you have an exciting project,
              internship opportunity, or simply want to connect, I'd love to
              hear from you. Drop me a message via email or connect with me on
              LinkedIn. Let's collaborate and create something impactful together!
            </p>

            <div className="contact-details">
              <div className="info-row">
                <div className="icon-circle"><User size={20} /></div>
                <div className="info-content">
                  <span className="info-label">Name</span>
                  <span className="info-value">Abhiram Gonuguntla</span>
                </div>
              </div>

              <div className="info-row">
                <div className="icon-circle"><MapPin size={20} /></div>
                <div className="info-content">
                  <span className="info-label">Address</span>
                  <span className="info-value">Hyderabad, Telangana, India</span>
                </div>
              </div>

              <div className="info-row">
                <div className="icon-circle"><Mail size={20} /></div>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <span className="info-value">abhiram4957@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="contact-glass-panel form-panel">
            <h3 className="panel-title">Message Me</h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="modern-input"
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="modern-input"
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="modern-input"
                />
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="modern-textarea"
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="btn-text">Sending...</span>
                ) : (
                  <>
                    <span className="btn-text">Send Message</span>
                    <Send size={18} className="btn-icon" />
                  </>
                )}
              </motion.button>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`status-message ${status.includes("successfully") ? "success" : "error"}`}
                >
                  {status}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
