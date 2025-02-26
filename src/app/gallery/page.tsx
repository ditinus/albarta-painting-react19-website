import React from "react";
import Top from "../components/top/Top";
import HomeNavbar from "../components/Home/HomeNavbar";
import HomeHero from "../components/Home/HomeHero";
import HomeBadges from "../components/Home/HomeBadges";

export default function page() {
    return (
      <div>
        <Top />
        <HomeNavbar />
  
        <HomeHero />
        <HomeBadges />
        {/* <TransparentSection/> */}
     
      </div>
    );
  }
  
