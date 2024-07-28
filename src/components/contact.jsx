'use client'
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    to_name: '',
    from_name: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        'service_oorpewg', // Your service ID
        'template_b4si6mh', // Your template ID
        formRef.current,
        'xnVWruMrJZ8sURogJ' // Your public key
      );

      console.log(result.text);
      setSubmitStatus('success');
      setFormData({ to_name: '', from_name: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-900 to-blue-700 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            className="bg-white dark:bg-gray-800 shadow-2xl p-6 sm:p-8 rounded-2xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h3 className='text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-6'>Contact Form</h3>
            <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
              <motion.div variants={staggerChildren} initial="initial" animate="animate" className='space-y-4'>
                {[
                  { name: 'to_name', placeholder: 'Your Name', type: 'text' },
                  { name: 'from_name', placeholder: 'Your Email', type: 'email' },
                  { name: 'subject', placeholder: 'Subject', type: 'text' }
                ].map((field, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Input 
                      name={field.name}
                      placeholder={field.placeholder} 
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      required
                    />
                  </motion.div>
                ))}
                <motion.div variants={fadeInUp}>
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    required
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </motion.div>
            </form>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 p-3 rounded-lg ${
                  submitStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {submitStatus === 'success' 
                  ? 'Thank you for your message. We\'ll get back to you soon!' 
                  : 'There was an error sending your message. Please try again.'}
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            className="text-white space-y-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <h3 className='text-2xl font-semibold mb-4'>Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: '+1 (555) 123-4567' },
                  { icon: Mail, text: 'info@constructco.com' },
                  { icon: MapPin, text: '123 Construction St, City, State 12345' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center" 
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className='mr-3 text-blue-300' />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className='text-2xl font-semibold mb-4'>Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { Icon: FaFacebook, url: "https://facebook.com" },
                  { Icon: FaXTwitter, url: "https://twitter.com" },
                  { Icon: FaInstagram, url: "https://instagram.com" },
                  { Icon: FaLinkedin, url: "https://linkedin.com" },
                ].map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-300 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <item.Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="h-64 sm:h-80 w-full bg-gray-200 rounded-lg overflow-hidden shadow-inner"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098995!2d144.95373631531692!3d-37.81627974261085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770eb4b4d14f0a!2s123+Construction+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sus!4v1552285894299"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Company Location"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
