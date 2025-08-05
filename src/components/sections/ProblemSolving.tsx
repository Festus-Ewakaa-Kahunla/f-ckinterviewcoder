'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProblemSolving() {
  const [activeTab, setActiveTab] = useState('code');

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Interactive Coding Interface */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-300 font-medium">Problem List</span>
                  <div className="flex gap-2">
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">1</span>
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">2</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 h-[600px]">
              {/* Left Panel - Problem Description */}
              <div className="bg-gray-900 border-r border-gray-700">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold">
                      1
                    </div>
                    <span className="text-white font-semibold">Two Sum</span>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                    <div className="flex gap-2">
                      <span className="text-green-500">Easy</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-blue-400">Topics</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-purple-400">Companies</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-orange-400">Hint</span>
                    </div>

                    <div className="space-y-3">
                      <p>
                        Given an array of integers <code className="bg-gray-800 px-1 rounded">nums</code> and an integer <code className="bg-gray-800 px-1 rounded">target</code>, return indices of the two numbers such that they add up to the target.
                      </p>
                      
                      <p>
                        You may assume that each input would have exactly one solution, and you may not use the same element twice.
                      </p>
                      
                      <p>
                        You can return the answer in any order.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="font-semibold text-white">Example 1:</p>
                      <div className="bg-gray-800 p-3 rounded font-mono text-xs">
                        <div><span className="text-blue-400">Input:</span> nums = [2,7,11,15], target = 9</div>
                        <div><span className="text-green-400">Output:</span> [0,1]</div>
                        <div><span className="text-yellow-400">Explanation:</span> Because nums[0] + nums[1] == 9, we return [0, 1].</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="font-semibold text-white">Example 2:</p>
                      <div className="bg-gray-800 p-3 rounded font-mono text-xs">
                        <div><span className="text-blue-400">Input:</span> nums = [3,2,4], target = 6</div>
                        <div><span className="text-green-400">Output:</span> [1,2]</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="font-semibold text-white">Example 3:</p>
                      <div className="bg-gray-800 p-3 rounded font-mono text-xs">
                        <div><span className="text-blue-400">Input:</span> nums = [3,3], target = 6</div>
                        <div><span className="text-green-400">Output:</span> [0,1]</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-white">Constraints:</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>2 ≤ nums.length ≤ 10⁴</li>
                        <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                        <li>-10⁹ ≤ target ≤ 10⁹</li>
                        <li>Only one valid answer exists.</li>
                      </ul>
                    </div>

                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Follow-up:</span> Can you come up with an algorithm that is less than O(n²) time complexity?
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Panel - Code Editor */}
              <div className="bg-gray-800">
                <div className="border-b border-gray-700">
                  <div className="flex">
                    <button 
                      onClick={() => setActiveTab('code')}
                      className={`px-4 py-3 text-sm font-medium border-b-2 ${
                        activeTab === 'code' 
                          ? 'border-blue-500 text-white bg-gray-700' 
                          : 'border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      Code
                    </button>
                    <button 
                      onClick={() => setActiveTab('python')}
                      className={`px-4 py-3 text-sm font-medium border-b-2 ${
                        activeTab === 'python' 
                          ? 'border-blue-500 text-white bg-gray-700' 
                          : 'border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      Python3
                    </button>
                    <button className="ml-auto px-4 py-3 text-gray-400 hover:text-white">
                      <span className="text-xs">Auto</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 font-mono text-sm">
                  <div className="space-y-1">
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">1</span>
                      <span className="text-blue-400">class</span>
                      <span className="text-white ml-2">Solution:</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">2</span>
                      <span className="text-blue-400 ml-4">def</span>
                      <span className="text-yellow-300 ml-2">twoSum</span>
                      <span className="text-white">(</span>
                      <span className="text-blue-400">self</span>
                      <span className="text-white">,</span>
                      <span className="text-orange-400 ml-2">nums</span>
                      <span className="text-white">:</span>
                      <span className="text-green-400 ml-2">List</span>
                      <span className="text-white">[</span>
                      <span className="text-blue-400">int</span>
                      <span className="text-white">],</span>
                      <span className="text-orange-400 ml-2">target</span>
                      <span className="text-white">:</span>
                      <span className="text-blue-400 ml-2">int</span>
                      <span className="text-white">) -&gt;</span>
                      <span className="text-green-400 ml-2">List</span>
                      <span className="text-white">[</span>
                      <span className="text-blue-400">int</span>
                      <span className="text-white">]:</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">3</span>
                      <span className="text-orange-400 ml-8">num_map</span>
                      <span className="text-white ml-2">=</span>
                      <span className="text-white ml-2">{}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">4</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">5</span>
                      <span className="text-blue-400 ml-8">for</span>
                      <span className="text-orange-400 ml-2">i</span>
                      <span className="text-white">,</span>
                      <span className="text-orange-400 ml-2">num</span>
                      <span className="text-blue-400 ml-2">in</span>
                      <span className="text-yellow-300 ml-2">enumerate</span>
                      <span className="text-white">(</span>
                      <span className="text-orange-400">nums</span>
                      <span className="text-white">):</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">6</span>
                      <span className="text-orange-400 ml-12">complement</span>
                      <span className="text-white ml-2">=</span>
                      <span className="text-orange-400 ml-2">target</span>
                      <span className="text-white ml-2">-</span>
                      <span className="text-orange-400 ml-2">num</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">7</span>
                      <span className="text-blue-400 ml-12">if</span>
                      <span className="text-orange-400 ml-2">complement</span>
                      <span className="text-blue-400 ml-2">in</span>
                      <span className="text-orange-400 ml-2">num_map</span>
                      <span className="text-white">:</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">8</span>
                      <span className="text-blue-400 ml-16">return</span>
                      <span className="text-white ml-2">[</span>
                      <span className="text-orange-400">num_map</span>
                      <span className="text-white">[</span>
                      <span className="text-orange-400">complement</span>
                      <span className="text-white">],</span>
                      <span className="text-orange-400 ml-2">i</span>
                      <span className="text-white">]</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">9</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">10</span>
                      <span className="text-orange-400 ml-12">num_map</span>
                      <span className="text-white">[</span>
                      <span className="text-orange-400">num</span>
                      <span className="text-white">]</span>
                      <span className="text-white ml-2">=</span>
                      <span className="text-orange-400 ml-2">i</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">11</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-8 text-right mr-4">12</span>
                      <span className="text-blue-400 ml-8">return</span>
                      <span className="text-white ml-2">[]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
