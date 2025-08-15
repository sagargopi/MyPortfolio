'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  credential: string;
  skills: string[];
}

export default function Certifications() {
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

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Java',
      issuer: 'Infosys Springboard',
      year: '2023',
      credential: '',
      skills: ['Object-Oriented Programming', 'Control Structures', 'Core Java']
    },
    {
      id: 2,
      title: 'PCP: Programming Essentials in Python',
      issuer: 'Cisco',
      year: '2023',
      credential: '',
      skills: ['Python', 'Data Structures', 'Algorithms']
    },
    {
      id: 3,
      title: 'AWS Academy Graduate – Cloud Foundations',
      issuer: 'AWS',
      year: '2023',
      credential: '',
      skills: ['AWS EC2', 'Cloud Storage', 'Cloud Deployment', 'AWS Services']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
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
              Certifications
              <span className="absolute -bottom-2 left-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 transform -translate-x-1/2"></span>
            </span>
          </motion.h2>

          <div className="space-y-8">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <span>{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.year}</span>
                      </div>
                      {cert.credential && (
                        <div className="mt-2">
                          <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            Credential ID: {cert.credential}
                          </span>
                        </div>
                      )}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      View Certificate
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                  
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
