"use client";

import BlogGrid from "../components/Blog/BlogGrid";
import { blogPosts } from "../lib/data";
import Top from "../components/top/Top";
import HomeNavbar from "../components/Home/HomeNavbar";
import HomeHero from "../components/Home/HomeHero";
import HomeBadges from "../components/Home/HomeBadges";
import HomeBanner from "../components/Home/HomeBanner";
import ContactForm from "../components/ContactForm";

export default function Blog() {
  return (
    <>
      <Top />
      <HomeNavbar />
      <HomeHero />
      <HomeBadges />
      <BlogGrid posts={blogPosts} />
      <div className="container">
        <HomeBanner />
      </div>

      <ContactForm />
    </>
  );
}
