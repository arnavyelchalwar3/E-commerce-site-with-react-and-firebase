import React, { useState } from 'react';

const ImageGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const images = [
    {
      src: "me.png",
      alt: 'Men',
      title: 'Men',
      subtitle: 'Spring 2024',
    },
    {
      src: "wo.png",
      alt: 'Women',
      title: 'Women',
      subtitle: 'Styled',
    },
    {
      src: "ac.png",
      alt: 'Accessories',
      title: 'Accessories',
      subtitle: 'New Trend',
    },
  ];

  return (
    <div className="text-center mt-16">
      <h1 className="text-center mb-5 text-2xl font-semibold">Shop By Categories</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex flex-col justify-between p-4">
                  <div className="text-gray text-2xl font-bold">
                    {image.title}
                  </div>
                  {/* <div className="text-white text-xl font-bold">
                    {image.subtitle}
                  </div> */}
                  <div className="flex items-center justify-between">
                    <div className="text-gray underline text-xl font-bold mx-auto">SHOP NOW</div>
                    <div className="text-white cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3a.75.75 0 000-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
