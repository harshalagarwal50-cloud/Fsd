import React, { useState } from "react";
import "./Contactform.css"; // We'll create this CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To show success/error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just simulate a successful submission.
    console.log("Form Data Submitted:", formData);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate a successful response
      setStatus("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form

      // You could also simulate an error:
      // throw new Error("Failed to send message.");
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
      console.error("Contact form submission error:", error);
    }
  };

  return (
    <div className="contact-form-container card shadow-lg p-4 p-md-5">
      <h3 className="text-center mb-4 fw-bold text-primary">Contact Us</h3>
      {status && (
        <div
          className={`alert ${
            status.includes("successfully") ? "alert-success" : "alert-danger"
          } text-center mb-4`}
          role="alert"
        >
          {status}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100 py-2" disabled={status === "Sending..."}>
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;