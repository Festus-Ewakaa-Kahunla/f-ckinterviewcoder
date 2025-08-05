'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Testimonial = {
  id: string;
  src?: string;
  altText: string;
  quote: string;
  name: string;
  title: string;
  isVideo?: boolean;
  platform?: string;
};

type TestimonialsProps = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
};

// InterviewCoder testimonials
const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    src: '/images/testimonials/1',
    altText: 'Anonymous User',
    quote: 'Got Meta and Google offers even though I failed all my CS classes!',
    name: 'Anonymous User',
    title: 'Meta, Google',
  },
  {
    id: '2',
    src: '/images/testimonials/2',
    altText: 'Jason Levin',
    quote: 'Fuck Leetcode with InterviewCoder! Game-changer',
    name: 'Jason Levin',
    title: 'Tech Influencer',
    isVideo: true,
    platform: 'X'
  },
  {
    id: '3',
    src: '/images/testimonials/3',
    altText: 'Anonymous User',
    quote: 'InterviewCoder helped me secure the Cisco offer!! Crazy transformation',
    name: 'Anonymous User',
    title: 'Cisco',
  },
  {
    id: '4',
    src: '/images/testimonials/4',
    altText: 'Roy Lee',
    quote: 'InterviewCoder made the difference in my coding interview! Amazing platform!',
    name: 'Roy Lee',
    title: 'Amazon',
  },
  {
    id: '5',
    src: '/images/testimonials/5',
    altText: 'Shivam Tiwari',
    quote: 'you guys really changed the whole interview system',
    name: 'Shivam Tiwari',
    title: 'Software Engineer',
    platform: 'Discord'
  },
  {
    id: '6',
    src: '/images/testimonials/6',
    altText: 'Anonymous User',
    quote: 'From failing interviews to TikTok offer! InterviewCoder changed everything.',
    name: 'Anonymous User',
    title: 'TikTok Engineer',
  },
  {
    id: '7',
    src: '/images/testimonials/7',
    altText: 'Tech Professional',
    quote: 'InterviewCoder\'s approach to coding interviews is revolutionary.',
    name: 'Tech Professional',
    title: 'Senior Developer',
  },
  {
    id: '8',
    src: '/images/testimonials/8',
    altText: 'Software Engineer',
    quote: 'The platform that finally made coding interviews make sense.',
    name: 'Software Engineer',
    title: 'FAANG Company',
  },
  {
    id: '9',
    src: '/images/testimonials/9',
    altText: 'Anonymous Developer',
    quote: 'InterviewCoder turned my interview anxiety into confidence.',
    name: 'Anonymous Developer',
    title: 'Big Tech',
  },
];

const TestimonialItem = ({ testimonial }: { testimonial: Testimonial }) => {
  const initial = testimonial.name.charAt(0).toUpperCase();
  
  return (
    <div className="mb-4 w-full max-w-md">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300">
        {/* Header with Profile */}
        <div className="flex items-start gap-4 mb-4">
          {/* Profile Image */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
            initial === 'J' ? 'bg-yellow-500 text-black' : 
            initial === 'R' ? 'bg-green-600 text-white' :
            initial === 'S' ? 'bg-blue-600 text-white' :
            'bg-gray-700 text-white'
          }`}>
            {initial}
          </div>
          
          {/* Name, Title and Stars */}
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
              {/* 5 Star Rating */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <p className="text-white text-base leading-relaxed mb-4">
          {testimonial.quote}
        </p>
        
        {/* Media section with testimonial images */}
        {testimonial.src && (
          <div className="bg-gray-800/50 rounded-xl overflow-hidden relative">
            {testimonial.isVideo ? (
              <>
                <Image
                  src={testimonial.src}
                  alt={testimonial.altText}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                  1:35
                </div>
              </>
            ) : (
              <Image
                src={testimonial.src}
                alt={testimonial.altText}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
            )}
          </div>
        )}
        
        {/* Platform indicator */}
        {testimonial.platform && (
          <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
            <span>via {testimonial.platform}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Testimonials({
  title = "Trusted by 27,000+ developers",
  subtitle = "landing internship to staff level offers at FAANG, Big Tech, Quant, and more.",
  testimonials = defaultTestimonials
}: Partial<TestimonialsProps>) {
  // Split into 3 columns
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = testimonials.slice(6, 9);

  // Create loops for infinite scrolling
  const loop1 = [...column1, ...column1, ...column1, ...column1];
  const loop2 = [...column2, ...column2, ...column2, ...column2];
  const loop3 = [...column3, ...column3, ...column3, ...column3];
  const mobileLoop = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gray-400">Trusted by </span>
            <span className="text-white">27,000+ developers</span>
            <span className="text-gray-400">,</span>
            <br />
            <span className="text-gray-400">landing internship to staff level</span>
            <br />
            <span className="text-gray-400">offers at </span>
            <span className="text-white">FAANG, Big Tech, Quant</span>
            <span className="text-gray-400">,</span>
            <br />
            <span className="text-gray-400">and more.</span>
          </h2>
        </div>
        
        {/* Desktop: 3 columns with different scroll directions */}
        <div className="hidden lg:flex gap-6 h-[600px] relative">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
          
          {/* Column 1 - Scrolls Down */}
          <div className="flex-1 relative overflow-hidden">
            <div className="animate-scroll-down">
              {loop1.map((testimonial, index) => (
                <TestimonialItem key={`col1-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Column 2 - Scrolls Up */}
          <div className="flex-1 relative overflow-hidden">
            <div className="animate-scroll-up">
              {loop2.map((testimonial, index) => (
                <TestimonialItem key={`col2-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Column 3 - Scrolls Down */}
          <div className="flex-1 relative overflow-hidden">
            <div className="animate-scroll-down-slow">
              {loop3.map((testimonial, index) => (
                <TestimonialItem key={`col3-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
          
        {/* Mobile: single column */}
        <div className="lg:hidden relative h-[500px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          <div className="animate-scroll-mobile">
            {mobileLoop.map((testimonial, index) => (
              <TestimonialItem key={`mobile-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-25%);
          }
        }
        
        @keyframes scrollUp {
          0% {
            transform: translateY(-25%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        @keyframes scrollMobile {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.33%);
          }
        }
        
        .animate-scroll-down {
          animation: scrollDown 30s linear infinite;
        }
        
        .animate-scroll-up {
          animation: scrollUp 35s linear infinite;
        }
        
        .animate-scroll-down-slow {
          animation: scrollDown 40s linear infinite;
        }
        
        .animate-scroll-mobile {
          animation: scrollMobile 40s linear infinite;
        }
      `}</style>
    </section>
  );
}