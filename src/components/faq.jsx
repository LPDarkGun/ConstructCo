'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What services does ConstructCo offer?",
      answer: "ConstructCo offers a wide range of construction services including residential and commercial building, renovations, project management, and consulting."
    },
    {
      question: "How long has ConstructCo been in business?",
      answer: "ConstructCo has been in the construction industry for over 25 years, providing high-quality services since 1998."
    },
    {
      question: "Are your services available nationwide?",
      answer: "Currently, our services are available in select states. Please contact us for specific location information."
    },
    {
      question: "Do you offer free quotes?",
      answer: "Yes, we offer free initial consultations and quotes for all potential projects. Contact us to schedule your consultation."
    },
    {
      question: "What sets ConstructCo apart from other construction companies?",
      answer: "ConstructCo is known for our attention to detail, commitment to quality, and exceptional customer service. We use the latest technologies and sustainable practices in all our projects."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;