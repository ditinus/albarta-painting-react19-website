"use client";
import BlogGrid from "@/components/blog-grid";
import { getBlogPosts } from "@/lib/blog-data";
import BlogHeros from "@/components/blogs-hero";
import blogsBanner from "@/public/blogs-banner.png";

import Footer from "@/components/ui/footer";
import ContactFormSection  from "@/components/ContactFormSection";
import { Navbar } from "@/components/navbar";
export default function blogs() {
  const posts = getBlogPosts();

  return (
    <>

      <Navbar />
      {" "}
      <BlogHeros
        title="Our "
        title2="BLOG"
        subtitle="Painting Tips, Trends & Expert Advice"
        imageSrc={blogsBanner}
        quoteLink="/quote"
        bookLink="/book"
        quoteText="Get a Free Quote"
        bookText="Read More"
      />
      <main className="container mx-auto px-4 py-8 lg:mt-20 mt-10">
        <div className=""></div>

        <BlogGrid posts={posts} />

        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
