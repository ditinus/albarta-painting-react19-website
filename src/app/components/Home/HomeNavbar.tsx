"use client";
import "./homeNavbar.css";
import logoIcon from "../../../../public/assets/alberta-colour-painting-logo 1 (1).png";
import phoneIcon from "../../../../public/assets/header-phone-icon.svg";
import Link from "next/link";
import Image from "next/image";

const HomeNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0"
      style={{
        zIndex: 1000,
        position: "sticky", // Ensure the navbar has sticky positioning explicitly
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            src={logoIcon}
            alt="Alberta Colour Painting"
            width={150}
            height={50}
            style={{ marginTop: "15px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <svg
            width="61"
            height="48"
            viewBox="0 0 61 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="1" width="59" height="46" rx="23" fill="#0D378D" />
            <rect
              x="1"
              y="1"
              width="59"
              height="46"
              rx="23"
              stroke="#CADBFF"
              strokeWidth="2"
            />
            <path
              d="M19.5 17H41.5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M19.5 24H41.5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M30.5 31L41.5 31"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav mx-auto my-2 my-lg-0 nav-color">
            <li className="nav-item">
              <Link className="nav-link mx-2" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" href="/about-us">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" href="/service">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" href="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" href="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" href="/contact-us">
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2 justify-content-lg-center align-items-center">
            <div
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column-reverse",
                flexWrap: "nowrap",
              }}
            >
              <Image src={phoneIcon} alt="Phone Icon" width={50} height={50} />
            </div>
            <a
              className="text-decoration-none"
              style={{ marginRight: "20px", color: "black" }}
              href="tel:587-966-6547"
            >
              587-966-6547
            </a>
          </div>

          <div className="d-flex justify-content-lg-center gap-3">
            <a
              style={{
                color: "white",
                borderRadius: "78px",
                border: "2px solid #CADBFF",
                background: "#0D378D",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              href="#"
              className="btn "
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
