"use client"

import { motion } from "framer-motion"

export default function ScrollingBanner() {
  const bannerText = "Special Discount 20% >>>>>>> "
  const repeatedText = bannerText.repeat(10)

  return (
    <div
      className="bg-blue-800 text-white py-1 overflow-hidden whitespace-nowrap"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Using Framer Motion to animate the horizontal scrolling */}
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }} // Scroll from left to right (resetting after reaching end)
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust the duration for the speed of the scroll
          ease: "linear", // Use linear easing for a smooth scroll effect
        }}
      >
        {/* Wrapping the repeated text into two sections for seamless scrolling */}
        <div className="inline-block">{repeatedText}</div>
        <div className="inline-block">{repeatedText}</div>
      </motion.div>
    </div>
  )
}
