import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!\n" + JSON.stringify(form, null, 2));
    // Here you can later integrate backend/email API.
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.paragraph}>
          We'd love to hear from you! Whether you have a question about features, feedback, or anything else —
          our team is ready to help.
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#ecf0f5",
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
  },
  card: {
    maxWidth: "700px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "15px",
    color: "#2c3e50",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#34495e",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2ecc71",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Contact;
