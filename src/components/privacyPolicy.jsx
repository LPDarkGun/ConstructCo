'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';

const PolicySection = ({ title, icon: Icon, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <h2 className="flex items-center text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
      <Icon className="mr-2" size={24} />
      {title}
    </h2>
    <div className="prose dark:prose-invert max-w-none">{children}</div>
  </motion.section>
);

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Privacy Policy
      </motion.h1>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
        <PolicySection title="Information Collection" icon={Eye}>
          <p>
            We collect information to provide better services to all our users. The types of information we collect include:
          </p>
          <ul>
            <li>Information you provide to us (e.g., name, email address)</li>
            <li>Information we get from your use of our services</li>
            <li>Information from third-party sources</li>
          </ul>
        </PolicySection>

        <PolicySection title="Information Usage" icon={Lock}>
          <p>
            We use the information we collect to provide, maintain, protect and improve our services, to develop new ones, and to protect our company and our users.
          </p>
        </PolicySection>

        <PolicySection title="Information Protection" icon={Shield}>
          <p>
            We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular:
          </p>
          <ul>
            <li>We encrypt many of our services using SSL</li>
            <li>We review our information collection, storage, and processing practices</li>
            <li>We restrict access to personal information to employees, contractors, and agents</li>
          </ul>
        </PolicySection>
      </div>
    </div>
  );
};

export default PrivacyPolicy;