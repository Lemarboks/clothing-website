'use client';

import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop', // Street wear fashion
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&h=800&fit=crop', // Urban clothing
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop', // Street style
  'https://images.unsplash.com/photo-1506629905607-0b5b8b5b9b5b?w=1200&h=800&fit=crop', // Fashion model
];

export default function Showcase() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-black via-gray-800 to-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Street wear ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 street-shadow">
          STREET WEAR CO.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Unleash your urban style. Customize, conquer the streets.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-orange-500 text-black font-bold py-4 px-8 rounded-lg hover:bg-orange-400 transition-colors street-shadow text-lg">
            Shop Now
          </button>
          <button className="border-2 border-orange-500 text-orange-500 font-bold py-4 px-8 rounded-lg hover:bg-orange-500 hover:text-black transition-colors text-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-orange-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-orange-500 transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-500 rounded-full opacity-50"></div>
      </div>

      {/* Slideshow indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}