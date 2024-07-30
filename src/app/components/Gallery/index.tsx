'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img7.jpg',
  '/img8.jpg',
  '/img9.jpg',
  '/img10.jpg',
  '/img11.jpg',
  '/img12.jpg',
  '/img13.jpg',
  '/img14.jpg',
  '/img15.jpg',
  '/img16.jpg',
  '/img17.jpg',
  '/img18.jpg',
  '/img19.jpg',
  '/img20.jpg',
  '/img21.jpg',
  '/img22.jpg',
  '/img23.jpg',
  '/img24.jpg',
  '/img25.jpg',
  '/img26.jpg',
  '/img27.jpg',
  '/img28.jpg',
  '/img29.jpg',
  '/img30.jpg',
  '/img31.jpg',
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleOpen = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsExpanded(false);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const handleExpandRemaining = () => {
    setIsExpanded(true);
    setSelectedImage(images[8]);
    setCurrentIndex(8);
  };

  const numImages = images.length;
  const numImagesToShow = isExpanded ? numImages : (numImages >= 8 ? 8 : numImages);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Galeria de Imagens</h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4`}>
          {images.slice(0, numImagesToShow).map((src, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg ${index === 7 && !isExpanded ? 'bg-gray-800 flex items-center justify-center cursor-pointer' : ''}`}
              onClick={index === 7 && !isExpanded ? handleExpandRemaining : () => handleOpen(index)}
              whileHover={{ scale: index !== 7 || isExpanded ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {index === 7 && !isExpanded ? (
                <div className="text-white text-xl font-bold">
                  + {numImages - 7} Imagens restantes
                </div>
              ) : (
                <div className="relative w-full h-48 md:h-48 lg:h-40">
                  <Image src={src} alt={`Imagem ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative max-w-3xl mx-auto p-4 rounded-lg">
              <button
                className="absolute top-2 right-[-50px] text-white text-4xl z-10 p-2"
                onClick={handleClose}
              >
                <FaTimes />
              </button>
              <button
                className="absolute left-[-60px] md:left-[-100px] top-1/2 transform -translate-y-1/2 text-white text-3xl px-4 py-2 rounded-lg z-10 m-2"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </button>
              <button
                className="absolute right-[-60px] md:right-[-100px] top-1/2 transform -translate-y-1/2 text-white text-3xl px-4 py-2 rounded-lg z-10 m-2"
                onClick={handleNext}
              >
                <FaChevronRight />
              </button>
              <div className="relative w-[250px] h-[350px] md:w-[600px] md:h-[600px]">
                <Image src={selectedImage} alt="Imagem Ampliada" layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
