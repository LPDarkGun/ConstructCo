'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, AlertTriangle } from 'lucide-react';

const TermsSection = ({ title, icon: Icon, children }) => (
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

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Terms of Service
      </motion.h1>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
        <TermsSection title="Acceptance of Terms" icon={FileText}>
          <p>
            By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
          </p>
        </TermsSection>

        <TermsSection title="User Responsibilities" icon={Users}>
          <p>
            As a user of our services, you are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account information</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring that your use of our services complies with all applicable laws and regulations</li>
          </ul>
        </TermsSection>

        <TermsSection title="Limitation of Liability" icon={AlertTriangle}>
          <p>
            To the fullest extent permitted by applicable law, ConstructCo shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the services</li>
            <li>Any conduct or content of any third party on the services</li>
            <li>Any content obtained from the services</li>
            <li>Unauthorized access, use or alteration of your transmissions or content</li>
          </ul>
        </TermsSection>
      </div>
    </div>
  );
};

export default TermsOfService;