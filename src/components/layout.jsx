'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, Briefcase, Mail, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeProvider, ThemeSwitcher } from './ThemeProvider';

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: Info, label: "About" },
  { href: "/services", icon: Briefcase, label: "Services" },
  { href: "/contact", icon: Mail, label: "Contact" },
];

const Layout = ({ children }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-gray-100">
        <motion.header
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ConstructCo
            </Link>
            <div className='flex items-center gap-4'>
              <nav className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      className="font-semibold flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <item.icon className="mr-1" size={18} />
                      {item.label}
                    </motion.div>
                  </Link>
                ))}
              </nav>
              <ThemeSwitcher />
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="md:hidden text-gray-700 dark:text-gray-300">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900">
                  <nav>
                    <ul className="space-y-6">
                      {navItems.map((item) => (
                        <motion.li key={item.href} whileHover={{ x: 5 }}>
                          <Link href={item.href} onClick={handleLinkClick} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <item.icon className="mr-3" size={22} />
                            <span className="text-lg">{item.label}</span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.header>

        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={children.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="bg-gray-800 dark:bg-gray-950 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-blue-400 transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}

                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <address className="not-italic">
                  <p>123 Construction St, City, State 12345</p>
                  <p>Phone: (123) 456-7890</p>
                  <p>Email: info@constructco.com</p>
                </address>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-colors">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p>&copy; 2024 ConstructCo. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;