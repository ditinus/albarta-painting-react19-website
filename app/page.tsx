"use client";
import MobileMenu from "@/components/mobile-menu";
import ScrollingBanner from "@/components/scrolling-banner";
import TrustBadges from "@/components/trust-badges";
import { Clock, Mail, MapPin, Phone, PhoneCall, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import homeHero from "@/public/home-hero.png";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import paintingCompany from "@/public/paintingCompany.png";
import Footer from "@/components/ui/footer";
import ReviewsCarousel from "@/components/ReviewsCarousel";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollingBanner />

      <header className="bg-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Alberta Color Painting"
                width={100}
                height={40}
                className="h-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-2">
                <PhoneCall className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-gray-800 font-medium">587-466-6647</span>
            </div>
            <Link
              href="/book"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          <MobileMenu />
        </div>
      </header>

      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <Image
            src={homeHero}
            alt="Interior painting"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            EXPERT{" "}
            <Highlight className="text-white">CALGARY PAINTERS </Highlight>
          </motion.h1>

          <p className="text-xl md:text-2xl text-white mb-8">
            for Interior and Exterior House Painting Services
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Get a Free Quote
              <span className="ml-2 bg-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </Link>
            <Link
              href="/book"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-gray-800 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-[#0D378D] text-white">
          <div className=" grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-7 px-20 py-30">
              <h1 className="text-3xl md:text-4xl font-bold">
                WE ARE YOUR CALGARY PAINTING COMPANY
              </h1>
              <p className="text-lg">
                Alberta Colour Painting is your trusted partner in Calgary,
                offering detailed estimates and unparalleled painting services.
                As a leading Calgary painting company, we pride ourselves on our
                professional and skilled Calgary painters.
              </p>
              <h3>Our Touch Of Paint Makes A Difference!</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4 place-content-stretch col-span-2">
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
                  <p className="text-sm">Free Detailed <br/> Estimate</p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
<path d="M17.4021 16.9061C20.2542 16.9061 22.7125 14.5058 23.913 11.4599C24.4421 10.1758 24.726 8.74981 24.726 7.3496C24.726 2.68429 21.4546 0 17.4025 0C13.3504 0 10.0851 2.68429 10.0851 7.3496C10.0851 8.74981 10.3948 10.1694 10.9239 11.4599C12.1241 14.5056 14.5826 16.9061 17.4087 16.9061H17.4021Z" fill="white"/>
<path d="M40.1992 30.1529H38.2053C38.0569 29.5657 37.8246 29.0172 37.5214 28.5139L38.9345 27.1008C39.0571 26.9782 39.0571 26.7846 38.9345 26.662L37.2052 24.9327C37.0826 24.8101 36.889 24.8101 36.7664 24.9327L35.3533 26.3458C34.85 26.0426 34.2951 25.8103 33.7143 25.6619V23.668C33.7143 23.5003 33.5788 23.3647 33.411 23.3647H30.959C30.7913 23.3647 30.6558 23.5003 30.6558 23.668V25.6619C30.0686 25.8103 29.5201 26.0426 29.0168 26.3458L27.6036 24.9327C27.481 24.8101 27.2875 24.8101 27.1649 24.9327L25.4355 26.662C25.3129 26.7846 25.3129 26.9782 25.4355 27.1008L26.8422 28.5139C26.5454 29.0172 26.3131 29.5721 26.1647 30.1529H24.1708C24.0031 30.1529 23.8676 30.2884 23.8676 30.4562V32.9082C23.8676 33.0759 24.0031 33.2115 24.1708 33.2115H26.1647C26.3131 33.7987 26.5454 34.3471 26.8422 34.8504L25.4355 36.2636C25.3129 36.3862 25.3129 36.5798 25.4355 36.7024L27.1649 38.4317C27.2875 38.5543 27.481 38.5543 27.6036 38.4317L29.0168 37.025C29.5201 37.3218 30.075 37.5541 30.6558 37.7025V39.6964C30.6558 39.8641 30.7913 39.9997 30.959 39.9997H33.411C33.5788 39.9997 33.7143 39.8642 33.7143 39.6964V37.7025C34.3015 37.5541 34.85 37.3218 35.3533 37.025L36.7664 38.4317C36.889 38.5543 37.0826 38.5543 37.2052 38.4317L38.9345 36.7024C39.0571 36.5798 39.0571 36.3862 38.9345 36.2636L37.5214 34.8504C37.8247 34.3471 38.057 33.7922 38.2053 33.2115H40.1992C40.367 33.2115 40.5025 33.076 40.5025 32.9082V30.4562C40.5025 30.2884 40.367 30.1529 40.1992 30.1529ZM34.6241 34.6179C34.3596 34.8438 34.0692 35.0244 33.753 35.1599C33.269 35.3793 32.7464 35.4955 32.185 35.4955C30.075 35.4955 28.365 33.7855 28.365 31.6755C28.365 31.1335 28.4747 30.6237 28.6812 30.1656C29.2619 28.8041 30.6106 27.8556 32.185 27.8556C32.4818 27.8556 32.7722 27.8878 33.0432 27.9524C34.7402 28.3395 36.005 29.8623 36.005 31.6755C36.005 32.8564 35.4694 33.9146 34.6306 34.6115L34.6241 34.6179Z" fill="white"/>
<path d="M26.7843 19.4287L23.8483 18.5899C23.2611 18.3124 22.532 18.6157 22.3384 19.261L19.125 27.2556L18.6475 22.8096C19.1509 22.7257 19.5445 22.2805 19.5445 21.7449V20.7641C19.5445 20.1511 19.067 19.6737 18.454 19.6737H16.3569C15.7439 19.6737 15.2406 20.1511 15.2406 20.7641V21.7449C15.2406 22.274 15.66 22.7257 16.1633 22.8096L15.66 27.1974L12.5047 19.235C12.3111 18.5897 11.6078 18.2864 10.9948 18.5639L8.00721 19.4286C7.05867 19.7899 6.16174 20.2932 5.43905 21.0224C4.2905 22.1387 3.54195 23.6228 3.31614 25.2165L0.547974 35.3536C0.32213 36.1086 0.88351 36.8377 1.66427 36.8377H5.2713C5.77462 36.8377 6.21985 36.5022 6.38759 35.9989L8.48469 29.0429C8.54276 28.7654 8.96216 28.7912 8.98801 29.0687L9.29774 35.7212C9.32355 36.3342 9.85913 36.8375 10.4721 36.8375H23.1193C23.0483 36.3342 23.1257 35.8115 23.358 35.3469C22.345 35.0049 21.6094 34.0435 21.6094 32.9143V30.4623C21.6094 29.3331 22.3449 28.3716 23.358 28.0297C22.8806 27.0682 23.0419 25.8745 23.842 25.0744L25.5713 23.3451C26.3714 22.5514 27.5652 22.3836 28.5266 22.8611C28.7331 22.2417 29.1783 21.7254 29.7461 21.4157C29.63 21.2802 29.5074 21.1512 29.3848 21.0221C28.6298 20.293 27.7393 19.7897 26.7844 19.4283L26.7843 19.4287Z" fill="white"/>
<path d="M34.0112 31.689C34.0112 34.1232 30.359 34.1232 30.359 31.689C30.359 29.2547 34.0112 29.2547 34.0112 31.689Z" fill="white"/>
</svg>
                  </div>
                  <p className="text-sm">Skilled Professional  <br/> Painters</p>
                </div>
                <div className="text-center">
                  <div className=" p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.35125 20.5493L0.568213 33.7731C0.394299 34.0683 0.417466 34.4418 0.629476 34.7136C0.841486 34.9837 1.1959 35.0955 1.52386 34.9937L7.82121 33.0477L9.24735 39.3511C9.32188 39.6846 9.59182 39.9364 9.9264 39.9898C10.261 40.0431 10.5939 39.8847 10.7662 39.5912L18.3919 26.6343C18.758 26.666 19.1273 26.681 19.5 26.681C19.8727 26.681 20.2421 26.666 20.6081 26.6343L28.2338 39.5912C28.4061 39.8847 28.739 40.0431 29.0736 39.9898C29.4082 39.9364 29.6781 39.6846 29.7527 39.3511L31.1788 33.0477L37.4762 34.9937C37.8041 35.0955 38.1585 34.9837 38.3705 34.7136C38.5826 34.4418 38.6057 34.0683 38.4318 33.7731L30.6488 20.5493C31.9788 18.4682 32.7506 15.9952 32.7506 13.3405C32.7506 5.9782 26.8127 0 19.5 0C12.1873 0 6.2494 5.9782 6.2494 13.3405C6.2494 15.9952 7.02122 18.4682 8.35125 20.5493ZM19.5 1.66756C25.8984 1.66756 31.0943 6.8987 31.0943 13.3405C31.0943 19.7823 25.8984 25.0134 19.5 25.0134C13.1016 25.0134 7.90573 19.7823 7.90573 13.3405C7.90573 6.8987 13.1016 1.66756 19.5 1.66756ZM19.5 3.33512C14.0159 3.33512 9.56205 7.81919 9.56205 13.3405C9.56205 18.8618 14.0159 23.3458 19.5 23.3458C24.9841 23.3458 29.438 18.8618 29.438 13.3405C29.438 7.81919 24.9841 3.33512 19.5 3.33512ZM19.5 5.00268C24.0715 5.00268 27.7816 8.73801 27.7816 13.3405C27.7816 17.9429 24.0715 21.6783 19.5 21.6783C14.9286 21.6783 11.2184 17.9429 11.2184 13.3405C11.2184 8.73801 14.9286 5.00268 19.5 5.00268ZM23.1025 10.2055L17.9762 14.6295L16.0218 12.0064C15.7468 11.6379 15.2284 11.5629 14.8623 11.8397C14.4963 12.1165 14.4217 12.6384 14.6966 13.007L17.1811 16.3421C17.3186 16.5272 17.5257 16.6456 17.7526 16.6706C17.9812 16.6956 18.2081 16.6256 18.382 16.4755L24.1792 11.4728C24.527 11.1726 24.5667 10.6457 24.2702 10.2972C23.9721 9.947 23.4487 9.90698 23.1025 10.2055Z" fill="white"/>
</svg>
                  </div>
                  <p className="text-sm">Licensed Insured <br/>Eco-Friendly</p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
<path d="M20.4976 10.1843C18.5567 10.1843 16.6594 10.7598 15.0456 11.8381C13.4318 12.9164 12.174 14.449 11.4313 16.2422C10.6885 18.0353 10.4942 20.0084 10.8728 21.912C11.2515 23.8156 12.1861 25.5642 13.5585 26.9366C14.9309 28.309 16.6795 29.2436 18.5831 29.6223C20.4867 30.0009 22.4598 29.8066 24.2529 29.0638C26.0461 28.3211 27.5787 27.0633 28.657 25.4495C29.7353 23.8357 30.3108 21.9384 30.3108 19.9976C30.307 17.3961 29.2718 14.9023 27.4323 13.0628C25.5928 11.2233 23.099 10.1882 20.4976 10.1843ZM20.0088 24.6598C19.9211 24.7667 19.8118 24.8538 19.6879 24.9153C19.5641 24.9768 19.4286 25.0113 19.2904 25.0166H19.2513C19.1189 25.0168 18.9877 24.99 18.8659 24.9379C18.7441 24.8858 18.6341 24.8095 18.5427 24.7136L14.4327 20.4081L15.8499 19.0592L19.1927 22.5633L25.1061 15.3353L26.6211 16.5766L20.0088 24.6598ZM39.2689 17.7739L36.6738 16.1368C36.5307 16.0458 36.427 15.9043 36.3836 15.7403C36.3401 15.5764 36.36 15.4021 36.4393 15.2522L37.8663 12.5399C38.0739 12.1471 38.1786 11.7081 38.1707 11.2639C38.1627 10.8197 38.0423 10.3848 37.8207 9.99975C37.5992 9.61469 37.2836 9.29205 36.9036 9.06195C36.5236 8.83185 36.0914 8.7018 35.6475 8.68394L32.5833 8.56665C32.4133 8.55945 32.2521 8.48866 32.1317 8.36829C32.0113 8.24792 31.9405 8.08674 31.9334 7.91666L31.8112 4.84757C31.7941 4.40325 31.6646 3.97051 31.4349 3.58983C31.2051 3.20915 30.8825 2.89296 30.4973 2.67083C30.1121 2.4487 29.6769 2.32788 29.2323 2.31968C28.7878 2.31148 28.3484 2.41617 27.9553 2.62394L25.2429 4.05097C25.093 4.13026 24.9187 4.15015 24.7548 4.10667C24.5908 4.0632 24.4493 3.95955 24.3584 3.81639L22.7212 1.22623C22.4842 0.850705 22.156 0.5413 21.7672 0.326878C21.3784 0.112455 20.9416 0 20.4976 0C20.0535 0 19.6167 0.112455 19.2279 0.326878C18.8391 0.5413 18.5109 0.850705 18.2739 1.22623L16.6368 3.82128C16.5458 3.96444 16.4043 4.06809 16.2403 4.11156C16.0764 4.15503 15.9021 4.13515 15.7522 4.05586L13.0399 2.62883C12.6471 2.4212 12.2081 2.31648 11.7639 2.32445C11.3197 2.33241 10.8848 2.4528 10.4998 2.67437C10.1147 2.89594 9.79205 3.21147 9.56195 3.5915C9.33185 3.97153 9.2018 4.40367 9.18394 4.84757L9.06665 7.91178C9.05945 8.08185 8.98866 8.24303 8.86829 8.3634C8.74792 8.48377 8.58674 8.55456 8.41666 8.56176L5.34757 8.68394C4.90325 8.701 4.47051 8.83048 4.08983 9.06025C3.70915 9.29002 3.39296 9.61259 3.17083 9.99777C2.9487 10.383 2.82788 10.8182 2.81968 11.2628C2.81148 11.7073 2.91617 12.1467 3.12394 12.5399L4.55097 15.2522C4.63026 15.4021 4.65015 15.5764 4.60667 15.7403C4.5632 15.9043 4.45955 16.0458 4.31639 16.1368L1.72623 17.7739C1.3507 18.0109 1.0413 18.3391 0.826878 18.7279C0.612455 19.1167 0.5 19.5535 0.5 19.9976C0.5 20.4416 0.612455 20.8784 0.826878 21.2672C1.0413 21.656 1.3507 21.9842 1.72623 22.2212L4.32128 23.8584C4.46444 23.9493 4.56809 24.0908 4.61156 24.2548C4.65503 24.4187 4.63515 24.593 4.55586 24.7429L3.12883 27.4553C2.9212 27.848 2.81648 28.287 2.82445 28.7312C2.83241 29.1754 2.9528 29.6103 3.17437 29.9954C3.39594 30.3804 3.71147 30.7031 4.0915 30.9332C4.47153 31.1633 4.90367 31.2933 5.34757 31.3112L8.41178 31.4285C8.58185 31.4357 8.74303 31.5064 8.8634 31.6268C8.98377 31.7472 9.05456 31.9084 9.06176 32.0784L9.18394 35.1475C9.201 35.5919 9.33048 36.0246 9.56025 36.4053C9.79002 36.786 10.1126 37.1022 10.4978 37.3243C10.883 37.5464 11.3182 37.6672 11.7628 37.6754C12.2073 37.6836 12.6467 37.5789 13.0399 37.3712L15.7522 35.9441C15.9021 35.8649 16.0764 35.845 16.2403 35.8884C16.4043 35.9319 16.5458 36.0356 16.6368 36.1787L18.2739 38.7738C18.5109 39.1493 18.8391 39.4587 19.2279 39.6731C19.6167 39.8875 20.0535 40 20.4976 40C20.9416 40 21.3784 39.8875 21.7672 39.6731C22.156 39.4587 22.4842 39.1493 22.7212 38.7738L24.3584 36.1738C24.4493 36.0307 24.5908 35.927 24.7548 35.8836C24.9187 35.8401 25.093 35.86 25.2429 35.9393L27.9553 37.3663C28.348 37.5739 28.787 37.6786 29.2312 37.6707C29.6754 37.6627 30.1103 37.5423 30.4954 37.3207C30.8804 37.0992 31.2031 36.7836 31.4332 36.4036C31.6633 36.0236 31.7933 35.5914 31.8112 35.1475L31.9285 32.0833C31.9357 31.9133 32.0064 31.7521 32.1268 31.6317C32.2472 31.5113 32.4084 31.4405 32.5784 31.4334L35.6475 31.3112C36.0919 31.2941 36.5246 31.1646 36.9053 30.9349C37.286 30.7051 37.6022 30.3825 37.8243 29.9973C38.0464 29.6121 38.1672 29.1769 38.1754 28.7323C38.1836 28.2878 38.0789 27.8484 37.8712 27.4553L36.4441 24.7429C36.3649 24.593 36.345 24.4187 36.3884 24.2548C36.4319 24.0908 36.5356 23.9493 36.6787 23.8584L39.2738 22.2212C39.6493 21.9842 39.9587 21.656 40.1731 21.2672C40.3875 20.8784 40.5 20.4416 40.5 19.9976C40.5 19.5535 40.3875 19.1167 40.1731 18.7279C39.9587 18.3391 39.6493 18.0109 39.2738 17.7739H39.2689ZM20.4976 31.7657C18.17 31.7657 15.8948 31.0755 13.9595 29.7824C12.0243 28.4893 10.5159 26.6514 9.62523 24.501C8.73453 22.3507 8.50148 19.9845 8.95556 17.7017C9.40963 15.4189 10.5304 13.322 12.1762 11.6762C13.822 10.0304 15.9189 8.90963 18.2017 8.45556C20.4845 8.00148 22.8507 8.23453 25.001 9.12523C27.1514 10.0159 28.9893 11.5243 30.2824 13.4595C31.5755 15.3948 32.2657 17.67 32.2657 19.9976C32.2631 23.1179 31.0224 26.1096 28.816 28.316C26.6096 30.5224 23.6179 31.7631 20.4976 31.7657Z" fill="white"/>
</svg>

                  </div>
                  <p className="text-sm">Reputation For High  <br/> Quality</p>
                </div>
              </div>
            </div>

            <div className="relative h-full  ">
              <Image
                src={paintingCompany}
                alt="Blue awning installation"
                fill
                className="object-cover "
                style={{ objectPosition: "center 50%" }}
              />
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                OUR REPUTATION SPEAKS FOR ITSELF
              </h2>
              <div className="flex items-center mt-4 md:mt-0">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="ml-2 font-medium">Google</span>
                <Button
                  variant="default"
                  className="ml-4 bg-blue-700 hover:bg-blue-800"
                >
                  Read Reviews
                </Button>
              </div>
            </div>
          </div>
        </section>
<ReviewsCarousel/>
        {/* Testimonials Section */}
        {/* <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl text-gray-400 mb-4">"</div>
                <p className="text-gray-600 mb-4">
                  The team was professional and efficient. Our new awning looks fantastic and has completely transformed
                  our patio space.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">John D.</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl text-gray-400 mb-4">"</div>
                <p className="text-gray-600 mb-4">
                  Excellent customer service from start to finish. The quality of the materials is outstanding and the
                  installation was quick.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">Sarah M.</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl text-gray-400 mb-4">"</div>
                <p className="text-gray-600 mb-4">
                  We couldn't be happier with our new commercial awnings. They've improved the look of our storefront
                  and provide great shade.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">Robert T.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

        {/* Project CTA Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="rounded-lg p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                    HAVE A PROJECT IN MIND?
                    <br />
                    GET A QUOTE
                  </h2>
                  <p className="mb-4 text-black">
                    Fill out the form and our team will get back to you within
                    24 hours to discuss your project needs.
                  </p>
                </div>
                <div>
                  <form className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-white text-gray-800"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="bg-white text-gray-800"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-white text-gray-800"
                    />
                    <Textarea
                      placeholder="Tell us about your project"
                      className="bg-white text-gray-800"
                    />
                    <Button className="w-full bg-blue-900 hover:bg-blue-950">
                      Submit Request
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News/Blog Section */}
      </div>
      <Footer />
    </main>
  );
}
