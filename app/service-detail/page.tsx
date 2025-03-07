import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceDetail from "@/public/service-detail.png";
import Footer from "@/components/ui/footer";
import HomeBanner from "@/components/HomeBanner/home-banner";
import ContactFormSection from "@/components/ContactFormSection";
import { Navbar } from "@/components/navbar";
import BlogHeros from "@/components/blogs-hero";
import blogsBanner from "@/public/blogs-banner.png";
export default function InteriorPaintingCalgary() {
  return (
    <>
      <Navbar />
    
    <BlogHeros
      title="Interior "
      title2="Painting Painting Calgary"
      subtitle="Quality Calgary Interior Painting for Your Needs"
      imageSrc={blogsBanner}
      quoteLink="/quote"
      bookLink="/contact"
      quoteText="Get a Free Quote"
      bookText="Book Now"
    />

      <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
        <header className="mb-6">
          <h1 className="text-[26px] font-medium text-[#0D378D]">
            INTERIOR PAINTING CALGARY
          </h1>
        </header>

        <div className="space-y-6">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden ">
            <Image
              src={ServiceDetail}
              alt="Modern kitchen with white cabinets and stainless steel appliances"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h2 className="lg:text-[26px]  text-[20px] font-semibold text-black">
            Quality Calgary Interior Painting for Your Needs
          </h2>

          <div className="space-y-4 text-[16px]  text-black">
            <p>
              Looking for professional interior painting services in Calgary? At
              Albertson's Painting, a significant amount of this effort is our
              promise to deliver exceptional interior painting services. We take
              pride in our commitment to providing outstanding interior painting
              services, maintaining clear communication, and ensuring that the
              work is completed to your satisfaction. That is where Albertson
              Interior Painting in Calgary comes in. We understand the
              importance of having a beautifully painted interior space that
              reflects your personal style and enhances the overall ambiance of
              your home.
            </p>

            <p>
              Our team of experienced painters is dedicated to delivering
              high-quality and personalized painting solutions for your interior
              spaces. We believe that a fresh coat of paint can transform any
              room and create a positive and transformative impact on the space.
              From color choices to texture and paint selection, we ensure that
              the interior painting process is as seamless as possible.
            </p>

            <p>
              We understand that interior painting is more than just a simple
              application of paint on walls. It involves careful preparation,
              attention to detail, and precise painting design at your spaces
              through our professional interior painting services. We believe
              that every home has the potential to be beautiful, and a fresh
              coat of paint can significantly enhance its appeal. With our team
              of expert painters, we have the skills, experience, and resources
              to deliver exceptional interior painting services that exceed your
              expectations. Whether you're looking to refresh a single room or
              transform your entire home, we're here to help. From color
              selection to the final coat of paint, we're here to help. From
              prepping to interior painting, trim painting, decorating,
              painting, we have the expertise and experience to ensure that
              every interior painting project is completed efficiently and to
              your satisfaction. Contact our Calgary interior painters to
              schedule a free estimate today.
            </p>

            <p>
              At Albertson Interior Painting, we are committed to providing our
              clients with exceptional results at an affordable price. Our team
              of experienced painters takes great care and the highest quality
              products to ensure that every interior painting project is
              completed to perfection. We understand that your home is your
              sanctuary, and we treat it with the respect it deserves. Our
              interior painting services are designed to enhance the beauty and
              functionality of your living spaces. We understand the needs of
              your home or commercial space should match your desires and tastes
              meticulously, which is why we work closely with you to ensure that
              the final result is exactly what you envisioned. From color
              consultation to the final walkthrough, we're with you every step
              of the way. Contact Calgary Interior Painting today to learn more
              about how we can transform your interior spaces.
            </p>
          </div>
        </div>
      </div>
      <HomeBanner />
      <ContactFormSection />
      <Footer />
    </>
  );
}
