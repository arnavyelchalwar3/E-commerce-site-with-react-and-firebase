import React, { useState, useEffect } from 'react';
// import slide1 from './slide1.jpg';
import slide1 from '../../assets/Images/slide1.png';
import slide2 from '../../assets/Images/slide2.png';
import slide3 from '../../assets/Images/slide3.png';
import slide4 from '../../assets/Images/slide4.png';

const HeroSection = () => {
  const images = [
    { src: slide1, alt: 'First Slide' },
    { src: slide2, alt: 'Second Slide' },
    { src: slide3, alt: 'Third Slide' },
    { src: slide4, alt: 'Four Slide' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden mt-8">
      <div className="flex transition-transform duration-1000 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image.src} alt={image.alt} className="w-full h-md object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-4">
        <button onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
          Prev
        </button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
          Next
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
