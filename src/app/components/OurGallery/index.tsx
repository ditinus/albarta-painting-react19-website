import React, { useEffect } from 'react';

import "./style.css"

const Carousel = () => {
  useEffect(() => {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentPosition = 0;
    const itemWidth = 315; // 300px width + 15px gap

    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');

    nextButton.addEventListener('click', function () {
      if (currentPosition > -(itemWidth * (items.length - 3))) {
        currentPosition -= itemWidth;
        carousel.style.transform = `translateX(${currentPosition}px)`;
      }
    });

    prevButton.addEventListener('click', function () {
      if (currentPosition < 0) {
        currentPosition += itemWidth;
        carousel.style.transform = `translateX(${currentPosition}px)`;
      }
    });
  }, []); // The empty array ensures this runs only on client-side after initial render

  return (
    <div className="container">
      <div className="carousel-container position-relative">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-klpJ5UXtEcGgfSB2chjddjjQMCkkfb.png"
              alt="Blue exterior wall"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-klpJ5UXtEcGgfSB2chjddjjQMCkkfb.png"
              alt="White interior cabinet"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-klpJ5UXtEcGgfSB2chjddjjQMCkkfb.png"
              alt="Green bedroom"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-klpJ5UXtEcGgfSB2chjddjjQMCkkfb.png"
              alt="Living room"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-klpJ5UXtEcGgfSB2chjddjjQMCkkfb.png"
              alt="White storage unit"
            />
          </div>
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
