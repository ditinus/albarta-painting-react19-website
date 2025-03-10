"use client";
import Image from "next/image";
import React from 'react'
import paintingCompany from "@/public/paintingCompany.png";
import Footer from "@/components/ui/footer";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
import DiscussSection from "./DiscussSection";
import blogsBanner from "@/public/blogs-banner.png";
import ContactGalleryHero from "@/components/ContactGalleryHero";
import { Navbar } from "@/components/navbar";


export default function Home() {
  return (
    <main className="flex  flex-col">
 <Navbar />
<ContactGalleryHero
  title=" "
  title2="CONTACT US"
  subtitle="Let’s Bring Colour to Your Home Get in Touch Today!"
  imageSrc={blogsBanner}
  quoteLink="/"
  bookLink="/book"
  quoteText="Get a Free Quote"
/>
    
      <ContactForm/>
      <GoogleMap/>
      <div className=''> <section className="relative bg-[#0D378D] text-white">
    </section>
  
  
  {/* <main className=""> */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-[#0D378D] text-white p-8 md:p-12 lg:py-30 md:py-20 lg:p-16 flex flex-col justify-center md:w-1/2">
          <div className="max-w-6xl mx-auto">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6 uppercase">We are your Calgary painting company</h1>

            <p className="mb-8 text-sm md:text-base">
              Alberta Colour Painting is your trusted partner in Calgary, offering detailed estimates and unparalleled
              painting services. As a leading Calgary painting company, we pride ourselves on our professional and
              skilled Calgary painters.
            </p>

            <h2 className="text-xl md:text-2xl font-bold mb-10 uppercase">Our touch of paint makes a difference!</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4  col-span-2">
          <div className="text-center">
            <div className=" p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="40"
                viewBox="0 0 39 40"
                fill="none"
              >
                <path
                  d="M9.31406 1.95512V3.85897C9.31406 4.9423 8.43585 5.81409 7.35893 5.81409C6.28201 5.81409 5.40381 4.93589 5.40381 3.85897V1.95512C5.40381 0.871793 6.28201 0 7.35893 0C8.43585 0 9.31406 0.878204 9.31406 1.95512Z"
                  fill="white"
                />
                <path
                  d="M33.6025 1.95512V3.85897C33.6025 4.9423 32.7243 5.81409 31.6474 5.81409C30.5705 5.81409 29.6923 4.93589 29.6923 3.85897V1.95512C29.6923 0.871793 30.5705 0 31.6474 0C32.7243 0 33.6025 0.878204 33.6025 1.95512Z"
                  fill="white"
                />
                <path
                  d="M38.7756 6.82687V10.4935H0.224365V6.82687C0.224365 4.82687 1.84616 3.20508 3.84615 3.20508V3.69867C3.84615 5.532 5.1923 7.16661 7.01922 7.33969C9.11537 7.53199 10.8654 5.89097 10.8654 3.8461V3.21149H28.1346V3.8461C28.1346 5.89097 29.8846 7.53199 31.9807 7.33969C33.8076 7.17302 35.1538 5.53841 35.1538 3.69867V3.20508C37.1538 3.20508 38.7756 4.82687 38.7756 6.82687Z"
                  fill="white"
                />
                <path
                  d="M18.6026 20.3335C17.8654 20.3335 17.2628 20.9361 17.2628 21.6732C17.2628 22.4104 17.8654 23.013 18.6026 23.013C19.3397 23.013 19.9423 22.4104 19.9423 21.6732C19.9423 20.9361 19.3397 20.3335 18.6026 20.3335Z"
                  fill="white"
                />
                <path
                  d="M29.2692 29.8848C28.532 29.8848 27.9294 30.4873 27.9294 31.2245C27.9294 31.9617 28.532 32.5642 29.2692 32.5642C30.0064 32.5642 30.6089 31.9617 30.6089 31.2245C30.6089 30.4873 30.0064 29.8848 29.2692 29.8848Z"
                  fill="white"
                />
                <path
                  d="M0.224365 12.8975V36.3782C0.224365 38.3782 1.84616 40 3.84615 40H35.1538C37.1538 40 38.7756 38.3782 38.7756 36.3782V12.8975H0.224365ZM29.2692 19.3077C30.5769 19.3077 31.6346 20.3718 31.6346 21.6731C31.6346 22.9744 30.5705 24.0385 29.2692 24.0385C27.9679 24.0385 26.9038 22.9744 26.9038 21.6731C26.9038 20.3718 27.9679 19.3077 29.2692 19.3077ZM7.93589 33.5961C6.6282 33.5961 5.57051 32.532 5.57051 31.2308C5.57051 29.9295 6.63461 28.8654 7.93589 28.8654C9.23717 28.8654 10.3013 29.9295 10.3013 31.2308C10.3013 32.532 9.23717 33.5961 7.93589 33.5961ZM7.93589 24.0385C6.6282 24.0385 5.57051 22.9744 5.57051 21.6731C5.57051 20.3718 6.63461 19.3077 7.93589 19.3077C9.23717 19.3077 10.3013 20.3718 10.3013 21.6731C10.3013 22.9744 9.23717 24.0385 7.93589 24.0385ZM18.6025 33.5961C17.2948 33.5961 16.2372 32.532 16.2372 31.2308C16.2372 29.9295 17.3013 28.8654 18.6025 28.8654C19.9038 28.8654 20.9679 29.9295 20.9679 31.2308C20.9679 32.532 19.9038 33.5961 18.6025 33.5961ZM18.6025 25.8397C16.3077 25.8397 14.4359 23.968 14.4359 21.6731C14.4359 19.3782 16.3077 17.5064 18.6025 17.5064C20.8974 17.5064 22.7692 19.3782 22.7692 21.6731C22.7692 23.968 20.8974 25.8397 18.6025 25.8397ZM29.2692 35.3974C26.9743 35.3974 25.1025 33.5256 25.1025 31.2308C25.1025 28.9359 26.9743 27.0641 29.2692 27.0641C31.564 27.0641 33.4358 28.9359 33.4358 31.2308C33.4358 33.5256 31.564 35.3974 29.2692 35.3974Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-sm">
              Free Detailed <br /> Estimate
            </p>
          </div>
          <div className="text-center">
            <div className="p-3 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
              >
                <path
                  d="M17.4021 16.9061C20.2542 16.9061 22.7125 14.5058 23.913 11.4599C24.4421 10.1758 24.726 8.74981 24.726 7.3496C24.726 2.68429 21.4546 0 17.4025 0C13.3504 0 10.0851 2.68429 10.0851 7.3496C10.0851 8.74981 10.3948 10.1694 10.9239 11.4599C12.1241 14.5056 14.5826 16.9061 17.4087 16.9061H17.4021Z"
                  fill="white"
                />
                <path
                  d="M40.1992 30.1529H38.2053C38.0569 29.5657 37.8246 29.0172 37.5214 28.5139L38.9345 27.1008C39.0571 26.9782 39.0571 26.7846 38.9345 26.662L37.2052 24.9327C37.0826 24.8101 36.889 24.8101 36.7664 24.9327L35.3533 26.3458C34.85 26.0426 34.2951 25.8103 33.7143 25.6619V23.668C33.7143 23.5003 33.5788 23.3647 33.411 23.3647H30.959C30.7913 23.3647 30.6558 23.5003 30.6558 23.668V25.6619C30.0686 25.8103 29.5201 26.0426 29.0168 26.3458L27.6036 24.9327C27.481 24.8101 27.2875 24.8101 27.1649 24.9327L25.4355 26.662C25.3129 26.7846 25.3129 26.9782 25.4355 27.1008L26.8422 28.5139C26.5454 29.0172 26.3131 29.5721 26.1647 30.1529H24.1708C24.0031 30.1529 23.8676 30.2884 23.8676 30.4562V32.9082C23.8676 33.0759 24.0031 33.2115 24.1708 33.2115H26.1647C26.3131 33.7987 26.5454 34.3471 26.8422 34.8504L25.4355 36.2636C25.3129 36.3862 25.3129 36.5798 25.4355 36.7024L27.1649 38.4317C27.2875 38.5543 27.481 38.5543 27.6036 38.4317L29.0168 37.025C29.5201 37.3218 30.075 37.5541 30.6558 37.7025V39.6964C30.6558 39.8641 30.7913 39.9997 30.959 39.9997H33.411C33.5788 39.9997 33.7143 39.8642 33.7143 39.6964V37.7025C34.3015 37.5541 34.85 37.3218 35.3533 37.025L36.7664 38.4317C36.889 38.5543 37.0826 38.5543 37.2052 38.4317L38.9345 36.7024C39.0571 36.5798 39.0571 36.3862 38.9345 36.2636L37.5214 34.8504C37.8247 34.3471 38.057 33.7922 38.2053 33.2115H40.1992C40.367 33.2115 40.5025 33.076 40.5025 32.9082V30.4562C40.5025 30.2884 40.367 30.1529 40.1992 30.1529ZM34.6241 34.6179C34.3596 34.8438 34.0692 35.0244 33.753 35.1599C33.269 35.3793 32.7464 35.4955 32.185 35.4955C30.075 35.4955 28.365 33.7855 28.365 31.6755C28.365 31.1335 28.4747 30.6237 28.6812 30.1656C29.2619 28.8041 30.6106 27.8556 32.185 27.8556C32.4818 27.8556 32.7722 27.8878 33.0432 27.9524C34.7402 28.3395 36.005 29.8623 36.005 31.6755C36.005 32.8564 35.4694 33.9146 34.6306 34.6115L34.6241 34.6179Z"
                  fill="white"
                />
                <path
                  d="M26.7843 19.4287L23.8483 18.5899C23.2611 18.3124 22.532 18.6157 22.3384 19.261L19.125 27.2556L18.6475 22.8096C19.1509 22.7257 19.5445 22.2805 19.5445 21.7449V20.7641C19.5445 20.1511 19.067 19.6737 18.454 19.6737H16.3569C15.7439 19.6737 15.2406 20.1511 15.2406 20.7641V21.7449C15.2406 22.274 15.66 22.7257 16.1633 22.8096L15.66 27.1974L12.5047 19.235C12.3111 18.5897 11.6078 18.2864 10.9948 18.5639L8.00721 19.4286C7.05867 19.7899 6.16174 20.2932 5.43905 21.0224C4.2905 22.1387 3.54195 23.6228 3.31614 25.2165L0.547974 35.3536C0.32213 36.1086 0.88351 36.8377 1.66427 36.8377H5.2713C5.77462 36.8377 6.21985 36.5022 6.38759 35.9989L8.48469 29.0429C8.54276 28.7654 8.96216 28.7912 8.98801 29.0687L9.29774 35.7212C9.32355 36.3342 9.85913 36.8375 10.4721 36.8375H23.1193C23.0483 36.3342 23.1257 35.8115 23.358 35.3469C22.345 35.0049 21.6094 34.0435 21.6094 32.9143V30.4623C21.6094 29.3331 22.3449 28.3716 23.358 28.0297C22.8806 27.0682 23.0419 25.8745 23.842 25.0744L25.5713 23.3451C26.3714 22.5514 27.5652 22.3836 28.5266 22.8611C28.7331 22.2417 29.1783 21.7254 29.7461 21.4157C29.63 21.2802 29.5074 21.1512 29.3848 21.0221C28.6298 20.293 27.7393 19.7897 26.7844 19.4283L26.7843 19.4287Z"
                  fill="white"
                />
                <path
                  d="M34.0112 31.689C34.0112 34.1232 30.359 34.1232 30.359 31.689C30.359 29.2547 34.0112 29.2547 34.0112 31.689Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-sm">
              Skilled Professional <br /> Painters
            </p>
          </div>
          <div className="text-center">
            <div className=" p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="40"
                viewBox="0 0 39 40"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.35125 20.5493L0.568213 33.7731C0.394299 34.0683 0.417466 34.4418 0.629476 34.7136C0.841486 34.9837 1.1959 35.0955 1.52386 34.9937L7.82121 33.0477L9.24735 39.3511C9.32188 39.6846 9.59182 39.9364 9.9264 39.9898C10.261 40.0431 10.5939 39.8847 10.7662 39.5912L18.3919 26.6343C18.758 26.666 19.1273 26.681 19.5 26.681C19.8727 26.681 20.2421 26.666 20.6081 26.6343L28.2338 39.5912C28.4061 39.8847 28.739 40.0431 29.0736 39.9898C29.4082 39.9364 29.6781 39.6846 29.7527 39.3511L31.1788 33.0477L37.4762 34.9937C37.8041 35.0955 38.1585 34.9837 38.3705 34.7136C38.5826 34.4418 38.6057 34.0683 38.4318 33.7731L30.6488 20.5493C31.9788 18.4682 32.7506 15.9952 32.7506 13.3405C32.7506 5.9782 26.8127 0 19.5 0C12.1873 0 6.2494 5.9782 6.2494 13.3405C6.2494 15.9952 7.02122 18.4682 8.35125 20.5493ZM19.5 1.66756C25.8984 1.66756 31.0943 6.8987 31.0943 13.3405C31.0943 19.7823 25.8984 25.0134 19.5 25.0134C13.1016 25.0134 7.90573 19.7823 7.90573 13.3405C7.90573 6.8987 13.1016 1.66756 19.5 1.66756ZM19.5 3.33512C14.0159 3.33512 9.56205 7.81919 9.56205 13.3405C9.56205 18.8618 14.0159 23.3458 19.5 23.3458C24.9841 23.3458 29.438 18.8618 29.438 13.3405C29.438 7.81919 24.9841 3.33512 19.5 3.33512ZM19.5 5.00268C24.0715 5.00268 27.7816 8.73801 27.7816 13.3405C27.7816 17.9429 24.0715 21.6783 19.5 21.6783C14.9286 21.6783 11.2184 17.9429 11.2184 13.3405C11.2184 8.73801 14.9286 5.00268 19.5 5.00268ZM23.1025 10.2055L17.9762 14.6295L16.0218 12.0064C15.7468 11.6379 15.2284 11.5629 14.8623 11.8397C14.4963 12.1165 14.4217 12.6384 14.6966 13.007L17.1811 16.3421C17.3186 16.5272 17.5257 16.6456 17.7526 16.6706C17.9812 16.6956 18.2081 16.6256 18.382 16.4755L24.1792 11.4728C24.527 11.1726 24.5667 10.6457 24.2702 10.2972C23.9721 9.947 23.4487 9.90698 23.1025 10.2055Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-sm">
              Licensed Insured <br />
              Eco-Friendly
            </p>
          </div>
          <div className="text-center">
            <div className="p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
              >
                <path
                  d="M20.4976 10.1843C18.5567 10.1843 16.6594 10.7598 15.0456 11.8381C13.4318 12.9164 12.174 14.449 11.4313 16.2422C10.6885 18.0353 10.4942 20.0084 10.8728 21.912C11.2515 23.8156 12.1861 25.5642 13.5585 26.9366C14.9309 28.309 16.6795 29.2436 18.5831 29.6223C20.4867 30.0009 22.4598 29.8066 24.2529 29.0638C26.0461 28.3211 27.5787 27.0633 28.657 25.4495C29.7353 23.8357 30.3108 21.9384 30.3108 19.9976C30.307 17.3961 29.2718 14.9023 27.4323 13.0628C25.5928 11.2233 23.099 10.1882 20.4976 10.1843ZM20.0088 24.6598C19.9211 24.7667 19.8118 24.8538 19.6879 24.9153C19.5641 24.9768 19.4286 25.0113 19.2904 25.0166H19.2513C19.1189 25.0168 18.9877 24.99 18.8659 24.9379C18.7441 24.8858 18.6341 24.8095 18.5427 24.7136L14.4327 20.4081L15.8499 19.0592L19.1927 22.5633L25.1061 15.3353L26.6211 16.5766L20.0088 24.6598ZM39.2689 17.7739L36.6738 16.1368C36.5307 16.0458 36.427 15.9043 36.3836 15.7403C36.3401 15.5764 36.36 15.4021 36.4393 15.2522L37.8663 12.5399C38.0739 12.1471 38.1786 11.7081 38.1707 11.2639C38.1627 10.8197 38.0423 10.3848 37.8207 9.99975C37.5992 9.61469 37.2836 9.29205 36.9036 9.06195C36.5236 8.83185 36.0914 8.7018 35.6475 8.68394L32.5833 8.56665C32.4133 8.55945 32.2521 8.48866 32.1317 8.36829C32.0113 8.24792 31.9405 8.08674 31.9334 7.91666L31.8112 4.84757C31.7941 4.40325 31.6646 3.97051 31.4349 3.58983C31.2051 3.20915 30.8825 2.89296 30.4973 2.67083C30.1121 2.4487 29.6769 2.32788 29.2323 2.31968C28.7878 2.31148 28.3484 2.41617 27.9553 2.62394L25.2429 4.05097C25.093 4.13026 24.9187 4.15015 24.7548 4.10667C24.5908 4.0632 24.4493 3.95955 24.3584 3.81639L22.7212 1.22623C22.4842 0.850705 22.156 0.5413 21.7672 0.326878C21.3784 0.112455 20.9416 0 20.4976 0C20.0535 0 19.6167 0.112455 19.2279 0.326878C18.8391 0.5413 18.5109 0.850705 18.2739 1.22623L16.6368 3.82128C16.5458 3.96444 16.4043 4.06809 16.2403 4.11156C16.0764 4.15503 15.9021 4.13515 15.7522 4.05586L13.0399 2.62883C12.6471 2.4212 12.2081 2.31648 11.7639 2.32445C11.3197 2.33241 10.8848 2.4528 10.4998 2.67437C10.1147 2.89594 9.79205 3.21147 9.56195 3.5915C9.33185 3.97153 9.2018 4.40367 9.18394 4.84757L9.06665 7.91178C9.05945 8.08185 8.98866 8.24303 8.86829 8.3634C8.74792 8.48377 8.58674 8.55456 8.41666 8.56176L5.34757 8.68394C4.90325 8.701 4.47051 8.83048 4.08983 9.06025C3.70915 9.29002 3.39296 9.61259 3.17083 9.99777C2.9487 10.383 2.82788 10.8182 2.81968 11.2628C2.81148 11.7073 2.91617 12.1467 3.12394 12.5399L4.55097 15.2522C4.63026 15.4021 4.65015 15.5764 4.60667 15.7403C4.5632 15.9043 4.45955 16.0458 4.31639 16.1368L1.72623 17.7739C1.3507 18.0109 1.0413 18.3391 0.826878 18.7279C0.612455 19.1167 0.5 19.5535 0.5 19.9976C0.5 20.4416 0.612455 20.8784 0.826878 21.2672C1.0413 21.656 1.3507 21.9842 1.72623 22.2212L4.32128 23.8584C4.46444 23.9493 4.56809 24.0908 4.61156 24.2548C4.65503 24.4187 4.63515 24.593 4.55586 24.7429L3.12883 27.4553C2.9212 27.848 2.81648 28.287 2.82445 28.7312C2.83241 29.1754 2.9528 29.6103 3.17437 29.9954C3.39594 30.3804 3.71147 30.7031 4.0915 30.9332C4.47153 31.1633 4.90367 31.2933 5.34757 31.3112L8.41178 31.4285C8.58185 31.4357 8.74303 31.5064 8.8634 31.6268C8.98377 31.7472 9.05456 31.9084 9.06176 32.0784L9.18394 35.1475C9.201 35.5919 9.33048 36.0246 9.56025 36.4053C9.79002 36.786 10.1126 37.1022 10.4978 37.3243C10.883 37.5464 11.3182 37.6672 11.7628 37.6754C12.2073 37.6836 12.6467 37.5789 13.0399 37.3712L15.7522 35.9441C15.9021 35.8649 16.0764 35.845 16.2403 35.8884C16.4043 35.9319 16.5458 36.0356 16.6368 36.1787L18.2739 38.7738C18.5109 39.1493 18.8391 39.4587 19.2279 39.6731C19.6167 39.8875 20.0535 40 20.4976 40C20.9416 40 21.3784 39.8875 21.7672 39.6731C22.156 39.4587 22.4842 39.1493 22.7212 38.7738L24.3584 36.1738C24.4493 36.0307 24.5908 35.927 24.7548 35.8836C24.9187 35.8401 25.093 35.86 25.2429 35.9393L27.9553 37.3663C28.348 37.5739 28.787 37.6786 29.2312 37.6707C29.6754 37.6627 30.1103 37.5423 30.4954 37.3207C30.8804 37.0992 31.2031 36.7836 31.4332 36.4036C31.6633 36.0236 31.7933 35.5914 31.8112 35.1475L31.9285 32.0833C31.9357 31.9133 32.0064 31.7521 32.1268 31.6317C32.2472 31.5113 32.4084 31.4405 32.5784 31.4334L35.6475 31.3112C36.0919 31.2941 36.5246 31.1646 36.9053 30.9349C37.286 30.7051 37.6022 30.3825 37.8243 29.9973C38.0464 29.6121 38.1672 29.1769 38.1754 28.7323C38.1836 28.2878 38.0789 27.8484 37.8712 27.4553L36.4441 24.7429C36.3649 24.593 36.345 24.4187 36.3884 24.2548C36.4319 24.0908 36.5356 23.9493 36.6787 23.8584L39.2738 22.2212C39.6493 21.9842 39.9587 21.656 40.1731 21.2672C40.3875 20.8784 40.5 20.4416 40.5 19.9976C40.5 19.5535 40.3875 19.1167 40.1731 18.7279C39.9587 18.3391 39.6493 18.0109 39.2738 17.7739H39.2689ZM20.4976 31.7657C18.17 31.7657 15.8948 31.0755 13.9595 29.7824C12.0243 28.4893 10.5159 26.6514 9.62523 24.501C8.73453 22.3507 8.50148 19.9845 8.95556 17.7017C9.40963 15.4189 10.5304 13.322 12.1762 11.6762C13.822 10.0304 15.9189 8.90963 18.2017 8.45556C20.4845 8.00148 22.8507 8.23453 25.001 9.12523C27.1514 10.0159 28.9893 11.5243 30.2824 13.4595C31.5755 15.3948 32.2657 17.67 32.2657 19.9976C32.2631 23.1179 31.0224 26.1096 28.816 28.316C26.6096 30.5224 23.6179 31.7631 20.4976 31.7657Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-sm">
              Reputation For High <br /> Quality
            </p>
          </div>
        </div>

            <div className="flex  mt-20">
              <button className="flex items-center gap-2 border-2 border-white rounded-full pl-3 pr-1.5 py-2  text-sm md:text-base font-medium hover:bg-blue-800 transition-colors">
                Book Your Estimate Today
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="31" height="30" rx="15" fill="white"/>
<path d="M23 9C23 8.44771 22.5523 8 22 8L13 8C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10L21 10L21 18C21 18.5523 21.4477 19 22 19C22.5523 19 23 18.5523 23 18L23 9ZM10.7071 21.7071L22.7071 9.70711L21.2929 8.29289L9.29289 20.2929L10.7071 21.7071Z" fill="#0D378D"/>
</svg>

              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 h-[300px] md:h-auto relative">
        <Image
          src={paintingCompany}
          alt="Blue awning installation"
          fill
          className="object-cover "
          style={{ objectPosition: "center 50%" }}
        />
        </div>
      </div>
    {/* </main> */}
  
  
  </div>
      <div className="bg-[#E2E7F1] py-12 px-4 relative ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold text-[#0D378D] text-center mb-12">
            WHY CHOOSE US?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality Workmanship */}
            <div className="flex flex-col  text-start">
              <div className="text-[#0D378D] mb-4">
                <div className="flex text-start">
                  <svg
                    width="63"
                    height="61"
                    viewBox="0 0 63 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50.8698 35.7308L53.3643 43.458L61.5 43.4431C62.3041 43.4431 62.9588 44.0953 62.9588 44.9019C62.9588 45.3873 62.7223 45.818 62.3564 46.0844L62.3589 46.0894L55.7692 50.8567L58.296 58.5864C58.5449 59.3556 58.1267 60.1796 57.3574 60.4286C56.8571 60.5904 56.3318 60.4684 55.9584 60.1522L49.4758 55.4248L42.904 60.2169C42.2543 60.6899 41.3432 60.548 40.8677 59.8983C40.5814 59.5074 40.5216 59.0195 40.6586 58.5913L40.6536 58.5888L43.1803 50.8591L36.5907 46.0918C35.936 45.6188 35.7916 44.7027 36.2646 44.0505C36.5733 43.6273 37.0687 43.4157 37.5541 43.4505L45.5827 43.4655L48.0797 35.7281C48.3261 34.9589 49.1476 34.5381 49.9144 34.7846C50.3824 34.9364 50.7234 35.2999 50.8604 35.738L50.8698 35.7308ZM38.9856 18.0083C38.6271 18.3668 38.2387 18.7003 37.8305 19.0016C39.1026 19.3949 40.3274 19.9102 41.4825 20.53C44.4922 22.1482 47.0563 24.4933 48.9331 27.3313C49.3787 28.0034 49.1945 28.9096 48.5223 29.3552C47.8502 29.8008 46.944 29.6166 46.4984 28.9444C44.8853 26.5098 42.6846 24.4958 40.0981 23.1067C37.6136 21.7698 34.7632 21.0105 31.731 21.0105C28.7014 21.0105 25.851 21.7698 23.3665 23.1067C20.7825 24.4958 18.5819 26.5097 16.9662 28.9444C16.5206 29.6166 15.6144 29.8008 14.9423 29.3552C14.2701 28.9096 14.0859 28.0034 14.5315 27.3313C16.411 24.4933 18.9727 22.1508 21.9821 20.53C23.1397 19.9077 24.3595 19.3949 25.6341 19.0016C25.2259 18.6979 24.84 18.3643 24.479 18.0083C22.6244 16.1511 21.4743 13.587 21.4743 10.7565C21.4743 7.92601 22.622 5.36192 24.479 3.50472C26.3362 1.65006 28.9003 0.5 31.7308 0.5C34.5614 0.5 37.1254 1.64764 38.9826 3.50472C40.8372 5.36186 41.9873 7.92595 41.9873 10.7565C41.9873 13.587 40.8397 16.1511 38.9826 18.0083H38.9856ZM15.3834 35.7308L17.8778 43.458L26.0135 43.4431C26.8176 43.4431 27.4723 44.0953 27.4723 44.9019C27.4723 45.3873 27.2358 45.818 26.8699 46.0844L26.8724 46.0894L20.2827 50.8567L22.8095 58.5864C23.0584 59.3556 22.6402 60.1796 21.8709 60.4286C21.3706 60.5904 20.8453 60.4684 20.4719 60.1522L13.9893 55.4248L7.41755 60.2169C6.76783 60.6899 5.85669 60.548 5.3812 59.8983C5.09491 59.5074 5.03517 59.0195 5.17208 58.5913L5.16711 58.5888L7.69385 50.8591L1.10422 46.0918C0.449531 45.6188 0.30512 44.7027 0.778108 44.0505C1.0868 43.6273 1.58218 43.4157 2.06761 43.4505L10.0937 43.4655L12.5931 35.7281C12.8396 34.9589 13.6611 34.5381 14.4278 34.7846C14.8958 34.9364 15.2369 35.2999 15.3738 35.738L15.3834 35.7308Z"
                      fill="#0D378D"
                    />
                  </svg>
                </div>
              </div>
              <h3 className=" lg:text-[24px]  text-[20px] font-semibold text-[#0D378D] mb-3 ">
                Quality Workmanship
              </h3>
              <p className="text-sm text-black">
              We use only premium materials and top-notch techniques.
              </p>
            </div>

            {/* Quality Materials */}
            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
                <svg
                  width="63"
                  height="61"
                  viewBox="0 0 63 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.6319 45.7856L40.8467 60.5L46.2196 46.5007C46.4841 45.8121 47.1907 45.4213 47.8913 45.5355L62.6957 47.8777L52.3856 34.2425C51.3663 35.9292 50.1487 37.4806 48.7626 38.8667C45.0434 42.5859 40.1188 45.1025 34.6285 45.788L34.6319 45.7856ZM31.6012 4.94365C32.5122 4.94365 33.3872 5.19921 34.205 5.67426L34.2952 5.73139C34.7492 6.00801 35.1851 6.35376 35.597 6.76572C36.1954 6.60937 36.7877 6.52518 37.359 6.52217C38.3061 6.51616 39.19 6.73564 39.9777 7.18965L40.0799 7.2558C40.8226 7.7098 41.4179 8.34423 41.8629 9.12595C42.1455 9.61603 42.368 10.1663 42.5334 10.7676C43.1317 10.9299 43.6789 11.1524 44.172 11.432C44.9958 11.8981 45.6513 12.5295 46.1082 13.3172C46.5623 14.1049 46.7787 14.9889 46.7757 15.939C46.7727 16.5102 46.6915 17.0995 46.5352 17.6948C46.9712 18.1368 47.335 18.6028 47.6236 19.0929C48.1017 19.9077 48.3573 20.7826 48.3573 21.6966C48.3573 22.6077 48.1017 23.4796 47.6266 24.2974C47.341 24.7905 46.9742 25.2565 46.5382 25.6985C46.6945 26.2938 46.7757 26.8831 46.7787 27.4543C46.7848 28.4014 46.5653 29.2854 46.1113 30.0731L46.0451 30.1753C45.5911 30.9179 44.9567 31.5133 44.175 31.9582C43.6849 32.2409 43.1346 32.4664 42.5333 32.6287C42.371 33.23 42.1485 33.7773 41.8659 34.2703L41.8057 34.3666C41.3427 35.1423 40.7324 35.7646 39.9807 36.2006C39.193 36.6546 38.309 36.8711 37.3619 36.8681C36.7907 36.8651 36.2014 36.7839 35.603 36.6275C35.161 37.0665 34.695 37.4303 34.2079 37.716C33.3931 38.194 32.5212 38.4496 31.6042 38.4496C30.6932 38.4496 29.8182 38.194 29.0004 37.719L28.9102 37.6619C28.4562 37.3852 28.0203 37.0395 27.6083 36.6275C27.01 36.7839 26.4177 36.8681 25.8464 36.8681C24.8993 36.8741 24.0124 36.6576 23.2247 36.2036C22.434 35.7466 21.8055 35.0911 21.3395 34.2733L21.2854 34.1711C21.0298 33.7021 20.8224 33.185 20.672 32.6257C20.0737 32.4603 19.5265 32.2409 19.0334 31.9582C18.2096 31.4922 17.5541 30.8638 17.0972 30.0731C16.6432 29.2854 16.4267 28.4014 16.4327 27.4543C16.4357 26.883 16.5169 26.2938 16.6762 25.6954C16.2342 25.2534 15.8644 24.7844 15.5818 24.3003L15.5307 24.2071C15.0887 23.4164 14.8482 22.5745 14.8482 21.6966C14.8482 20.7855 15.1007 19.9106 15.5788 19.0928L15.6359 19.0026C15.9095 18.5486 16.2583 18.1127 16.6702 17.6977C16.5139 17.0994 16.4297 16.5101 16.4297 15.9388C16.4237 14.9917 16.6432 14.1048 17.0972 13.317C17.5542 12.5263 18.2096 11.8979 19.0274 11.4319L19.1297 11.3778C19.5957 11.1222 20.1128 10.9178 20.6721 10.7644C20.8374 10.1631 21.0569 9.61286 21.3395 9.11979C21.8056 8.30198 22.434 7.6435 23.2247 7.18953C24.0124 6.73553 24.8964 6.51905 25.8465 6.52506C26.4177 6.52807 27.01 6.60925 27.6084 6.76559C28.0504 6.32662 28.5164 5.96279 29.0035 5.67715C29.8183 5.1991 30.6902 4.94354 31.6072 4.94354L31.6012 4.94365ZM32.6536 8.33211C32.3078 8.12766 31.953 8.01942 31.6012 8.01942C31.2494 8.01942 30.8947 8.12765 30.5489 8.33211C30.137 8.56963 29.7371 8.93043 29.3552 9.39345C28.9614 9.98576 28.1947 10.2414 27.5092 9.97073C26.8868 9.72719 26.3185 9.5949 25.8284 9.59189C25.4286 9.58888 25.0678 9.67307 24.7611 9.85046C24.4574 10.0248 24.2049 10.2985 24.0034 10.6503C23.7569 11.0832 23.5855 11.6304 23.4893 12.2709C23.3991 12.9323 22.8819 13.4825 22.1904 13.5848C21.571 13.675 21.0419 13.8373 20.5849 14.0808C20.203 14.3033 19.9264 14.5559 19.7521 14.8596C19.5777 15.1632 19.4905 15.527 19.4935 15.9269C19.4965 16.417 19.6288 16.9822 19.8723 17.6046C20.1099 18.218 19.9355 18.9426 19.3913 19.3726C18.9072 19.7544 18.5284 20.1633 18.2517 20.6083C18.0292 20.9902 17.921 21.3449 17.921 21.6967C17.921 22.0305 18.0172 22.3642 18.2156 22.719C18.4772 23.161 18.838 23.5669 19.295 23.9427C19.8873 24.3365 20.1429 25.1032 19.8723 25.7887C19.6287 26.4111 19.4964 26.9794 19.4934 27.4694C19.4904 27.8693 19.5746 28.2301 19.752 28.5368C19.9264 28.8405 20.2 29.093 20.5518 29.2945C20.9788 29.541 21.5319 29.7124 22.1754 29.8056C22.8369 29.8958 23.3871 30.4129 23.4893 31.1045C23.5795 31.7238 23.7419 32.253 23.9854 32.713C24.2079 33.0978 24.4604 33.3714 24.7641 33.5458C25.0678 33.7202 25.4316 33.8074 25.8315 33.8044C26.3215 33.8014 26.8928 33.6691 27.5122 33.4255C28.1255 33.188 28.8501 33.3624 29.2801 33.9066C29.665 34.3907 30.0678 34.7695 30.5159 35.0462C30.8977 35.2686 31.2525 35.3769 31.6013 35.3769C31.9531 35.3769 32.3079 35.2686 32.6536 35.0642C33.0655 34.8267 33.4654 34.4659 33.8473 34.0028C34.2412 33.4105 35.0078 33.1549 35.6933 33.4256C36.3157 33.6691 36.884 33.8014 37.3711 33.8044C37.7709 33.8044 38.1317 33.7202 38.4384 33.5458C38.724 33.3805 38.9646 33.1339 39.178 32.7821C39.4426 32.3161 39.614 31.7659 39.7102 31.1255C39.8004 30.4641 40.3176 29.9139 41.0091 29.8116C41.6585 29.7184 42.2118 29.544 42.6477 29.2945C42.9814 29.1081 43.24 28.8766 43.4294 28.5699C43.6249 28.2331 43.706 27.8693 43.706 27.4694C43.703 26.9794 43.5707 26.4111 43.3272 25.7917C43.0867 25.1784 43.2611 24.4537 43.8023 24.0238C44.3194 23.6149 44.7133 23.188 44.9628 22.758C45.1643 22.4122 45.2755 22.0514 45.2755 21.6967C45.2755 21.3449 45.1673 20.9901 44.9628 20.6443C44.7223 20.2264 44.3495 19.8145 43.8624 19.4237C43.3001 19.0208 43.0626 18.2751 43.3272 17.6076C43.5707 16.9853 43.703 16.417 43.706 15.9299C43.706 15.53 43.6218 15.1692 43.4475 14.8626C43.2731 14.5589 42.9995 14.3063 42.6477 14.1049C42.2207 13.8583 41.6675 13.687 41.024 13.5937C40.3626 13.5035 39.8124 12.9864 39.7102 12.2949C39.617 11.6454 39.4426 11.0922 39.193 10.6563C39.0066 10.3225 38.7751 10.0639 38.4684 9.87455C38.1287 9.67911 37.7679 9.59793 37.368 9.59793C36.8779 9.60094 36.3066 9.73323 35.6873 9.97677C35.0739 10.2143 34.3493 10.0399 33.9193 9.49571C33.5345 9.01163 33.1316 8.63279 32.6505 8.33815L32.6536 8.33211ZM10.8102 34.2403L0.5 47.8756L15.3045 45.5304C16.005 45.4221 16.7115 45.81 16.9762 46.4985L22.3521 60.4978L28.5668 45.7834C23.0767 45.1009 18.152 42.5813 14.4328 38.8621C13.0467 37.476 11.829 35.9246 10.8098 34.2379L10.8102 34.2403ZM46.589 6.70573C42.7555 2.86922 37.455 0.5 31.5975 0.5C25.7796 0.5 20.5123 2.8392 16.6815 6.62752L16.6063 6.7057C12.7698 10.5422 10.3976 15.8428 10.3976 21.6941C10.3976 27.5481 12.7728 32.8456 16.6063 36.6825C20.4428 40.519 25.7434 42.8913 31.5978 42.8913C37.4521 42.8913 42.7523 40.516 46.5893 36.6825C50.4258 32.846 52.798 27.5485 52.798 21.6941C52.798 15.8401 50.4228 10.5427 46.5923 6.70262L46.589 6.70573Z"
                    fill="#0D378D"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0D378D] mb-3">
                Quality Materials
              </h3>
              <p className="text-sm text-gray-700">
                We work with trusted, high-quality materials that stand the test
                of time.
              </p>
            </div>

            {/* Experienced Team */}
            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
                <svg
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.8567 25.8592C30.1347 25.8592 33.8222 22.2586 35.6229 17.6898C36.4166 15.7637 36.8425 13.6247 36.8425 11.5244C36.8425 4.52643 31.9353 0.5 25.8572 0.5C19.779 0.5 14.8811 4.52643 14.8811 11.5244C14.8811 13.6247 15.3457 15.754 16.1393 17.6898C17.9396 22.2583 21.6273 25.8592 25.8666 25.8592H25.8567Z"
                    fill="#0D378D"
                  />
                  <path
                    d="M60.0521 45.7298H57.0613C56.8387 44.849 56.4903 44.0263 56.0354 43.2713L58.1551 41.1516C58.339 40.9677 58.339 40.6774 58.1551 40.4935L55.5611 37.8995C55.3772 37.7156 55.0869 37.7156 54.903 37.8995L52.7833 40.0192C52.0283 39.5643 51.1959 39.2159 50.3248 38.9933V36.0025C50.3248 35.7509 50.1215 35.5476 49.8699 35.5476H46.1919C45.9402 35.5476 45.737 35.7509 45.737 36.0025V38.9933C44.8562 39.2159 44.0335 39.5644 43.2785 40.0192L41.1588 37.8995C40.9749 37.7156 40.6845 37.7156 40.5006 37.8995L37.9067 40.4935C37.7228 40.6774 37.7228 40.9677 37.9067 41.1516L40.0166 43.2713C39.5714 44.0263 39.223 44.8587 39.0004 45.7298H36.0096C35.7579 45.7298 35.5547 45.9331 35.5547 46.1847V49.8627C35.5547 50.1144 35.7579 50.3176 36.0096 50.3176H39.0004C39.223 51.1984 39.5714 52.0211 40.0166 52.7761L37.9067 54.8958C37.7228 55.0797 37.7228 55.3701 37.9067 55.554L40.5006 58.1479C40.6845 58.3318 40.9749 58.3318 41.1588 58.1479L43.2785 56.038C44.0335 56.4832 44.8658 56.8316 45.737 57.0542V60.045C45.737 60.2967 45.9402 60.4999 46.1919 60.4999H49.8699C50.1215 60.4999 50.3248 60.2967 50.3248 60.045V57.0542C51.2056 56.8316 52.0283 56.4832 52.7833 56.038L54.903 58.1479C55.0869 58.3318 55.3772 58.3318 55.5611 58.1479L58.1551 55.554C58.339 55.3701 58.339 55.0797 58.1551 54.8958L56.0354 52.7761C56.4903 52.0211 56.8387 51.1888 57.0613 50.3176H60.0521C60.3037 50.3176 60.507 50.1144 60.507 49.8627V46.1847C60.507 45.9331 60.3037 45.7298 60.0521 45.7298ZM51.6895 52.4273C51.2927 52.7661 50.8571 53.0371 50.3828 53.2404C49.6569 53.5694 48.8729 53.7437 48.0308 53.7437C44.8658 53.7437 42.3009 51.1788 42.3009 48.0137C42.3009 47.2007 42.4654 46.4361 42.7752 45.7489C43.6462 43.7066 45.6692 42.2838 48.0308 42.2838C48.4761 42.2838 48.9116 42.3322 49.3181 42.429C51.8637 43.0097 53.7608 45.294 53.7608 48.0137C53.7608 49.785 52.9574 51.3723 51.6992 52.4177L51.6895 52.4273Z"
                    fill="#0D378D"
                  />
                  <path
                    d="M39.93 29.6436L35.526 28.3853C34.6452 27.9691 33.5515 28.4241 33.2612 29.392L28.4411 41.3839L27.7249 34.7149C28.4799 34.5891 29.0703 33.9213 29.0703 33.1179V31.6467C29.0703 30.7272 28.3541 30.011 27.4346 30.011H24.289C23.3694 30.011 22.6145 30.7272 22.6145 31.6467V33.1179C22.6145 33.9115 23.2436 34.5891 23.9986 34.7149L23.2436 41.2966L18.5107 29.3529C18.2203 28.385 17.1653 27.9301 16.2458 28.3463L11.7645 29.6433C10.3416 30.1853 8.99626 30.9403 7.91222 32.034C6.1894 33.7085 5.06658 35.9347 4.72787 38.3252L0.575622 53.5308C0.236857 54.6633 1.07893 55.757 2.25006 55.757H7.6606C8.41558 55.757 9.08341 55.2537 9.33503 54.4988L12.4807 44.0648C12.5678 43.6486 13.1969 43.6873 13.2357 44.1035L13.7002 54.0822C13.739 55.0017 14.5423 55.7567 15.4618 55.7567H34.4325C34.3261 55.0017 34.4422 54.2177 34.7906 53.5208C33.2711 53.0078 32.1676 51.5657 32.1676 49.8719V46.1939C32.1676 44.5001 33.271 43.0579 34.7906 42.5449C34.0744 41.1028 34.3164 39.3122 35.5166 38.112L38.1105 35.5181C39.3107 34.3276 41.1013 34.0759 42.5435 34.7921C42.8532 33.863 43.521 33.0887 44.3728 32.6241C44.1985 32.4208 44.0146 32.2272 43.8307 32.0337C42.6983 30.9399 41.3626 30.185 39.9301 29.6429L39.93 29.6436Z"
                    fill="#0D378D"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0D378D] mb-3">
                Experienced Team
              </h3>
              <p className="text-sm text-gray-700">
                Our experts have over a decade of experience.
              </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex flex-col ">
              <div className="text-blue mb-4">
                <svg
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.0429 38.9572C39.1011 36.9824 40.568 34.2678 41.1106 31.6047C43.377 20.5273 17.6203 20.5273 19.8866 31.6047C20.4292 34.2678 21.8975 36.9824 23.9543 38.9572C27.9721 42.8097 33.0307 42.8097 37.0429 38.9572ZM34.2423 17.9265C35.2845 16.4124 36.4448 13.3593 36.4448 11.4511C36.4448 3.68495 24.5525 3.68495 24.5525 11.4511C24.5525 13.3593 25.7127 16.4124 26.7549 17.9265C28.9436 21.0976 32.0592 21.0976 34.2423 17.9265ZM2.89262 15.0399C4.68292 16.4083 8.78117 17.4672 16.0243 16.8496C17.2275 9.67746 16.5086 5.50852 15.2887 3.6114C14.7183 2.72182 13.8801 2.15143 13.0779 2.82452C12.4006 3.3949 11.9288 4.66612 12.012 6.49108C12.0398 6.97958 11.4847 7.25853 11.1155 6.95877L4.33596 1.52276C3.26594 0.665103 1.94057 0.109984 1.26747 0.834414C1.09399 1.02315 0.976025 1.28684 0.924676 1.60881C0.787281 2.47063 1.11342 3.68217 2.05714 4.97283L6.54122 11.118C6.85209 11.5274 6.5093 12.07 6.03744 12.0076C2.61644 11.5704 0.641559 13.3163 2.89262 15.0399ZM44.9785 16.8496C52.2174 17.4672 56.3199 16.4097 58.1102 15.0399C60.3571 13.3163 58.3822 11.5704 54.9584 12.0076C54.4865 12.07 54.1437 11.5274 54.4546 11.118L58.9387 4.97283C59.8824 3.68217 60.2099 2.47063 60.0712 1.60881C59.9768 1.03009 59.6742 0.594325 59.0872 0.51522C58.4849 0.436116 57.655 0.72339 56.664 1.52276L49.8817 6.95877C49.5126 7.25714 48.9574 6.97819 48.9852 6.49108C49.0685 4.66612 48.5952 3.3949 47.9193 2.82452C47.1172 2.15143 46.2789 2.72182 45.7085 3.6114C44.49 5.50713 43.7711 9.67746 44.9785 16.8496ZM24.1319 40.5823C22.9287 40.7988 21.8309 41.0778 20.8789 41.4081C15.9729 43.0956 15.9771 45.4174 20.8789 47.105C26.1734 48.9299 34.8252 48.9299 40.1197 47.105C45.0257 45.4174 45.0257 43.0956 40.1197 41.4081C39.1677 41.0778 38.0699 40.7988 36.8667 40.5823C32.8656 43.7645 28.1331 43.7645 24.1319 40.5823ZM41.1384 35.0242C43.4325 35.5044 45.5128 36.1303 47.3115 36.8727C56.9458 40.8613 56.9458 47.6518 47.3115 51.6403C38.0033 55.4914 22.9953 55.4914 13.6871 51.6403C4.05284 47.6518 4.05284 40.8613 13.6871 36.8727C15.4844 36.1289 17.5661 35.5044 19.8602 35.0242C19.065 33.2895 18.4474 31.1814 18.6917 29.3315C15.1 30.1655 11.8705 31.3729 9.16005 32.8648C-2.38668 39.214 -2.38668 49.3005 9.16005 55.6497C20.9261 62.1168 40.0739 62.1168 51.8399 55.6497C63.3867 49.3005 63.3867 39.214 51.8399 32.8648C49.1295 31.3743 45.9 30.1655 42.3111 29.3315C42.5512 31.18 41.9378 33.2895 41.1384 35.0242Z"
                    fill="#0D378D"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0D378D] mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-sm text-gray-700">
                Your satisfaction is our priority, and we ensure the job is done
                right the first time.
              </p>
            </div>
          </div>
        </div>

        {/* Background decorative element */}
     
      </div>
      <DiscussSection/>
      <Footer />
    </main>
  );
}