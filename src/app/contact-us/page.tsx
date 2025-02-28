"use client"
import HeroSection from "../components/BannerReusable/HeroSection"
import ContactForm from "../components/ContactForm"
import GoogleMap from "../components/Home/GoogleMap"
import HomeCalgaryPainting from "../components/Home/HomeCalgaryPainting"
import HomeNavbar from "../components/Home/HomeNavbar"
import HomeWhyChooseSection from "../components/Home/HomeWhyChooseSection"
import Top from "../components/top/Top"
import Footer from "../Layout/Footer"
import galleryHero from '../../../public/assets/galleryHero.png'
import ButtonArrow from '../../../public/assets/HoeAboutArrow.png'; 


const page = () => {
  return (
    <>
    <Top/>
    <HomeNavbar/>
    {/* <HeroSection/> */}
    <HeroSection
        title = "  Contact US"
        subtitle = "Let’s Bring Colour to Your Home Get in Touch Today!"
        backgroundImage = {galleryHero}
        primaryButtonText = "Get a Free Quote"
        primaryButtonUrl = "#"
        primaryButtonArrowImage = {ButtonArrow}
        secondaryButtonText = "Book Now"
        secondaryButtonUrl = "#"
        height= "60vh"
        />
    <ContactForm/>
    <GoogleMap/>
    <HomeCalgaryPainting/>
    <HomeWhyChooseSection/>
    <Footer/>
    </>
  )
}

export default page