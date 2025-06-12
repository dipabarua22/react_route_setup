import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>About SAIDE Library</h1>
        <p style={styles.paragraph}>
          SAIDE Library is a modern digital library platform designed to manage and
          streamline all aspects of book, magazine, and newspaper handling in an
          educational or community setting.
        </p>
        <p style={styles.paragraph}>
          This platform allows you to keep track of:
          <ul style={styles.ul}>
            <li>Books and Magazines Inventory</li>
            <li>Membership Management</li>
            <li>Issuance and Return Tracking</li>
            <li>Overdue Notification Alerts</li>
          </ul>
        </p>
        <p style={styles.paragraph}>
          Whether you are a librarian, student, or administrator, our goal is to
          offer you a seamless experience in managing and accessing resources.
        </p>
        <p style={styles.note}>
          Built with ❤️ using React for a fast, reliable, and beautiful UI.
        </p>
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
    maxWidth: "800px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#34495e",
    marginBottom: "16px",
  },
  ul: {
    marginLeft: "20px",
    listStyle: "square",
    fontSize: "1.05rem",
    lineHeight: "1.6",
  },
  note: {
    marginTop: "30px",
    fontStyle: "italic",
    color: "#7f8c8d",
    textAlign: "center",
  },
};

export default About;
