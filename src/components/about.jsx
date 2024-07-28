'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { values, team, projects, principles } from './constants';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ConstructionAboutPage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);


  

  return (
    <div className='min-h-screen py-12 bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 text-gray-900 dark:text-gray-100'>
      <div className="container mx-auto px-4">
        <motion.nav 
          className={`flex flex-col md:flex-row justify-between items-center mb-12  `}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 md:mb-0'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About ConstructCo
          </motion.h1>
          <div className="flex flex-row items-center gap-2">
            {['about', 'projects', 'team'].map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? "default" : "outline"}
                onClick={() => setActiveSection(section)}
                className="capitalize"
              >
                {section}
              </Button>
            ))}
          </div>
        </motion.nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === 'about' && (
              <div>
                <motion.section className="mb-12" variants={fadeIn} initial="initial" animate="animate">
                  <Card className='bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden dark:bg-gray-800/80'>
                    <CardContent className="p-6 relative">
                      <motion.div
                        className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 0],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      <h2 className='text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-300'>Our Story</h2>
                      <p className='text-lg leading-relaxed'>
                        Founded in 1995 by Dr. Amelia Richardson, ConstructCo started as a small, forward-thinking firm focused on sustainable urban development. 
                        From our first energy-efficient community center to the EcoTower skyscraper, we've consistently led the way in eco-friendly construction.
                      </p>
                      <p className='text-lg mt-4 leading-relaxed'>
                        Today, we are industry leaders in green building practices, innovative design, and client satisfaction, with over 500 experts worldwide.
                      </p>
                    </CardContent>
                  </Card>
                </motion.section>

                <motion.section className="mb-12" variants={fadeIn} initial="initial" animate="animate">
                  <Card className='bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden dark:bg-gray-800/80'>
                    <CardContent className="p-6 relative">
                      <motion.div
                        className="absolute bottom-0 left-0 w-48 h-48 bg-green-500 rounded-full opacity-10"
                        animate={{
                          scale: [1, 1.1, 1],
                          x: [0, 10, 0],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      <h2 className='text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-300'>Our Mission</h2>
                      <p className='text-xl italic text-blue-600 dark:text-blue-400 leading-relaxed'>
                        "To revolutionize the built environment through sustainable innovation, creating spaces that inspire, endure, and harmonize with our planet."
                      </p>
                      <p className='text-xl italic text-blue-600 dark:text-blue-400 mt-4 leading-relaxed'>
                        "We are committed to fostering communities, pushing technological boundaries, and setting new standards in eco-friendly construction—all while 
                        prioritizing the well-being of our clients, teams, and the environment."
                      </p>
                    </CardContent>
                  </Card>
                </motion.section>

                <motion.section className="mb-12" variants={fadeIn} initial="initial" animate="animate">
                  <h2 className='text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-300'>Our Achievements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { year: '2023', achievement: 'Global Sustainability Leadership Award' },
                      { year: '2022', achievement: 'Best Use of Smart Technology in Construction' },
                      { year: '2021', achievement: 'Urban Development Impact Award' },
                      { year: '2020', achievement: 'Green Building Innovation Prize' },
                      { year: '2019', achievement: 'Employer of the Year in Construction' },
                      { year: '2018', achievement: 'Most Eco-Friendly Skyscraper Design' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card className='bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-blue-50 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-md hover:shadow-xl'>
                          <CardContent className='p-4'>
                            <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">{item.year}</Badge>
                            <h3 className="font-semibold text-lg">{item.achievement}</h3>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <motion.section variants={fadeIn} initial="initial" animate="animate">
                  <h2 className='text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-300'>Our Core Principles</h2>
                  <Tabs defaultValue="values" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 h-max mb-4">
                      <TabsTrigger value="values" className="text-lg">Our Values</TabsTrigger>
                      <TabsTrigger value="approach" className="text-lg">Our Approach</TabsTrigger>
                    </TabsList>
                    <TabsContent value="values">
                      <Card className='bg-white/80 backdrop-blur-sm dark:bg-gray-800/80'>
                        <CardContent className='p-6'>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {values.map((value, index) => (
                              <motion.li
                                key={index}
                                className="flex items-center bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <value.icon className='mr-3 text-blue-600 dark:text-blue-400' size={24} />
                                <span className="text-lg">{value.text}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="approach">
                      <Card className='bg-white/80 backdrop-blur-sm dark:bg-gray-800/80'>
                        <CardContent className='p-6'>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {principles.map((principle, index) => (
                              <motion.li
                                key={index}
                                className="flex items-center bg-green-50 dark:bg-green-900/30 p-3 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <principle.icon className='mr-3 text-green-600 dark:text-green-400' size={24} />
                                <span className="text-lg">{principle.text}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </motion.section>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className='bg-white/80 backdrop-blur-sm overflow-hidden dark:bg-gray-800/80 hover:shadow-xl transition-shadow duration-300'>
                      <Image src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                      <CardContent className="p-6">
                        <h3 className='text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-300'>{project.name}</h3>
                        <p className='text-lg mb-4'>{project.description}</p>
                        <Button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {activeSection === 'team' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className='bg-white/80 backdrop-blur-sm overflow-hidden dark:bg-gray-800/80 hover:shadow-xl transition-all duration-300 group'>
                      <div className="relative overflow-hidden">
                        <Image src={member.image} alt={member.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className='text-white text-sm'>{member.bio}</p>
                        </div>
                      </div>
                      <CardContent className="p-4 text-center">
                        <h3 className='text-xl font-semibold text-blue-700 dark:text-blue-300'>{member.name}</h3>
                        <p className='text-gray-700 dark:text-gray-300'>{member.position}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.footer
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
          <p className='text-gray-600 dark:text-gray-400'>
            © 2024 ConstructCo. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default ConstructionAboutPage;
