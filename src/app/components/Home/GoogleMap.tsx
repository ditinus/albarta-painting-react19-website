import React from "react";
import "./GoogleMap.css"; // Adjust the path if needed

const GoogleMap: React.FC = () => {
  return (
    <div className="container py-sm-5 py-5">
      <h2 className="custom-h2">FIND US</h2>
      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.060696318819!2d-114.07189928389878!3d51.04468107951424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717c7c25c49999%3A0x8d18fcb74885ea83!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1634160276765!5m2!1sen!2sus"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
