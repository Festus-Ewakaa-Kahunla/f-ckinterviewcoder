'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Wrapper for spacing from edges */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        {/* Main Header with Glassmorphism and Rounded Corners */}
        <motion.header
          animate={{ 
            height: isScrolled ? '56px' : '72px',
            borderRadius: isScrolled ? '12px' : '16px',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="bg-black/80 backdrop-blur-xl border border-gray-800/50 w-full max-w-7xl mx-auto overflow-hidden"
        >
          <div className="h-full px-6 lg:px-8">
            <div className="flex items-center justify-between h-full">
              {/* Logo - Text disappears on scroll */}
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  {/* Yellow/Golden Icon - Always visible */}
                  <motion.div 
                    className="bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0"
                    animate={{ 
                      width: isScrolled ? '32px' : '40px',
                      height: isScrolled ? '32px' : '40px'
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <motion.svg 
                      className="text-black" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{
                        width: isScrolled ? '20px' : '24px',
                        height: isScrolled ? '20px' : '24px'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </motion.svg>
                  </motion.div>
                  
                  {/* Text - Disappears on scroll */}
                  <AnimatePresence>
                    {!isScrolled && (
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="text-white font-semibold text-lg whitespace-nowrap"
                      >
                        Interview Coder
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <motion.a 
                  href="#proof" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  animate={{ fontSize: isScrolled ? '13px' : '14px' }}
                  transition={{ duration: 0.3 }}
                >
                  Proof
                </motion.a>
                <motion.a 
                  href="#help" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  animate={{ fontSize: isScrolled ? '13px' : '14px' }}
                  transition={{ duration: 0.3 }}
                >
                  Help
                </motion.a>
                <motion.a 
                  href="#pricing" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  animate={{ fontSize: isScrolled ? '13px' : '14px' }}
                  transition={{ duration: 0.3 }}
                >
                  Pricing
                </motion.a>
                <motion.a 
                  href="#does-it-work" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center"
                  animate={{ fontSize: isScrolled ? '13px' : '14px' }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="mr-2">Does it work?</span>
                  <motion.span 
                    className="bg-yellow-400 text-black font-bold px-2 rounded"
                    animate={{ 
                      fontSize: isScrolled ? '10px' : '11px',
                      paddingTop: isScrolled ? '1px' : '2px',
                      paddingBottom: isScrolled ? '1px' : '2px'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    NEW
                  </motion.span>
                </motion.a>
              </nav>

              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <motion.button 
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  animate={{ fontSize: isScrolled ? '13px' : '14px' }}
                  transition={{ duration: 0.3 }}
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-semibold transition-all duration-200"
                  animate={{ 
                    fontSize: isScrolled ? '13px' : '14px',
                    paddingLeft: isScrolled ? '20px' : '24px',
                    paddingRight: isScrolled ? '20px' : '24px',
                    paddingTop: isScrolled ? '6px' : '8px',
                    paddingBottom: isScrolled ? '6px' : '8px'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Sign up
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 p-2"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={isScrolled ? 20 : 24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={isScrolled ? 20 : 24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu Dropdown with same rounded style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed left-4 right-4 z-40 md:hidden"
            style={{ top: isScrolled ? '76px' : '92px' }}
          >
            <div className="bg-black/80 backdrop-blur-xl border border-gray-800/50 rounded-xl max-w-7xl mx-auto overflow-hidden">
              <div className="px-6 py-4 space-y-3">
                <a 
                  href="#proof" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2 hover:bg-white/5 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Proof
                </a>
                <a 
                  href="#help" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2 hover:bg-white/5 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Help
                </a>
                <a 
                  href="#pricing" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2 hover:bg-white/5 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#does-it-work" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2 hover:bg-white/5 px-2 rounded flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">Does it work?</span>
                  <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">NEW</span>
                </a>
                <div className="pt-3 border-t border-gray-800/50 space-y-3">
                  <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2 hover:bg-white/5 px-2 rounded">
                    Login
                  </button>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div style={{ height: isScrolled ? '76px' : '92px' }} />
    </>
  );
}