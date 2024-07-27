"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion"
import { ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const Home = () => {

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-blue-700">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Construction site"
            className="object-cover w-full h-full"
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
        </div>
        <motion.div
          className="relative z-10 text-center"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={fadeIn}
          >
            Building Tomorrow, Today
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12"
            variants={fadeIn}
          >
            Innovative Construction Solutions for a Changing World
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              <Link href="/contact">
                Get a Quote <ChevronRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ChevronDown size={48} className="animate-bounce text-white" />
        </motion.div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-8 dark:text-white"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Welcome to ConstructCo
          </motion.h2>
          <motion.p
            className="text-xl text-center dark:text-gray-300"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            At ConstructCo, we're not just building structures; we're crafting
            the future. With over 25 years of experience, we've established
            ourselves as industry leaders in innovative, sustainable, and
            high-quality construction. From residential dreams to commercial
            landmarks, we bring your vision to life with precision and passion.
          </motion.p>
        </div>
      </section>

      <motion.section 
        className="py-24 bg-blue-900 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Residential Construction",
                description: "Custom homes tailored to your lifestyle and dreams.",
              },
              {
                title: "Commercial Construction",
                description: "State-of-the-art facilities to drive your business forward.",
              },
              {
                title: "Renovations",
                description: "Breathe new life into existing spaces with our expert renovations.",
              },
              {
                title: "Project Management",
                description: "Comprehensive oversight to ensure project success from start to finish.",
              },
            ].map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-xl h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home