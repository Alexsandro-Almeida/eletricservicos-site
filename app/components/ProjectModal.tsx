'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    videoUrl: string;
    pdfUrl: string;
    description: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative h-[90vh] w-full max-w-7xl overflow-hidden rounded-lg border-2 border-navy bg-dark"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-navy/80 p-2 text-white transition-colors hover:bg-navy"
            >
              <X size={24} />
            </button>

            <div className="flex h-full flex-col gap-4 p-6 lg:flex-row">
              <div className="flex-1">
                <h2 className="mb-4 text-3xl font-bold text-white">{project.title}</h2>
                <video
                  src={project.videoUrl}
                  className="h-[50vh] w-full rounded-lg border border-navy object-cover lg:h-[calc(90vh-200px)]"
                  controls
                  autoPlay
                  loop
                />
                <div className="mt-4 rounded-lg border border-navy bg-navy/20 p-4">
                  <p className="text-sm leading-relaxed text-gray-300">{project.description}</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-navy bg-navy/30 px-4 py-2 text-xs font-semibold text-white">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    Conformidade NBR
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[450px]">
                <h3 className="mb-2 text-lg font-semibold text-white">Planta Elétrica</h3>
                <iframe
                  src={project.pdfUrl}
                  className="h-[40vh] w-full rounded-lg border border-navy lg:h-[calc(90vh-80px)]"
                  title="PDF Viewer"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
