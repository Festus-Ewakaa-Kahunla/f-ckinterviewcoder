'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, Mail, ExternalLink } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Is Interview Coder Free?',
    answer: 'Yes, you can try it for free. You won\'t get access to the latest models and you won\'t be able to see the entire solution on the free version, though.'
  },
  {
    id: '2',
    question: 'How Interview Coder is undetectable?',
    answer: 'Interview Coder uses advanced stealth technology that makes it completely invisible to screen sharing software. It never steals focus from your active applications and operates in a way that\'s impossible for interview platforms to detect. Our proprietary technology has been tested across all major interview platforms with a 100% success rate.'
  },
  {
    id: '3',
    question: 'What programming languages are supported?',
    answer: 'Interview Coder supports all major programming languages including Python, JavaScript, Java, C++, C#, Go, Rust, TypeScript, Swift, Kotlin, and many more. Our AI models are trained on a comprehensive dataset covering virtually every programming language used in technical interviews.'
  },
  {
    id: '4',
    question: 'I\'m experiencing a bug, what should I do?',
    answer: 'If you encounter any issues, please reach out to our 24/7 customer support team at abdulla@interviewcoder.com. We typically respond within minutes and will work with you to resolve any problems quickly. You can also visit our help center for common troubleshooting steps.'
  },
  {
    id: '5',
    question: 'Does the app work with current Zoom versions?',
    answer: 'Yes, Interview Coder is fully compatible with all current versions of Zoom, Microsoft Teams, Google Meet, and other popular video conferencing platforms. We continuously update our software to ensure compatibility with the latest versions of all major interview platforms.'
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <section id="faq" className="bg-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Got Questions?
            </h2>
            <p className="text-xl text-gray-400">
              We've Got Answers
            </p>
          </div>
        </FadeIn>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <motion.div
                initial={false}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/30 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen(item.id) ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {isOpen(item.id) ? (
                      <Minus size={20} className="text-purple-400" />
                    ) : (
                      <Plus size={20} className="text-gray-400" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-800 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Contact Section */}
        <FadeIn delay={0.8}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Couldn't find your answer?
              </h3>
              <p className="text-gray-300 mb-6">
                Our support team is here to help you 24/7
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="mailto:abdulla@interviewcoder.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  <Mail size={18} />
                  <span>Send us an email</span>
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-700 transition-all duration-200 border border-gray-700"
                >
                  <ExternalLink size={18} />
                  <span>Visit help center</span>
                </motion.a>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-400 text-sm">
                  Email: <span className="text-purple-400">abdulla@interviewcoder.com</span>
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Average response time: Under 5 minutes
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Quick Stats */}
        <FadeIn delay={1.0}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">&lt;5min</div>
              <div className="text-gray-400 text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}