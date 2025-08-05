'use client';

import { motion } from 'framer-motion';
import { Download, Play, Star, Users, Trophy } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Badge */}
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-sm text-gray-300">Used by over 27,000 developers</span>
              <span className="text-yellow-400">🧡</span>
            </motion.div>
          </FadeIn>

          {/* Main Headline */}
          <FadeIn delay={0.4}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg inline-block transform -rotate-1">No.1</span> Undetectable AI
              <br />
              for <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Leetcode Interviews
              </span>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={0.6}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              InterviewCoder is your AI-powered shortcut to acing coding interviews <br className="hidden sm:block" />
              <span className="text-gray-400">(without grinding 500 Leetcode problems).</span>
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 transition-all duration-200 shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                </svg>
                <span>Download for Windows</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 transition-all duration-200 shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Download for Mac</span>
              </motion.button>
            </div>
          </FadeIn>

          {/* Social Proof */}
          <FadeIn delay={1.0}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm">5.0 rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span className="text-sm">10,000+ developers</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Trophy size={16} className="text-yellow-400" />
                <span className="text-sm">FAANG offers secured</span>
              </div>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <FadeIn delay={1.2}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2" />
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Feature Highlights */}
        <FadeIn delay={1.4}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🔒</span>
              </div>
              <h3 className="text-white font-semibold mb-2">100% Undetectable</h3>
              <p className="text-gray-400 text-sm">Invisible to screen-share, never steals focus, completely stealth</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Real-time Help</h3>
              <p className="text-gray-400 text-sm">Instant solutions and debugging for any coding question</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🎯</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Interview Ready</h3>
              <p className="text-gray-400 text-sm">Designed specifically for technical interview success</p>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}