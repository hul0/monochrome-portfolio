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
  const [isMobile, setIsMobile] = useState(false);
  const [responsiveWidth, setResponsiveWidth] = useState(imageWidth);
  const [responsiveHeight, setResponsiveHeight] = useState(imageHeight);
  const [responsiveGap, setResponsiveGap] = useState(gap);
  const [currentScrollSpeed, setCurrentScrollSpeed] = useState(autoScrollSpeed);
  
  // Use ref instead of state for scroll position to avoid re-renders
  const scrollPositionRef = useRef(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const totalWidthRef = useRef(0);

  // Handle responsive sizing and speed based on viewport
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileView = width < 640;
      setIsMobile(isMobileView);
      
      // Mobile (< 640px): 30% smaller images and 2x speed
      if (isMobileView) {
        const mobileWidth = Math.min((width - 32) * 0.7, 245);
        const mobileHeight = mobileWidth;
        setResponsiveWidth(mobileWidth);
        setResponsiveHeight(mobileHeight);
        setResponsiveGap(12);
        setCurrentScrollSpeed(autoScrollSpeed * 0.5);
      } 
      // Tablet (640px - 768px)
      else if (width < 768) {
        setResponsiveWidth(Math.min(width * 0.7, 450));
        setResponsiveHeight(Math.min(width * 0.7, 450));
        setResponsiveGap(16);
        setCurrentScrollSpeed(autoScrollSpeed * 0.5);
      }
      // Desktop (>= 768px)
      else {
        setResponsiveWidth(imageWidth);
        setResponsiveHeight(imageHeight);
        setResponsiveGap(gap);
        setCurrentScrollSpeed(autoScrollSpeed);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageWidth, imageHeight, gap, autoScrollSpeed]);

  // Calculate total width
  useEffect(() => {
    totalWidthRef.current = (responsiveWidth + responsiveGap) * images.length;
  }, [responsiveWidth, responsiveGap, images.length]);

  // Update current index periodically (not every frame)
  useEffect(() => {
    const updateIndex = () => {
      const index = Math.floor(Math.abs(scrollPositionRef.current) / (responsiveWidth + responsiveGap)) % images.length;
      setCurrentIndex(index);
    };

    const interval = setInterval(updateIndex, 200); // Update every 200ms instead of every frame
    return () => clearInterval(interval);
  }, [responsiveWidth, responsiveGap, images.length]);

  // High-performance animation loop using GPU-accelerated transforms
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current.querySelector('.scroll-container') as HTMLElement;
    if (!scrollContainer) return;

    const animate = () => {
      if (!isHovered) {
        const direction = autoScrollDirection === 'right' ? 1 : -1;
        scrollPositionRef.current += (direction * currentScrollSpeed) / 60;

        // Loop the scroll
        if (autoScrollDirection === 'right' && scrollPositionRef.current >= totalWidthRef.current) {
          scrollPositionRef.current = 0;
        }
        if (autoScrollDirection === 'left' && scrollPositionRef.current <= -totalWidthRef.current) {
          scrollPositionRef.current = 0;
        }

        // Use GPU-accelerated transform - no React re-render
        scrollContainer.style.transform = `translate3d(-${scrollPositionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, currentScrollSpeed, autoScrollDirection]);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollPositionRef.current = newIndex * (responsiveWidth + responsiveGap);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    scrollPositionRef.current = newIndex * (responsiveWidth + responsiveGap);
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
        className="relative py-4 md:py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        role="region"
        aria-label="Image gallery"
      >
        {/* GPU-accelerated scroll container */}
        <div
          className="scroll-container flex"
          style={{
            gap: `${responsiveGap}px`,
            willChange: 'transform', // GPU acceleration hint
            transform: 'translate3d(0, 0, 0)', // Force GPU layer
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
                  width: `${responsiveWidth}px`,
                }}
              >
                {/* Image Container */}
                <div className="relative" style={{ height: `${responsiveHeight}px` }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    title={image.title || image.alt}
                    width={image.width || responsiveWidth}
                    height={image.height || responsiveHeight}
                    quality={isMobile ? 75 : quality} // Lower quality on mobile for performance
                    priority={priority && idx < 3}
                    className="object-cover w-full h-full border border-white md:border-2"
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                </div>

                {/* Visible Caption Below Image */}
                {(image.caption || image.description) && (
                  <figcaption className="mt-2 md:mt-3 px-1 md:px-2 text-white/80 text-xs sm:text-sm md:text-base text-center leading-relaxed">
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
              className={`absolute left-0.5 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 text-black p-1.5 sm:p-3 md:p-4 hover:bg-white active:bg-gray-300 transition-colors z-10 rounded-md shadow-lg touch-manipulation ${buttonClassName}`}
              aria-label="Previous image"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className={`absolute right-0.5 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 text-black p-1.5 sm:p-3 md:p-4 hover:bg-white active:bg-gray-300 transition-colors z-10 rounded-md shadow-lg touch-manipulation ${buttonClassName}`}
              aria-label="Next image"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Position Indicator */}
      <div className="flex justify-center gap-1.5 md:gap-2 pb-3 md:pb-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              scrollPositionRef.current = idx * (responsiveWidth + responsiveGap);
            }}
            className={`h-1.5 md:h-2 transition-all rounded-full ${
              idx === currentIndex ? 'bg-white w-6 md:w-8' : 'bg-white/50 w-1.5 md:w-2'
            }`}
            aria-label={`Go to image ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}