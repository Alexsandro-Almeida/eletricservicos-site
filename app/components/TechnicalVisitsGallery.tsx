'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const visitasData = [
  {
    id: 1,
    image: 'assets/visitas/galary.jpg',
    title: '',
    description: '',
    date: '',
  },
  {
    id: 2,
    image: '/assets/visitas/galary2.webp',
    title: '',
    description: '',
    date: '',
  },
  {
    id: 3,
    image: '/assets/visitas/galary4.jpg',
    title: '',
    description: '',
    date: '',
  },
  {
    id: 4,
    image: '/assets/visitas/galary15.jpg',
    title: '',
    description: '',
    date: '',
  },
  {
    id: 5,
    image: '/assets/visitas/galary19.jpg',
    title: '',
    description: '',
    date: '',
  },
  {
    id: 6,
    image: '/assets/visitas/galary16.jpg',
    title: '',
    description: '',
    date: '',
  },
  {
    id: 7,
    image: '/assets/visitas/galary9.jpg',
    title: '',
    description: '',
    date: '',
  },
  {
    id: 8,
    image: '/assets/visitas/galary20.jpeg',
    title: '',
    description: '',
    date: '',
  },
];

export default function TechnicalVisitsGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof visitasData[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (visita: typeof visitasData[0], index: number) => {
    setSelectedImage(visita);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? visitasData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(visitasData[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === visitasData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(visitasData[newIndex]);
  };

  return (
    <>
      <section className="relative px-4 py-24 bg-gradient-to-b from-dark via-navy/5 to-dark">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <Camera className="h-10 w-10 text-navy" />
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Galeria de Visitas Técnicas
              </h2>
            </div>
            <div className="mx-auto h-1 w-24 bg-navy"></div>
            <p className="mt-6 text-lg text-gray-300">
              Acompanhe nosso trabalho em campo
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visitasData.map((visita, index) => (
              <motion.div
                key={visita.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                onClick={() => openLightbox(visita, index)}
              >
                <img
                  src={visita.image}
                  alt={visita.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {visita.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-1">
                    {visita.description}
                  </p>
                  <p className="text-xs text-navy font-semibold">
                    {visita.date}
                  </p>
                </div>

                <div className="absolute top-3 right-3 bg-navy/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-5 w-5 text-white" />
                </div>

                <div className="absolute inset-0 border-2 border-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-navy/80 p-3 text-white transition-all hover:bg-navy hover:scale-110"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-navy/80 p-3 text-white transition-all hover:bg-navy hover:scale-110"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-navy/80 p-3 text-white transition-all hover:bg-navy hover:scale-110"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto rounded-lg border-4 border-navy shadow-2xl"
              />
              
              <div className="mt-4 rounded-lg bg-navy/90 backdrop-blur-sm p-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="mb-2 text-lg text-gray-200">
                  {selectedImage.description}
                </p>
                <p className="text-sm font-semibold text-blue-300">
                  {selectedImage.date}
                </p>
                <p className="mt-3 text-xs text-gray-400">
                  Foto {currentIndex + 1} de {visitasData.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
