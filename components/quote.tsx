import Image from 'next/image';
import React from 'react';

interface QuoteProps {
  // Content
  quote: string;
  author?: string;
  authorRole?: string;
  source?: string;
  citation?: string;
  
  // Image options
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'top' | 'bottom' | 'background';
  imageWidth?: number;
  imageHeight?: number;
  imagePriority?: boolean;
  
  // Styling options
  variant?: 'default' | 'bordered' | 'minimal' | 'card' | 'highlight';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  quoteColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  
  // Icon options
  showQuoteIcon?: boolean;
  quoteIconColor?: string;
  
  // SEO options
  schemaType?: 'Quotation' | 'Review' | 'Comment';
  datePublished?: string;
  url?: string;
  
  // Additional customization
  className?: string;
  quoteClassName?: string;
  authorClassName?: string;
  containerClassName?: string;
}

const QuoteComponent: React.FC<QuoteProps> = ({
  quote,
  author,
  authorRole,
  source,
  citation,
  image,
  imageAlt = author || 'Quote image',
  imagePosition = 'left',
  imageWidth = 80,
  imageHeight = 80,
  imagePriority = false,
  variant = 'default',
  size = 'md',
  quoteColor = 'text-gray-900',
  backgroundColor = 'bg-transparent',
  borderColor = 'border-gray-300',
  textAlign = 'left',
  showQuoteIcon = true,
  quoteIconColor = 'text-gray-400',
  schemaType = 'Quotation',
  datePublished,
  url,
  className = '',
  quoteClassName = '',
  authorClassName = '',
  containerClassName = '',
}) => {
  // Size configurations
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const quoteSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  // Variant configurations
  const variantClasses = {
    default: `${backgroundColor} p-6 rounded-lg`,
    bordered: `${backgroundColor} p-6 border-l-4 ${borderColor}`,
    minimal: `${backgroundColor} p-4`,
    card: `${backgroundColor} p-6 rounded-xl shadow-lg border ${borderColor}`,
    highlight: `bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border ${borderColor}`,
  };

  // Text alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Schema.org structured data for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    text: quote,
    ...(author && { author: { '@type': 'Person', name: author } }),
    ...(datePublished && { datePublished }),
    ...(url && { url }),
    ...(citation && { citation }),
    ...(source && { isBasedOn: source }),
  };

  // Render image component
  const renderImage = () => {
    if (!image) return null;

    return (
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          priority={imagePriority}
          className="rounded-full object-cover"
          itemProp="image"
        />
      </div>
    );
  };

  // Render quote icon
  const renderQuoteIcon = () => {
    if (!showQuoteIcon) return null;

    return (
      <svg
        className={`w-8 h-8 ${quoteIconColor} mb-4 ${
          textAlign === 'center' ? 'mx-auto' : textAlign === 'right' ? 'ml-auto' : ''
        }`}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    );
  };

  // Layout based on image position
  const getLayout = () => {
    const content = (
      <div className={`flex-1 ${containerClassName}`}>
        {imagePosition !== 'top' && imagePosition !== 'background' && renderQuoteIcon()}
        
        <blockquote
          className={`${quoteSizes[size]} font-semibold ${quoteColor} ${quoteClassName}`}
          itemProp="text"
        >
          {quote}
        </blockquote>

        {(author || authorRole || source) && (
          <footer className={`mt-4 ${sizeClasses[size]} ${authorClassName}`}>
            {author && (
              <cite className="font-medium text-yellow-400 not-italic" itemProp="author">
                {author}
              </cite>
            )}
            {authorRole && (
              <span className="text-blue-400"> · {authorRole}</span>
            )}
            {source && (
              <div className="text-gray-500 mt-1" itemProp="publisher">
                {source}
              </div>
            )}
          </footer>
        )}
      </div>
    );

    if (imagePosition === 'background' && image) {
      return (
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover opacity-20"
            itemProp="image"
          />
          <div className="relative z-10">{content}</div>
        </div>
      );
    }

    if (imagePosition === 'top' && image) {
      return (
        <div className="space-y-4">
          <div className="flex justify-center">{renderImage()}</div>
          {renderQuoteIcon()}
          {content}
        </div>
      );
    }

    if (imagePosition === 'bottom' && image) {
      return (
        <div className="space-y-4">
          {content}
          <div className="flex justify-center">{renderImage()}</div>
        </div>
      );
    }

    if (imagePosition === 'right' && image) {
      return (
        <div className="flex gap-6 items-start">
          {content}
          {renderImage()}
        </div>
      );
    }

    // Default: left position
    if (image) {
      return (
        <div className="flex gap-6 items-start">
          {renderImage()}
          {content}
        </div>
      );
    }

    return content;
  };

  return (
    <figure
      className={`${variantClasses[variant]} ${alignClasses[textAlign]} ${className}`}
      itemScope
      itemType={`https://schema.org/${schemaType}`}
    >
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {getLayout()}
      
      {citation && (
        <cite className="block mt-2 text-sm text-gray-500 not-italic">
          {citation}
        </cite>
      )}
    </figure>
  );
};

export default QuoteComponent;

// ============= USAGE EXAMPLES =============

// Example 1: Basic Quote
// <QuoteComponent
//   quote="The only way to do great work is to love what you do."
//   author="Steve Jobs"
// />

// Example 2: Quote with Image
// <QuoteComponent
//   quote="Design is not just what it looks like and feels like. Design is how it works."
//   author="Steve Jobs"
//   authorRole="Co-founder of Apple"
//   image="/path/to/image.jpg"
//   imageAlt="Steve Jobs"
//   variant="card"
//   size="lg"
// />

// Example 3: Bordered Style with Right Image
// <QuoteComponent
//   quote="Innovation distinguishes between a leader and a follower."
//   author="Steve Jobs"
//   source="Apple Inc."
//   image="/path/to/image.jpg"
//   imagePosition="right"
//   variant="bordered"
//   borderColor="border-blue-500"
//   showQuoteIcon={true}
// />

// Example 4: Background Image Style
// <QuoteComponent
//   quote="Your time is limited, don't waste it living someone else's life."
//   author="Steve Jobs"
//   image="/path/to/background.jpg"
//   imagePosition="background"
//   variant="highlight"
//   textAlign="center"
//   size="xl"
//   quoteColor="text-white"
// />

// Example 5: Review Quote with Full SEO
// <QuoteComponent
//   quote="This product changed my life! Highly recommended."
//   author="John Doe"
//   authorRole="Verified Customer"
//   source="ProductReviews.com"
//   image="/path/to/reviewer.jpg"
//   schemaType="Review"
//   datePublished="2024-11-08"
//   url="https://example.com/review/123"
//   citation="Review posted on November 8, 2024"
//   variant="card"
// />

// Example 6: Minimal Style, Center Aligned
// <QuoteComponent
//   quote="Less is more."
//   author="Ludwig Mies van der Rohe"
//   variant="minimal"
//   textAlign="center"
//   showQuoteIcon={false}
//   size="sm"
// />

// Example 7: Custom Colors
// <QuoteComponent
//   quote="Color is a power which directly influences the soul."
//   author="Wassily Kandinsky"
//   authorRole="Artist"
//   image="/path/to/artist.jpg"
//   variant="bordered"
//   borderColor="border-purple-500"
//   quoteColor="text-purple-900"
//   backgroundColor="bg-purple-50"
//   quoteIconColor="text-purple-400"
// />