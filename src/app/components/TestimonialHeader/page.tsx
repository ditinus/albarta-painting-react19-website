"use client";
import "./style.css"
export default function TestimonialHeader({
  title = "What Our Clients Say",
  subtitle = "REAL REVIEWS FROM SATISFIED CUSTOMERS",
  buttonText = "Read More Reviews",
  buttonUrl = "#",
  bgColor = "#0D47A1",
  textColor = "",
  buttonStyle = {},
}) {
  return (
    
  <div className="container py-5">
  
      <div className="row align-items-center">
        <div className="col-12 col-md-8">
          <div style={{ textAlign: "left" }}>
            <h4  style={{color: "black",textAlign:"left" }} className="ty"> {title}</h4>
            <h2
              className="mb-0  titley  text-uppercase"
              style={{color: "#0D378D" }}
            >
              {subtitle}
            </h2>
          </div>
        </div>
        <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
          <a
            href={buttonUrl}
            className="btn btn-primary px-5 py-2"
            style={{
              backgroundColor: bgColor,
              borderColor: bgColor,
              ...buttonStyle,
              borderRadius: "50px",
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  
  );
}
