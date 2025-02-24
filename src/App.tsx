

import './App.css'
import Top from './components/top/Top'
import HomeNavbar from './components/Home/HomeNavbar'
import { Routes, Route } from 'react-router-dom'
import HomeHero from './components/Home/HomeHero'
import HomeBadges from './components/Home/HomeBadges'
// import TransparentSection from './components/Home/TransparentSection'
import HomeAboutUs from './components/Home/HomeAboutUs'
import HomeWhyChooseSection from './components/Home/HomeWhyChooseSection'
import HomeServices from './components/Home/HomeServices'
import HomeBanner from './components/Home/HomeBanner'
import HomeOfferCarasoul from './components/Home/HomeOfferCarasoul'
import HomeOurGallery from './components/Home/HomeOurGallery'
import HomeCalgaryPainting from './components/Home/HomeCalgaryPainting'



function App() {


  return (
    <>
      <div>
        <Top/>
        <Routes>
        <Route path="/" element={<HomeNavbar />} />
        <Route path="/home" element={<HomeNavbar/>} />
        </Routes>
        <HomeHero/>
        <HomeBadges/>
        {/* <TransparentSection/> */}
        <HomeAboutUs/>
        <HomeWhyChooseSection/>
        <HomeServices/>
        <HomeBanner/>
        <HomeOfferCarasoul/>
        <HomeOurGallery/>
        <HomeCalgaryPainting/>
      </div>
    </>
  )
}

export default App
