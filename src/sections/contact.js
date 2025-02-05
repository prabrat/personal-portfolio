import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_7sq4otb",
      "template_390yjeh",
      {
        from_name: formData.name,  // Matches {{from_name}}
        message: formData.message, // Matches {{message}}
        reply_to: formData.email,  // Matches {{reply_to}}
      },
      "JL0hfMolBBdo2tFIW"
    )
    
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact">
      <h3 className="title">Contact Me</h3>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Type your message here"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {isSent && <p className="success-message">Message sent successfully!</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Contact;
