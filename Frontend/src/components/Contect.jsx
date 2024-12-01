import React from 'react';
import Navbar from './Navbar';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container" style={styles.container}>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
        <form className="contact-form" style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required style={styles.textarea}></textarea>
          </div>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        <div className="contact-info" style={styles.info}>
          <h2>Our Location</h2>
          <p>123 Book Street, Booktown, BK 12345</p>
          <h2>Phone</h2>
          <p>(123) 456-7890</p>
          <h2>Email</h2>
          <p>support@bookstore.com</p>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    margin: 'auto',
    width: '100%',
    maxWidth: '600px',
  },
  form: {
    width: '100%',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  info: {
    marginTop: '20px',
  },
};

export default Contact;
