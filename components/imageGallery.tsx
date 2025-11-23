'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export interface ImageDatas {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  description?: string;
  width?: number;
  height?: number;
}

export interface ImageGalleryProps {
  images: ImageDatas[];
  autoScrollSpeed?: number;
  autoScrollDirection?: 'left' | 'right';
  showControls?: boolean;
  imageClassName?: string;
  containerClassName?: string;
  buttonClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
  gap?: number;
  priority?: boolean;
  quality?: number;
}

export default function ImageGallery({
  images,
  autoScrollSpeed = 30,
  autoScrollDirection = 'right',
  showControls = true,
  imageClassName = '',
  containerClassName = '',
  buttonClassName = '',
  imageWidth = 300,
  imageHeight = 300,
  gap = 24,
  priority = false,
  quality = 90,
}: ImageGalleryProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scrollPositionRef = useRef(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const totalWidthRef = useRef(0);

  const [responsiveWidth, setResponsiveWidth] = useState(imageWidth);
  const [responsiveGap, setResponsiveGap] = useState(gap);

  useEffect(() => {
      totalWidthRef.current = (responsiveWidth + responsiveGap) * images.length;
  }, [responsiveWidth, responsiveGap, images.length]);


  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const scrollContainer = scrollContainerRef.current.querySelector('.scroll-container') as HTMLElement;
    if (!scrollContainer) return;

    const animate = () => {
      if (!isHovered) {
        const direction = autoScrollDirection === 'right' ? 1 : -1;
        scrollPositionRef.current += (direction * autoScrollSpeed) / 60;

        if (autoScrollDirection === 'right' && scrollPositionRef.current >= totalWidthRef.current) {
          scrollPositionRef.current = 0;
        }
        if (autoScrollDirection === 'left' && scrollPositionRef.current <= -totalWidthRef.current) {
          scrollPositionRef.current = 0;
        }
        scrollContainer.style.transform = `translate3d(-${scrollPositionRef.current}px, 0, 0)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered, autoScrollSpeed, autoScrollDirection]);


  return (
    <div className={`relative w-full overflow-hidden bg-transparent ${containerClassName}`}>
      <div
        ref={scrollContainerRef}
        className="relative py-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="scroll-container flex"
          style={{
            gap: `${gap}px`,
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        >
          {[...images, ...images, ...images].map((image, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 group relative ${imageClassName}`}
                style={{ width: `${imageWidth}px` }}
              >
                {/* Glassmorphic Image Container with Fixed Purple Glow */}
                <div 
                  className="relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-[#181818] shadow-[0_0_20px_rgba(168,85,247,0.25)] group-hover:border-primary group-hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-all duration-500 transform group-hover:-translate-y-2" 
                  style={{ height: `${imageHeight}px` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width || imageWidth}
                    height={image.height || imageHeight}
                    className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Luxurious Purple Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Scan line effect for extra cyber feel */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 pointer-events-none" />
                </div>
                
                {(image.caption) && (
                  <figcaption className="mt-4 text-primary/80 text-xs font-mono text-center uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity duration-300 text-glow">
                    {image.caption}
                  </figcaption>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}