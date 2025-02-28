import React from "react";
import "./style.css";
import logo from "../../../../public/assets/alberta-logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 align-self-end">
              <h5 className="text-uppercase let">Let's</h5>
              <h2 className="Get ">GET IN TOUCH</h2>
            </div>
            <div className="col-lg-4  align-self-end mt-5">
            <button
              className="btn btn-outline-light text-white border-white d-flex align-items-center gap-4 button-footer rounded-pill py-2 pl-5"
            >
              {" "}
              Contact Us
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.40918"
                  width="31"
                  height="30"
                  rx="15"
                  fill="white"
                />
                <path
                  d="M22.5 9.40918C22.5 8.85689 22.0523 8.40918 21.5 8.40918L12.5 8.40918C11.9477 8.40918 11.5 8.85689 11.5 9.40918C11.5 9.96146 11.9477 10.4092 12.5 10.4092L20.5 10.4092L20.5 18.4092C20.5 18.9615 20.9477 19.4092 21.5 19.4092C22.0523 19.4092 22.5 18.9615 22.5 18.4092L22.5 9.40918ZM10.2071 22.1163L22.2071 10.1163L20.7929 8.70207L8.79289 20.7021L10.2071 22.1163Z"
                  fill="#0D378D"
                />
              </svg>
            </button>
            </div>
          </div>
        </div>
        <hr className=" mx-5" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <Image src={logo} alt="logo" />
              <p className=" mt-3">
                The digital transformation has changed everything. <br/> We help
                companies navigate through the  <br/> new era and embrace innovation.
              </p>
            </div>
            {/* Quick Links Column */}
            <div className="col-lg-2 mb-4 mb-lg-0">
              <h5 className=" mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none text-white">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none text-white">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none text-white">
                    Portfolio
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none text-white   ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Information Column */}
            <div className="col-lg-5">
              <h5 className=" mb-4">Contact </h5>
              
              <ul className="list-unstyled ">
              <li className="mb-3 d-flex align-items-center gap-2">
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7177 1.63994C10.7177 1.23635 11.0448 0.90918 11.4484 0.90918C13.4512 0.90918 15.3718 1.70475 16.788 3.12088C18.2041 4.53701 17.6031 10.9769 17.6031 12.9796C17.6031 13.3832 18.6725 9.19116 18.2689 9.19116C17.8653 9.19116 17.5382 8.86399 17.5382 8.4604C17.5382 6.84531 16.8966 5.29637 15.7545 4.15434C14.6125 3.0123 13.0635 2.37071 11.4484 2.37071C11.0448 2.37071 10.7177 2.04353 10.7177 1.63994Z"
                      fill="#0D378D"
                    />
                    <path
                      d="M10.7177 5.53735C10.7177 5.13376 11.0448 4.80658 11.4484 4.80658C12.4175 4.80658 13.3469 5.19154 14.0321 5.87676C14.7173 6.56198 15.1023 7.49135 15.1023 8.4604C15.1023 8.86399 14.7751 9.19116 14.3715 9.19116C13.9679 9.19116 13.6407 8.86399 13.6407 8.4604C13.6407 7.87897 13.4098 7.32135 12.9986 6.91022C12.5875 6.49908 12.0299 6.26811 11.4484 6.26811C11.0448 6.26811 10.7177 5.94094 10.7177 5.53735Z"
                      fill="#0D378D"
                    />
                    <path
                      d="M6.58094 2.04553C6.02282 1.2564 5.25201 0.900832 4.43245 0.909328C3.65569 0.917381 2.89904 1.24899 2.26796 1.69137C1.62972 2.13878 1.06 2.74044 0.652774 3.38479C0.25307 4.01724 -0.0356122 4.76459 0.00355745 5.49413C0.192036 9.00453 2.16636 12.7558 4.94059 15.5318C7.7125 18.3055 11.4147 20.2328 15.1524 19.864C15.8842 19.7918 16.5771 19.4194 17.1438 18.9435C17.7171 18.4621 18.2147 17.831 18.5494 17.1509C18.8814 16.4763 19.0789 15.699 18.9699 14.9417C18.8562 14.1519 18.4155 13.447 17.6031 12.9796C17.43 12.88 17.2748 12.7833 17.1047 12.6772C16.9588 12.5863 16.8019 12.4885 16.6131 12.3761C16.2479 12.1586 15.8326 11.9311 15.3967 11.7729C14.9607 11.6146 14.463 11.5101 13.9439 11.5815C13.4078 11.6552 12.9094 11.9084 12.4778 12.3625C12.1451 12.7128 11.6561 12.8229 10.9684 12.6236C10.2688 12.4209 9.48148 11.9178 8.79711 11.2386C8.1134 10.56 7.59532 9.7678 7.37477 9.0512C7.15643 8.34176 7.2524 7.82017 7.59381 7.46085C8.05454 6.97594 8.30038 6.43554 8.35223 5.86483C8.40266 5.30986 8.26428 4.78758 8.06622 4.33124C7.77064 3.65022 7.2667 2.97301 6.87378 2.445C6.76551 2.2995 6.66566 2.16533 6.58094 2.04553Z"
                      fill="#0D378D"
                    />
                  </svg>
                  <a
                    href="tel:+1234567890"
                    className=" text-decoration-none text-white"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center gap-2">
                  <svg
                    width="21"
                    height="17"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.51797 0.15918H15.2679C16.0807 0.159172 16.7364 0.159166 17.2673 0.202544C17.8139 0.247206 18.294 0.341565 18.7383 0.567906C19.4439 0.927431 20.0175 1.50111 20.3771 2.20672C20.6034 2.65093 20.6978 3.13108 20.7424 3.67771C20.7489 3.75715 20.7544 3.83938 20.7591 3.92451C20.7896 4.0351 20.7937 4.14995 20.7732 4.2602C20.7858 4.66989 20.7858 5.13903 20.7858 5.67706V11.1413C20.7858 11.9541 20.7858 12.6097 20.7424 13.1406C20.6978 13.6873 20.6034 14.1674 20.3771 14.6116C20.0175 15.3173 19.4439 15.8909 18.7383 16.2505C18.294 16.4768 17.8139 16.5712 17.2673 16.6158C16.7364 16.6592 16.0807 16.6592 15.2679 16.6592H5.51796C4.70513 16.6592 4.04952 16.6592 3.51861 16.6158C2.97197 16.5712 2.49183 16.4768 2.04762 16.2505C1.34201 15.8909 0.768331 15.3173 0.408805 14.6116C0.182465 14.1674 0.0881051 13.6873 0.0434431 13.1406C6.60382e-05 12.6097 7.20569e-05 11.9541 7.94479e-05 11.1413V5.67707C7.45603e-05 5.13904 7.02692e-05 4.66989 0.0126479 4.2602C-0.00780207 4.14996 -0.00369722 4.03509 0.0267409 3.9245C0.031434 3.83938 0.0369529 3.75715 0.0434431 3.67771C0.0881051 3.13108 0.182465 2.65093 0.408805 2.20672C0.76833 1.50111 1.34201 0.927431 2.04762 0.567906C2.49183 0.341565 2.97197 0.247206 3.51861 0.202544C4.04952 0.159166 4.70514 0.159172 5.51797 0.15918ZM19.2432 3.75048C19.2052 3.32686 19.1375 3.07794 19.0406 2.8877C18.8248 2.46434 18.4806 2.12013 18.0573 1.90442C17.8598 1.80378 17.599 1.73464 17.1451 1.69756C16.6825 1.65976 16.0882 1.65918 15.2358 1.65918H5.55008C4.69763 1.65918 4.10339 1.65976 3.64076 1.69756C3.18688 1.73464 2.92612 1.80378 2.7286 1.90442C2.30524 2.12013 1.96103 2.46434 1.74531 2.8877C1.64838 3.07794 1.58068 3.32686 1.54269 3.75048L8.1464 8.15296C9.15769 8.82715 9.50982 9.04856 9.8686 9.13454C10.2133 9.21713 10.5726 9.21713 10.9173 9.13454C11.2761 9.04856 11.6282 8.82715 12.6395 8.15296L19.2432 3.75048Z"
                      fill="#0D378D"
                    />
                  </svg>
                  <a
                    href="mailto:info@example.com"
                    className=" text-decoration-none text-white"
                  >
                 info@albertacolourpainting.com
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center gap-2">
                  <svg
                    width="18"
                    height="25"
                    viewBox="0 0 18 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11.8092C8.14752 11.8092 7.32995 11.4931 6.72716 10.9305C6.12436 10.3679 5.78571 9.60483 5.78571 8.80918C5.78571 8.01353 6.12436 7.25047 6.72716 6.68786C7.32995 6.12525 8.14752 5.80918 9 5.80918C9.85248 5.80918 10.67 6.12525 11.2728 6.68786C11.8756 7.25047 12.2143 8.01353 12.2143 8.80918C12.2143 9.20315 12.1311 9.59325 11.9696 9.95723C11.8081 10.3212 11.5713 10.6519 11.2728 10.9305C10.9744 11.2091 10.62 11.4301 10.2301 11.5808C9.84008 11.7316 9.42211 11.8092 9 11.8092ZM9 0.40918C6.61305 0.40918 4.32387 1.29418 2.63604 2.86948C0.948211 4.44479 0 6.58136 0 8.80918C0 15.1092 9 24.4092 9 24.4092C9 24.4092 18 15.1092 18 8.80918C18 6.58136 17.0518 4.44479 15.364 2.86948C13.6761 1.29418 11.3869 0.40918 9 0.40918Z"
                      fill="#0D378D"
                    />
                  </svg>
                  370 Brightonstone Green SE, Calgary, AB T2Z 0H1, Canada
                </li>
             
             
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <hr className="mt-5 mx-5" />
        <div className="row ">
          <div className="col-12">
            <p className="text-center small mb-0">
              © <span id="year" /> All Rights Reserved. Design by Your Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
