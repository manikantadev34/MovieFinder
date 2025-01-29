
import { useState } from "react";
import "../CSS/Contactus.css";

function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
  };

  return (
    <div className="contactus-container">
      <h2>📞 Contact Us</h2>
      <p>We’d love to hear from you! Whether you need help, have feedback, or just want to say hi, reach out to us.</p>

      {/* Feedback Section */}
      <div className="contact-section">
        <h3>📝 Feedback</h3>
        <p>Your opinion matters! Share your thoughts to help us improve.</p>
        <textarea placeholder="Write your feedback here..." rows="4"></textarea>
        <button onClick={handleSubmit}>Submit Feedback</button>
      </div>

      {/* Help Section */}
      <div className="contact-section">
        <h3>❓ Need Help?</h3>
        <p>Check our <a href="/faq">FAQ</a> or contact our support team.</p>
        <button>Get Help</button>
      </div>

      {/* Contact Details */}
      <div className="contact-section">
        <h3>📩 Get in Touch</h3>
        <p>Email: <a href="mailto:support@moviefinder.com">support@moviefinder.com</a></p>
        <p>Phone: +1 234 567 890</p>
        <p>Follow us on <a href="#">Twitter</a> | <a href="#">Instagram</a></p>
      </div>

      {/* Success Popup Message */}
      {showPopup && <div className="popup">✅ Feedback Submitted Successfully!</div>}
    </div>
  );
}

export default ContactUs;
