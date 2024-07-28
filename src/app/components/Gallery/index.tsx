import React from 'react';
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
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Galeria de Imagens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-96">
                <Image src={src} alt={`Imagem ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
