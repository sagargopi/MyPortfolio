'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo: string;
  code: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'HD Notes',
    description: 'A secure note-taking application with real-time synchronization, Google OAuth, and mobile-friendly interface. Features include JWT authentication, rich text editing, and responsive design.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'JWT', 'OAuth'],
    image: '/images/HD%20Note.PNG',
    demo: 'https://note-taking-app-iota-ruddy.vercel.app/',
    code: 'https://github.com/sagargopi/Note-Taking-App',
  },
  {
    id: 2,
    title: 'Flipping Tiles',
    description: 'A web-based memory game converted from Java Swing to a full-stack application. Features include game state management, responsive design, and smooth animations.',
    tags: ['React', 'Spring Boot', 'Java', 'WebSockets'],
    image: '/images/flipping_tiles.PNG',
    demo: 'https://flipping-tiles-web.vercel.app/',
    code: 'https://github.com/sagargopi/FlippingTilesWeb',
  },
  {
    id: 3,
    title: 'Travel Itinerary App',
    description: 'A full-stack application for planning and managing travel itineraries with real-time updates and collaboration features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/travel-itinerary.jpg',
    demo: 'https://travel-itineray-app.vercel.app/',
    code: '#',
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={container}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 relative"
            variants={item}
          >
            <span className="relative">
              My Projects
              <span className="absolute -bottom-2 left-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 transform -translate-x-1/2"></span>
            </span>
          </motion.h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
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
                    <a
                      href={project.code}
                      className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
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
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
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
