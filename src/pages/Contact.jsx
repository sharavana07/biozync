import React from 'react';
import './Contact.css'; // Assuming you have a CSS file for styling
export default function Contact() {
  return (
    <div className="contact03-container">
      <div className="contact03-content">
        <h1 className="contact03-title">Get in Touch with Us</h1>
        <p className="contact03-description">
          Have questions, ideas, or want to collaborate? We'd love to hear from you.
        </p>
        
        <div className="contact03-info">
          <div className="contact03-item">
            <span className="contact03-icon">📧</span>
            <strong className="contact03-label">Email:</strong>
            <a href="mailto:contact@biozync.org" className="contact03-link">
              contact@biozync.org
            </a>
          </div>
          
          <div className="contact03-item">
            <span className="contact03-icon">📞</span>
            <strong className="contact03-label">Phone:</strong>
            <a href="tel:+919876543210" className="contact03-link">
              +91 98765 43210
            </a>
          </div>
          
          <div className="contact03-item">
            <span className="contact03-icon">📍</span>
            <strong className="contact03-label">Address:</strong>
            <span className="contact03-text">Chennai, Tamil Nadu, India</span>
          </div>
        </div>

        <div className="contact03-social-section">
          <p className="contact03-social-title">
            <span className="contact03-icon">🌍</span>
            <strong>Connect with us:</strong>
          </p>
          <ul className="contact03-social-list">
            <li className="contact03-social-item">
              <span className="contact03-social-icon">🔗</span>
              <a href="https://linkedin.com/company/biozync" className="contact03-link">LinkedIn</a>
            </li>
            <li className="contact03-social-item">
              <span className="contact03-social-icon">📸</span>
              <a href="https://instagram.com/biozync" className="contact03-link">Instagram</a>
            </li>
            <li className="contact03-social-item">
              <span className="contact03-social-icon">🐦</span>
              <a href="https://twitter.com/biozync" className="contact03-link">Twitter</a>
            </li>
            <li className="contact03-social-item">
              <span className="contact03-social-icon">💼</span>
              <a href="https://github.com/biozync" className="contact03-link">GitHub</a>
            </li>
          </ul>
        </div>

        <div className="contact03-form-section">
  <h2 className="contact03-form-title">Send us a Message</h2>
  <form
    className="contact03-form"
    onSubmit={async (e) => {
      e.preventDefault();
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      try {
        const response = await fetch('https://sheetdb.io/api/v1/mxp58x51bryty', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: formData }),
        });
        if (response.ok) {
          alert('✅ Message sent successfully!');
          e.target.reset();
        } else {
          alert('❌ Failed to send. Try again.');
        }
      } catch (error) {
        alert('⚠️ Error occurred. Try again later.');
        console.error(error);
      }
    }}
  >
    <div className="contact03-form-group">
      <label htmlFor="contact03-name" className="contact03-form-label">Name</label>
      <input 
        type="text" 
        id="contact03-name" 
        name="name" 
        className="contact03-form-input" 
        placeholder="Your full name"
        required 
      />
    </div>
    
    <div className="contact03-form-group">
      <label htmlFor="contact03-email" className="contact03-form-label">Email</label>
      <input 
        type="email" 
        id="contact03-email" 
        name="email" 
        className="contact03-form-input" 
        placeholder="your.email@example.com"
        required 
      />
    </div>
    
    <div className="contact03-form-group">
      <label htmlFor="contact03-subject" className="contact03-form-label">Subject</label>
      <input 
        type="text" 
        id="contact03-subject" 
        name="subject" 
        className="contact03-form-input" 
        placeholder="What's this about?"
        required 
      />
    </div>
    
    <div className="contact03-form-group">
      <label htmlFor="contact03-message" className="contact03-form-label">Message</label>
      <textarea 
        id="contact03-message" 
        name="message" 
        rows="5" 
        className="contact03-form-textarea" 
        placeholder="Tell us more about your inquiry..."
        required
      ></textarea>
    </div>
    
    <button type="submit" className="contact03-form-button">
      <span className="contact03-button-icon">📤</span>
      Send Message
    </button>
  </form>
</div>

        <div className="contact03-hours-section">
          <h3 className="contact03-hours-title">
            <span className="contact03-icon">🕒</span>
            Business Hours
          </h3>
          <div className="contact03-hours-grid">
            <div className="contact03-hours-item">
              <span className="contact03-hours-day">Monday - Friday</span>
              <span className="contact03-hours-time">9:00 AM - 6:00 PM IST</span>
            </div>
            <div className="contact03-hours-item">
              <span className="contact03-hours-day">Saturday</span>
              <span className="contact03-hours-time">10:00 AM - 4:00 PM IST</span>
            </div>
            <div className="contact03-hours-item">
              <span className="contact03-hours-day">Sunday</span>
              <span className="contact03-hours-time">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}