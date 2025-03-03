"use client"

import { useEffect, useRef } from "react"

export default function ScrollingBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollBanner = () => {
      if (bannerRef.current) {
        if (bannerRef.current.scrollLeft >= bannerRef.current.scrollWidth / 2) {
          bannerRef.current.scrollLeft = 0
        } else {
          bannerRef.current.scrollLeft += 1
        }
      }
    }

    const interval = setInterval(scrollBanner, 30)
    return () => clearInterval(interval)
  }, [])

  const bannerText = "Special Discount 20% >>>>>>> "
  const repeatedText = bannerText.repeat(10)

  return (
    <div
      ref={bannerRef}
      className="bg-blue-800 text-white py-1 overflow-hidden whitespace-nowrap"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="inline-block">{repeatedText}</div>
    </div>
  )
}

