import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <h2>
        <span>Contact</span>
      </h2>
      <div className="contact-container">
        {/* Left Side: Embedded Map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29445.389696230584!2d88.61303951393222!3d22.703187348214588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a6019d1bca85%3A0xa73640ab0c8a422a!2sBiswanathpur%2C%20West%20Bengal%20743423!5e0!3m2!1sen!2sin!4v1745761688068!5m2!1sen!2sin"
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Side: Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>
                Vill- Biswanathpur; P.O- Ramnathpur; P.S- Deganga; North 24
                Parganas; PIN- 743423
              </p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>subham.pal2402@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Call</h3>
              <p>+91 9635306669</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
