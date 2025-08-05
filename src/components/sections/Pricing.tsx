'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaStyle?: 'primary' | 'secondary';
  showSecureCheckout?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Plan',
    price: 0,
    period: 'Month',
    description: 'Try it for Free',
    features: [
      'Evaluate Feature',
      'Secure streaming',
      'P2P support'
    ],
    cta: 'Get started',
    ctaStyle: 'secondary',
    showSecureCheckout: false
  },
  {
    id: 'pro-annual',
    name: 'Pro Plan',
    price: 25,
    period: 'Month',
    description: 'Unlock all pro features',
    features: [
      'Unlimited yearly usage',
      'Solving and debugging',
      'Most powerful agent models',
      '24/7 customer support'
    ],
    cta: 'Subscribe',
    ctaStyle: 'primary',
    popular: true,
    showSecureCheckout: true
  },
  {
    id: 'pro-monthly',
    name: 'Pro Plan',
    price: 60,
    period: 'Month',
    description: 'Unlock all pro features',
    features: [
      'Unlimited yearly usage',
      'Solving and debugging',
      'Most powerful agent models',
      '24/7 customer support'
    ],
    cta: 'Subscribe',
    ctaStyle: 'secondary',
    showSecureCheckout: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Pricing
            </h2>
            <p className="text-lg text-gray-400">
              Simple and transparent pricing for everyone
            </p>
          </div>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative h-full"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                      Best Deal
                    </div>
                  </div>
                )}

                {/* Card Container */}
                <div className={`relative h-full rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-yellow-400 pt-12' 
                    : 'bg-gray-900'
                }`}>
                  {/* Inner Card */}
                  <div className={`h-full rounded-2xl p-8 flex flex-col ${
                    plan.popular 
                      ? 'bg-gray-900/95' 
                      : ''
                  }`}>
                    {/* Plan Icon and Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        plan.popular ? 'bg-yellow-400' : 'bg-gray-800'
                      }`}>
                        <svg 
                          className={`w-6 h-6 ${plan.popular ? 'text-black' : 'text-gray-400'}`}
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      {plan.id === 'pro-annual' && (
                        <span className="text-xs text-gray-400">Billed annually</span>
                      )}
                      {plan.id === 'pro-monthly' && (
                        <span className="text-xs text-gray-400">Billed monthly</span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-full font-semibold text-base transition-all duration-200 ${
                        plan.ctaStyle === 'primary'
                          ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {plan.cta}
                    </motion.button>

                    {/* Secure Checkout */}
                    {plan.showSecureCheckout && (
                      <div className="flex items-center justify-center gap-2 mt-4 mb-6">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-green-400 text-sm">Secure checkout</span>
                      </div>
                    )}
                    {!plan.showSecureCheckout && (
                      <div className="h-8 mb-6"></div>
                    )}

                    {/* Features */}
                    <div className="space-y-4 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                              <Check size={12} className="text-gray-400" />
                            </div>
                          </div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}