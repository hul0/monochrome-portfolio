// ImageGallery.tsx
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
  autoScrollSpeed?: number; // pixels per second
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
  imageWidth = 400,
  imageHeight = 300,
  gap = 24,
  priority = false,
  quality = 90,
}: ImageGalleryProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(1);

  // Calculate total width of all images (including caption space)
  const totalWidth = (imageWidth + gap) * images.length;

  useEffect(() => {
    if (isHovered) return;

    const animate = () => {
      setScrollPosition((prev) => {
        const direction = autoScrollDirection === 'right' ? 1 : -1;
        const newPos = prev + (direction * autoScrollSpeed) / 60;

        // Loop the scroll
        if (autoScrollDirection === 'right' && newPos >= totalWidth) {
          return 0;
        }
        if (autoScrollDirection === 'left' && newPos <= -totalWidth) {
          return 0;
        }

        return newPos;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, autoScrollSpeed, autoScrollDirection, totalWidth]);

  // Update current index based on scroll position
  useEffect(() => {
    const index = Math.floor(Math.abs(scrollPosition) / (imageWidth + gap)) % images.length;
    setCurrentIndex(index);
  }, [scrollPosition, imageWidth, gap, images.length]);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setScrollPosition(newIndex * (imageWidth + gap));
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setScrollPosition(newIndex * (imageWidth + gap));
  };

  return (
    <div className={`relative w-full overflow-hidden bg-black ${containerClassName}`}>
      {/* SEO-friendly structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'Image Gallery',
            numberOfItems: images.length,
            image: images.map((img) => ({
              '@type': 'ImageObject',
              contentUrl: img.src,
              name: img.alt,
              description: img.title || img.alt,
              caption: img.caption || img.description,
            })),
          }),
        }}
      />

      {/* Main Gallery Container */}
      <div
        ref={scrollContainerRef}
        className="relative py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
        aria-label="Image gallery"
      >
        <div
          className="flex transition-transform duration-100 ease-linear"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            gap: `${gap}px`,
          }}
        >
          {/* Render images 3 times for seamless loop */}
          {[...images, ...images, ...images].map((image, idx) => {
            const originalIndex = idx % images.length;
            return (
              <div
                key={`${originalIndex}-${idx}`}
                className={`flex-shrink-0 ${imageClassName}`}
                style={{
                  width: `${imageWidth}px`,
                }}
              >
                {/* Image Container */}
                <div className="relative" style={{ height: `${imageHeight}px` }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    title={image.title || image.alt}
                    width={image.width || imageWidth}
                    height={image.height || imageHeight}
                    quality={quality}
                    priority={priority && idx < 3}
                    className="object-cover w-full h-full border-2 border-white"
                    loading={idx < 3 ? 'eager' : 'lazy'}
                  />
                </div>

                {/* Visible Caption Below Image */}
                {(image.caption || image.description) && (
                  <figcaption className="mt-3 px-2 text-white/80 text-sm md:text-base text-center leading-relaxed">
                    {image.caption || image.description}
                  </figcaption>
                )}

                {/* Screen Reader Only Accessibility Text */}
                <span className="sr-only">{image.alt}</span>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        {showControls && (
          <>
            <button
              onClick={handlePrev}
              className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-4 hover:bg-gray-200 transition-colors z-10 ${buttonClassName}`}
              aria-label="Previous image"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-4 hover:bg-gray-200 transition-colors z-10 ${buttonClassName}`}
              aria-label="Next image"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Position Indicator */}
      <div className="flex justify-center gap-2 pb-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              setScrollPosition(idx * (imageWidth + gap));
            }}
            className={`w-2 h-2 transition-all ${
              idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
