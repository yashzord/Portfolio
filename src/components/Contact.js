import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import SpotlightCard from "./SpotlightCard";
import "./SpotlightCard.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => setMessageSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setEmailError(emailRegex.test(value) ? "" : "Invalid email address");
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) return;

    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email successfully sent!", response);
        setMessageSent(true);
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setLoading(false);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <section id="contact" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center">Contact</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            {messageSent && (
              <div className="alert alert-success fade-out" role="alert">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            <SpotlightCard className="custom-spotlight-card">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-control ${emailError ? "is-invalid" : ""}`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="form-control"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="button-container">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Sending..." : "Send Email"}
                  </button>
                </div>
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
