import Image from 'next/image';
import React from 'react';

interface QuoteProps {
  quote: string;
  author?: string;
  authorRole?: string;
  source?: string;
  citation?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'top' | 'bottom' | 'background';
  imageWidth?: number;
  imageHeight?: number;
  imagePriority?: boolean;
  variant?: 'default' | 'bordered' | 'minimal' | 'card' | 'highlight';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  quoteColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  showQuoteIcon?: boolean;
  quoteIconColor?: string;
  schemaType?: 'Quotation' | 'Review' | 'Comment';
  datePublished?: string;
  url?: string;
  className?: string;
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
  quoteColor = 'text-white',
  backgroundColor = 'bg-transparent',
  borderColor = 'border-white/10',
  textAlign = 'left',
  showQuoteIcon = true,
  quoteIconColor = 'text-primary/50',
  schemaType = 'Quotation',
  datePublished,
  url,
  className = '',
}) => {
  
  // Simplified for the requested style override
  return (
    <figure className={`glass-card p-8 rounded-3xl ${className}`}>
      <blockquote className="text-xl font-medium text-white font-mono mb-4">
        "{quote}"
      </blockquote>
      {(author || authorRole) && (
        <figcaption className="flex items-center gap-4 mt-6">
          {image && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/30">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <div className="text-primary font-bold text-sm uppercase tracking-wider">{author}</div>
            {authorRole && <div className="text-white/50 text-xs">{authorRole}</div>}
          </div>
        </figcaption>
      )}
    </figure>
  );
};

export default QuoteComponent;