import Image from "next/image";
import styles from "./page.module.css";
import Top from "./components/top/Top";
import HomeHero from "./components/Home/HomeHero";
import HomeBadges from "./components/Home/HomeBadges";
import HomeWhyChooseSection from "./components/Home/HomeWhyChooseSection";

export default function Home() {
  return (
    <div>
    <Top/>

 
    <HomeHero/>
    <HomeBadges/>
    {/* <TransparentSection/> */}
    {/* <HomeAboutUs/> */}
    <HomeWhyChooseSection/>
    {/* <HomeServices/> */}
  </div>
  );
}
