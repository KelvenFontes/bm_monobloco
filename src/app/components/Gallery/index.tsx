'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

  const handleOpen = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
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

  const numImages = images.length;
  const numImagesToShow = numImages >= 8 ? 8 : numImages;

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Galeria de Imagens</h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4`}>
          {images.slice(0, numImagesToShow).map((src, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg ${index === 7 ? 'bg-gray-800 flex items-center justify-center' : ''}`}
              onClick={index !== 7 ? () => handleOpen(index) : undefined}
              whileHover={{ scale: index !== 7 ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {index === 7 ? (
                <div className="text-white text-xl font-bold">
                  {numImages - 7} Imagens restantes
                </div>
              ) : (
                <div className="relative w-full h-40 md:h-48 lg:h-40">
                  <Image src={src} alt={`Imagem ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative max-w-3xl mx-auto bg-white p-4 rounded-lg">
              <button
                className="absolute top-2 right-2 text-gray-900 text-2xl"
                onClick={handleClose}
              >
                &times;
              </button>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-900 text-2xl"
                onClick={handlePrev}
              >
                &larr;
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-900 text-2xl"
                onClick={handleNext}
              >
                &rarr;
              </button>
              <div className="relative w-[600px] h-[600px]">
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
