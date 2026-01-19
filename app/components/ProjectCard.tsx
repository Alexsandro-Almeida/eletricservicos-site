'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
  onClick: () => void;
}

export default function ProjectCard({ title, thumbnail, videoUrl, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !videoError) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && !videoError) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="relative h-[500px] w-full cursor-pointer overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        transform: isHovered ? 'skewY(0deg) scale(1.05)' : 'skewY(-2deg)',
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-navy/80 transition-opacity duration-300" 
           style={{ opacity: isHovered ? 0 : 1 }} />
      
      <img
        src={thumbnail}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
        style={{ opacity: isHovered && !videoError ? 0 : 1 }}
      />
      
      {!videoError && (
        <video
          ref={videoRef}
          src={videoUrl}
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          style={{ opacity: isHovered ? 1 : 0 }}
          onError={() => setVideoError(true)}
        />
      )}
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark via-dark/80 to-transparent p-8">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <motion.div
        className="absolute inset-0 border-3 border-navy"
        animate={{
          opacity: isHovered ? 1 : 0.5,
        }}
      />
    </motion.div>
  );
}
