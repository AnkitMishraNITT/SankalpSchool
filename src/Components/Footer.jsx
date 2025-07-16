import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="school-details">
          <p>
            <strong>Name:</strong> Sankalp Sr. Sec. School
          </p>
          <p>
            <strong>Address:</strong> Shahpura– Neem Ka Thana Road, Hathideh,
            Sikar, Rajasthan, 332707
          </p>
          <p>
            <strong>Phone:</strong>9571930662, 9571940662
          </p>
          <p>
            <strong>Pincode:</strong> 332707
          </p>
          <p>
            <strong>Contact Hours:</strong> 9:00 AM - 5:00 PM (Mon-Fri)
          </p>
        </div>
      </div>
      <div className="footer-right">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.038123432746!2d75.9016563!3d27.530274700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d170038a22bc3%3A0xb2829297db2f43ac!2sSankalp%20Senior%20Secondary%20School%20Hathideh!5e0!3m2!1sen!2sin!4v1752402825845!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
