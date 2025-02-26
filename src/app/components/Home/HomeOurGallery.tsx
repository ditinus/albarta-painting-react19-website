
import React, { useState } from 'react';
import './HomeOurGallery.css'; 
import offer1 from '../../../../public/assets/banner.png';
import offer2 from '../../../../public/assets/hero.png';
import offer3 from '../../../../public/assets/decorGallery.png';
import offer4 from '../../../../public/assets/decorRoom.png';
import offer5 from '../../../../public/assets/Gallery-First.png'; 
import Image from 'next/image';

const HomeOurGallery: React.FC = () => {

  const offers = [
    { id: 1, imageSrc: offer1 },
    { id: 2, imageSrc: offer2 },
    { id: 3, imageSrc: offer3 },
    { id: 4, imageSrc: offer4 },
    { id: 5, imageSrc: offer5 },
  ];

 
  const [enlargedIndex, setEnlargedIndex] = useState<number>(2);


  const handleImageClick = (index: number): void => {
    setEnlargedIndex(index);  
  };

  return (
    <div className="gallery-carousel">
          {/* <div >
        <div className="our-gallery-heading">
          <h2>Our Gallery</h2>
          <div className="our-gallery-btn">
            <h1>See the Magic of Transformation with Our Painting Work</h1>
            <button className="view-btn">View All</button>
          </div>
        </div>
      </div> */}
      <div className="gallery-images">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`carousel-image-container ${index === enlargedIndex ? 'enlarged' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <div className="offer-cards">
              <Image src={offer.imageSrc} alt={`Offer ${offer.id}`} className="offer-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeOurGallery;




