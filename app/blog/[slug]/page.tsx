


import { getBlogPosts } from "@/lib/blog-data"

import Link from "next/link"
import { notFound } from "next/navigation"

import React from "react";
import homeHero from "@/public/blog-banner.png";

import BlogHero from "@/components/blog-hero"
import BlogGrid from "@/components/blog-grid";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";


export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts()
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
     {/* <Navbar />
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
            <Highlight className="text-white">CALGARY PAINTERS</Highlight>
          </motion.h1>

          <p className="text-xl md:text-2xl text-white mb-8">
            for Interior and Exterior House Painting Services
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="bg-[#0D378D] text-white pl-5 pr-2 border-2 border-white rounded-full font-medium hover:bg-blue-700 flex items-center justify-center"
            >
              Get a Free Quote{" "}
              <span className="ml-2 bg-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M14.5 0.999999C14.5 0.447714 14.0523 -8.61581e-07 13.5 -1.11446e-06L4.5 -3.13672e-07C3.94772 -6.50847e-07 3.5 0.447715 3.5 0.999999C3.5 1.55228 3.94772 2 4.5 2L12.5 2L12.5 10C12.5 10.5523 12.9477 11 13.5 11C14.0523 11 14.5 10.5523 14.5 10L14.5 0.999999ZM2.20711 13.7071L14.2071 1.70711L12.7929 0.292893L0.792893 12.2929L2.20711 13.7071Z"
                    fill="#0D378D"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/book"
              className="bg-transparent border-2 border-white text-white px-10 py-2 rounded-full font-medium hover:bg-white hover:text-gray-800 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
      <TrustBadges /> */}
  <BlogHero
        title={post.title}
      
        imageSrc={homeHero}
        quoteLink="/quote"
        bookLink="/book"
        quoteText="Get a Free Quote"
        bookText="Read More"
      />
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/blogs" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to all posts
      </Link>

      <article className="bg-white rounded-lg overflow-hidden ">
        {/* <div className="relative h-80 w-full">
          <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div> */}

        <div className="p-6">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">{post.date}</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>

          <div className="prose max-w-none">
            <p className="text-black mb-4">{post.excerpt}</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-black">Why Color Matters</h2>
            <p className="text-black mb-4">
              {`The colors you choose for your home can significantly impact your mood, the perceived size of your rooms,
              and even your energy levels. Selecting the right interior paint color is one of the most important
              decisions you'll make during your home renovation project.`}
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-black">Our 7 Tips for Choosing the Perfect Paint Color</h2>

            <ol className="list-decimal pl-5 space-y-4 mt-4">
              <li className="text-black">
                <strong>Consider the room purpose:</strong> Different rooms serve different functions and may require
                different color schemes. Bedrooms often benefit from calming colors, while living areas might use more
                vibrant tones.
              </li>
              <li className="text-black">
                <strong>Think about lighting:</strong> Natural and artificial lighting can dramatically affect how a
                paint color appears. Test colors under different lighting conditions before making a final decision.
              </li>
              <li className="text-black">
                <strong>Start with color theory:</strong> Understanding basic color theory can help you create
                harmonious color schemes that flow well throughout your home.
              </li>
              <li className="text-black">
                <strong>Use the 60-30-10 rule:</strong> In any space, consider using 60% of a dominant color, 30% of a
                secondary color, and 10% of an accent color for balance.
              </li>
              <li className="text-black">
                <strong>Test before committing:</strong> Always test paint samples on your walls before painting the
                entire room. Colors can look different on your walls than they do on paint chips.
              </li>
              <li className="text-black">
                <strong>Consider the existing elements:</strong> Take into account your flooring, furniture, and
                fixtures when selecting paint colors.
              </li>
              <li className="text-black">
                <strong>{`Don't rush the decision:`}</strong> {`Take your time with color selection. It's better to spend
                extra time choosing the right color than to repaint later.`}
              </li>
            </ol>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-black">Conclusion</h2>
            <p className="text-black">
              {`Choosing the right interior paint color doesn't have to be overwhelming. By following these seven tips and
              taking your time with the decision, you can select colors that will make your home both beautiful and
              comfortable for years to come.`}
            </p>
          </div>
        </div>
      </article>


    </main>
    <main className="container mx-auto px-4 py-8 lg:mb-20  ">
          

          <BlogGrid posts={posts?.slice(0, 3)} />

      
        </main>
      <Footer />
    </>
  )
}

