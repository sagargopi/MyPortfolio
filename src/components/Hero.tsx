'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div
            ref={ref}
            className="md:w-1/2 mb-12 md:mb-0"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" variants={itemVariants}>
              <span className="block text-gray-600">Hi there! I'm</span>
              <span className="block text-indigo-600 mt-2">SAGAR CHINTHALA</span>
              <div className="relative inline-block mt-4">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-200 rounded-full"></span>
              </div>
            </motion.h1>
            
            <motion.p className="text-lg text-gray-600 mb-8 max-w-lg" variants={itemVariants}>
              Crafting digital experiences that matter
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300 flex items-center"
              >
                Get In Touch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-indigo-100 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors duration-300 flex items-center"
              >
                View My Work
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Developer Illustration */}
          <motion.div 
            className="relative w-full md:w-1/2 max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: inView ? 1 : 0, 
              x: inView ? 0 : 50,
              transition: { duration: 0.6, delay: 0.2 }
            }}
          >
            <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6">
                <div className="h-full flex flex-col justify-between">
                  {/* Code Editor Simulation */}
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-400 text-sm ml-3">portfolio.tsx</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="text-blue-400">const</div>
                      <div className="text-yellow-400 ml-4">developer</div>
                      <div className="text-white ml-4">= {`{`}</div>
                      <div className="text-green-400 ml-8">name:</div>
                      <div className="text-orange-400 ml-12">'Sagar Chinthala',</div>
                      <div className="text-green-400 ml-8">role:</div>
                      <div className="text-orange-400 ml-12">'Full Stack Developer',</div>
                      <div className="text-green-400 ml-8">skills:</div>
                      <div className="text-orange-400 ml-12">['React', 'Node.js', 'TypeScript']</div>
                      <div className="text-white ml-4">{`}`}</div>
                    </div>
                  </div>
                  
                  {/* Tech Stack Icons */}
                  <div className="flex justify-center space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-2xl">⚛️</div>
                      <div className="text-xs text-gray-600 mt-1">React</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-2xl">🔹</div>
                      <div className="text-xs text-gray-600 mt-1">Node.js</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-2xl">📜</div>
                      <div className="text-xs text-gray-600 mt-1">JS/TS</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-2xl">💾</div>
                      <div className="text-xs text-gray-600 mt-1">DB</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              {['React', 'Node', 'Database', 'JavaScript'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    scale: inView ? 1 : 0.5,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  style={{
                    top: `${10 + index * 20}%`,
                    left: index % 2 === 0 ? '10%' : '80%',
                  }}
                >
                  <span className="text-2xl text-indigo-600">
                    {tech === 'React' && '⚛️'}
                    {tech === 'Node' && '🔹'}
                    {tech === 'Database' && '💾'}
                    {tech === 'JavaScript' && '📜'}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 w-32 h-32 bg-indigo-100 rounded-full -bottom-8 -left-8 opacity-70"></div>
            <div className="absolute -z-10 w-20 h-20 bg-indigo-200 rounded-full -top-4 -right-4 opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
