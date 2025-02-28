import type React from "react";
import "./style.css";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container py-sm-5 py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="Title mb-3">
            HAVE A PROJECT IN
            <br /> MIND OR NEED A
            <br /> QUOTE?
          </h1>
          <p className="lead" style={{ fontWeight: 500 }}>
            Get in touch with our expert painters in Calgary. We'd be
            <br /> happy to help bring your vision to life!
          </p>
        </div>
        <div className="col-md-6">
          <div
            className="bg-white p-4 rounded"
            style={{
              boxShadow:
                "5px 17px 56.7px 0px rgba(0, 0, 0, 0.11)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3 textarea">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control py-2"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control py-2"
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control py-2"
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="form-control py-2"
                />
              </div>

              <button
                type="submit"
                className="w-100 py-2"
                style={{ backgroundColor: "#0D378D", fontWeight: 500 , border: "none", color:"white",borderRadius:"5px" }}
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
