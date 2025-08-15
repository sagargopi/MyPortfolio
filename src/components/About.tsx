'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const skills = [
    { name: 'Frontend', color: 'from-blue-500 to-indigo-600' },
    { name: 'Backend', color: 'from-purple-500 to-pink-600' },
    { name: 'Database', color: 'from-green-500 to-teal-600' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={container}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 relative"
            variants={item}
          >
            <span className="relative">
              About Me
              <span className="absolute -bottom-2 left-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 transform -translate-x-1/2"></span>
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={item}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="relative aspect-square bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍💻</div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-800">Sagar Chinthala</h3>
                      <p className="text-indigo-600">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
            
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Who am I?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                With a strong foundation in both frontend and backend technologies, I create seamless 
                and efficient digital experiences that solve real-world problems.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span 
                      key={skill.name}
                      className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${skill.color}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300"
                >
                  Download CV
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border-2 border-indigo-100 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors duration-300"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
