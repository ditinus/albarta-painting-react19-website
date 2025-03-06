import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.svg";


export default function Footer() {
  return (
    <div className="bg-black text-white min-h-[400px] p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between  mb-6">
          <div className=" md:text-left mb-6 md:mb-0">
            <h2 className="text-[44px] font-light uppercase tracking-wider">
              {`LET'S`}
            </h2>
            <h1 className="text-3xl md:text-[77px] font-bold">GET IN TOUCH</h1>
          </div>
          <Link href="/contact">
            <button className="flex items-center gap-2 border-2 border-white rounded-full pl-5 pr-1.5 py-2 text-sm md:text-base font-medium bg-[#0D378D] cursor-pointer transition-colors mt-4 md:mt-[80px]">
              Contact Us
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="31" height="30" rx="15" fill="white" />
                <path
                  d="M23 9C23 8.44771 22.5523 8 22 8L13 8C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10L21 10L21 18C21 18.5523 21.4477 19 22 19C22.5523 19 23 18.5523 23 18L23 9ZM10.7071 21.7071L22.7071 9.70711L21.2929 8.29289L9.29289 20.2929L10.7071 21.7071Z"
                  fill="#0D378D"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0.5 ">
          {/* Logo and Description */}
          <div className="space-y-6 my-5">
            <div className="p-2 w-48 h-16 flex items-center justify-center rounded">
              <Image
                src={logo}
                alt="Alberta Global Painting Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-white leading-relaxed">
              {`The Alberta Global Painting logo represents the essence of quality
              work and exceptional service. Our brand features a clean, modern
              brushstroke aesthetic, showcasing the company's commitment to
              precision and detail.`}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:place-self-center">
            <h3 className="font-medium mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "Blog"
                          ? "/blogs"
                          : `/${item.toLowerCase()}`
                      }
                      className="text-white hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="place-self-start">
            <h3 className="font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
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
                    d="M10.7177 5.53735C10.7177 5.13376 11.0448 4.80658 11.4484 4.80658C12.4175 4.80658 13.3469 5.19154 14.0321 5.87676C14.7173 6.56199 15.1023 7.49135 15.1023 8.4604C15.1023 8.86399 14.7751 9.19116 14.3715 9.19116C13.9679 9.19116 13.6407 8.86399 13.6407 8.4604C13.6407 7.87897 13.4098 7.32135 12.9986 6.91022C12.5875 6.49908 12.0299 6.26811 11.4484 6.26811C11.0448 6.26811 10.7177 5.94094 10.7177 5.53735Z"
                    fill="#0D378D"
                  />
                  <path
                    d="M6.58094 2.04553C6.02282 1.2564 5.25201 0.900832 4.43245 0.909328C3.65569 0.917381 2.89904 1.24899 2.26796 1.69137C1.62972 2.13878 1.06 2.74044 0.652774 3.38479C0.25307 4.01724 -0.0356122 4.76459 0.00355745 5.49413C0.192036 9.00453 2.16636 12.7558 4.94059 15.5318C7.7125 18.3055 11.4147 20.2328 15.1524 19.864C15.8842 19.7918 16.5771 19.4194 17.1438 18.9435C17.7171 18.4621 18.2147 17.831 18.5494 17.1509C18.8814 16.4763 19.0789 15.699 18.9699 14.9417C18.8562 14.1519 18.4155 13.447 17.6031 12.9796C17.43 12.88 17.2748 12.7833 17.1047 12.6772C16.9588 12.5863 16.8019 12.4885 16.6131 12.3761C16.2479 12.1586 15.8326 11.9311 15.3967 11.7729C14.9607 11.6146 14.463 11.5101 13.9439 11.5815C13.4078 11.6552 12.9094 11.9084 12.4778 12.3625C12.1451 12.7128 11.6561 12.8229 10.9684 12.6236C10.2688 12.4209 9.48148 11.9178 8.79711 11.2386C8.1134 10.56 7.59532 9.7678 7.37477 9.0512C7.15643 8.34176 7.2524 7.82017 7.59381 7.46085C8.05454 6.97594 8.30038 6.43554 8.35223 5.86483C8.40266 5.30986 8.26428 4.78758 8.06622 4.33124C7.77064 3.65022 7.2667 2.97301 6.87378 2.445C6.76551 2.2995 6.66566 2.16533 6.58094 2.04553Z"
                    fill="#0D378D"
                  />
                </svg>

                <span>+1 (587) 998-9547</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.51797 0.15918H15.2679C16.0807 0.159172 16.7364 0.159166 17.2673 0.202544C17.8139 0.247206 18.294 0.341565 18.7383 0.567906C19.4439 0.927431 20.0175 1.50111 20.3771 2.20672C20.6034 2.65093 20.6978 3.13108 20.7424 3.67771C20.7489 3.75715 20.7544 3.83938 20.7591 3.92451C20.7896 4.0351 20.7937 4.14995 20.7732 4.2602C20.7858 4.66989 20.7858 5.13903 20.7858 5.67706V11.1413C20.7858 11.9541 20.7858 12.6097 20.7424 13.1406C20.6978 13.6873 20.6034 14.1674 20.3771 14.6116C20.0175 15.3173 19.4439 15.8909 18.7383 16.2505C18.294 16.4768 17.8139 16.5712 17.2673 16.6158C16.7364 16.6592 16.0807 16.6592 15.2679 16.6592H5.51796C4.70513 16.6592 4.04952 16.6592 3.51861 16.6158C2.97197 16.5712 2.49183 16.4768 2.04762 16.2505C1.34201 15.8909 0.768331 15.3173 0.408805 14.6116C0.182465 14.1674 0.0880835 13.6873 0.0434228 13.1406C0.0151978 12.6097 0.0151978 11.9541 0.0151978 11.1413V5.67706C0.0151978 5.13903 0.0151978 4.66989 0.0434228 4.2602C0.0880835 4.14995 0.0151978 3.83938 0.0151978 3.92451C0.0151978 3.83938 0.0151978 3.75953 0.0151978 3.67771C0.0620541 3.13108 0.155278 2.65093 0.377156 2.20672C0.736731 1.50111 1.31038 0.927431 2.01599 0.567906C2.46034 0.341565 2.94042 0.247206 3.48706 0.202544C4.01795 0.159166 4.67364 0.159172 5.51797 0.15918Z"
                    fill="#0D378D"
                  />
                </svg>
                <span>info@albertaglobalpainting.ca</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
