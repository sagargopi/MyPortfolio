'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export default function Education() {
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

  const education: EducationItem[] = [
    {
      id: 1,
      degree: 'B.Tech in Information Technology',
      institution: 'Anurag University, Hyderabad',
      year: '2021 - 2025',
      description: 'Specialized in Web Development and Software Engineering',
    },
    {
      id: 2,
      degree: 'Intermediate (12th)',
      institution: 'SR Junior College',
      year: '2019 - 2021',
      description: 'PCM - Percentage: 95%',
    },
    {
      id: 3,
      degree: 'Secondary School (10th)',
      institution: 'Greenwood High School',
      year: '2018 - 2019',
      description: 'Percentage: 90.4%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
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
              Education
              <span className="absolute -bottom-2 left-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 transform -translate-x-1/2"></span>
            </span>
          </motion.h2>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-indigo-300 transform -translate-x-1/2"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={item}
                className={`relative pl-8 md:pl-0 md:grid ${
                  index % 2 === 0 ? 'md:grid-cols-2 md:pr-8' : 'md:grid-cols-2 md:pl-8'
                } items-center gap-8`}
              >
                {/* Left side (for even items) */}
                {index % 2 === 0 && (
                  <div className="hidden md:block">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold text-indigo-600 mb-2">{edu.degree}</h3>
                      <p className="text-gray-600 mb-2">{edu.institution}</p>
                      <p className="text-indigo-400 text-sm font-medium">{edu.year}</p>
                      {edu.description && (
                        <p className="mt-2 text-gray-600 text-sm">{edu.description}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Center dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white transform -translate-x-1/2 z-10"></div>

                {/* Right side (for odd items) */}
                <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                  <div className="bg-white p-6 rounded-xl shadow-md md:mt-0">
                    {index % 2 !== 0 ? (
                      <>
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">{edu.degree}</h3>
                        <p className="text-gray-600 mb-2">{edu.institution}</p>
                        <p className="text-indigo-400 text-sm font-medium">{edu.year}</p>
                        {edu.description && (
                          <p className="mt-2 text-gray-600 text-sm">{edu.description}</p>
                        )}
                      </>
                    ) : (
                      <div className="md:hidden">
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">{edu.degree}</h3>
                        <p className="text-gray-600 mb-2">{edu.institution}</p>
                        <p className="text-indigo-400 text-sm font-medium">{edu.year}</p>
                        {edu.description && (
                          <p className="mt-2 text-gray-600 text-sm">{edu.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
