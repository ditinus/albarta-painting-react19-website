import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceDetail from "@/public/service-detail.png";
import Footer from "@/components/ui/footer";
import HomeBanner from "@/components/HomeBanner/home-banner";
import ContactFormSection from "@/components/ContactFormSection";
import { Navbar } from "@/components/navbar";
import BlogHeros from "@/components/blogs-hero";
import blogsBanner from "@/public/blogs-banner.png";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";

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
      <div className="relative">
        <div className="absolute  z-[-2]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-[700px] z-[-2]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
      </div>
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

          <h2 className="text-[20px] font-semibold text-black">
            Quality Calgary Interior Painting for Your Needs
          </h2>

          <div className="space-y-4 text-[16px]  text-black">
            <p>
              Interior painting in Calgary can be a daunting task for many
              homeowners. It requires a significant amount of time, effort, and
              attention to detail to achieve a professional finish. Not only
              that, but it can also be quite stressful, as it involves making
              decisions about color schemes, coordinating with contractors, and
              ensuring that the work is completed to your satisfaction. That is
              where Alberta Colour Painting in Calgary comes in. We understand
              that interior painting in Calgary can be a frustrating experience,
              which is why we focus on making the process as easy and
              stress-free as possible for our clients. We are dedicated to
              providing premium workmanship and uncompromising quality, all
              while working within your budget. Our team of experienced
              professional Calgary interior painters will handle every aspect of
              the project, from start to finish, to ensure that your interior
              painting experience is as seamless as possible.
            </p>

            <p>
              At Alberta Colour Painting, we understand that your home is a
              reflection of your personal style and taste. That is why we focus
              on enhancing the pre-existing design of your space through our
              professional interior painting services. We believe that every
              home has the potential to be beautiful, and a fresh coat of paint
              can go a long way towards bringing out its best features. While
              many people believe that they can tackle wall painting on their
              own, it is actually one of the most difficult and time-consuming
              tasks in the world of home improvement. That is why we encourage
              our clients to sit back and relax while we handle all of the hard
              work for them. From wall painting to cabinet painting, trim
              painting, and ceiling painting, we have the expertise and
              experience to transform the interior of your home into a space
              that you will be proud to call your own. Our Calgary interior
              painters are ready to deliver exceptional results.
            </p>

            <p>
              At Alberta Colour Painting, we are committed to providing our
              clients with exceptional results at an affordable price. Our team
              of experienced Calgary interior painters uses only the highest
              quality products to ensure that your interior painting in Calgary
              project is a success, no matter the size of the space. From
              bedrooms and kitchens to living rooms and beyond, we have the
              expertise and equipment to handle any project. We understand that
              the inside of your home or commercial space should match your
              dreams and desires aesthetically, which is why we work closely
              with our clients to understand their vision and bring it to life.
              So if you are ready to transform the look and feel of your space,
              do not hesitate to contact Alberta Colour Painting today. Our
              interior painters in Calgary will be happy to help you make your
              color dreams a reality.
            </p>
          </div>
        </div>
      </div>
      <HomeBanner />
      <div className="relative">
        <div className="absolute top-[-100px] z-[-9]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
      </div>
      <ContactFormSection />

      <Footer />
    </>
  );
}
