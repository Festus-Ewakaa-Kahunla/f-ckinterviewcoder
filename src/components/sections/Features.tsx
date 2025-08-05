'use client';

import { motion } from 'framer-motion';
import { Eye, EyeOff, Shield, Zap, Target, Monitor, MousePointer, Lock } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const features: Feature[] = [
  {
    id: '1',
    icon: <EyeOff size={32} />,
    title: 'Invisible to screen-share',
    description: 'Complete stealth mode - InterviewCoder remains completely invisible during screen sharing, ensuring your privacy and confidence.',
    highlight: true
  },
  {
    id: '2',
    icon: <MousePointer size={32} />,
    title: 'Never steals Active Tab focus',
    description: 'Smart focus management ensures InterviewCoder never interrupts your workflow or draws attention during interviews.',
    highlight: true
  },
  {
    id: '3',
    icon: <Eye size={32} />,
    title: 'Movable Screen (Follows your eyes)',
    description: 'Intelligent positioning system that adapts to your eye movement and screen setup for optimal assistance.',
    highlight: true
  },
  {
    id: '4',
    icon: <Shield size={32} />,
    title: 'Unpatchable Security',
    description: 'Built with advanced security measures that make detection virtually impossible, giving you peace of mind.',
  },
  {
    id: '5',
    icon: <Zap size={32} />,
    title: 'Real-time Solutions',
    description: 'Instant code solutions and debugging assistance powered by the most advanced AI models available.',
  },
  {
    id: '6',
    icon: <Target size={32} />,
    title: 'Interview Optimized',
    description: 'Specifically designed for technical interviews with features tailored for coding challenges and problem-solving.',
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              See how we guarantee
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                undetectability
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Interview Coder is designed for complete stealth. You can't even click on Interview Coder in an interview, 
              it will never steal focus, and it's completely invisible to screenshare. Interview Coder is unpatchable.
            </p>
          </div>
        </FadeIn>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FadeIn key={feature.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-8 text-center transition-all duration-300 ${
                  feature.highlight 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' 
                    : 'border-gray-800 hover:border-purple-500/30'
                }`}
              >
                {/* Highlight Badge */}
                {feature.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      CORE FEATURE
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center ${
                  feature.highlight 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                    : 'bg-gray-800 text-purple-400'
                }`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Section */}
        <FadeIn delay={0.8}>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25 mb-4"
            >
              Read More
            </motion.button>
            <p className="text-gray-500 text-sm">
              Learn more about our advanced stealth technology
            </p>
          </div>
        </FadeIn>

        {/* Security Guarantee */}
        <FadeIn delay={1.0}>
          <div className="mt-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Lock size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              100% Undetectable Guarantee
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Our advanced stealth technology has been tested across all major interview platforms. 
              InterviewCoder operates completely under the radar, giving you the confidence to ace your interviews.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">0%</div>
                <div className="text-gray-400 text-sm">Detection Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm">Stealth Success</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Reliability</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}