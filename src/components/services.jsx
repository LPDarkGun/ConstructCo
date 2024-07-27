'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Building, Home, Wrench, ClipboardList, ArrowRight, Check, Star, Calendar, DollarSign, Crown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { services } from './constants';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllServices, setShowAllServices] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const filtered = services.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [searchTerm]);

  const visibleServices = showAllServices ? filteredServices : filteredServices.slice(0, 4);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setActiveTab('overview');
  };

  const handleCloseDialog = () => {
    setSelectedService(null);
    setActiveTab('overview');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 text-gray-800 dark:text-gray-200 pb-20">
      <header className="py-12 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">ConstructCo Services</h1>
          <p className="text-xl text-blue-100">Building dreams, one project at a time</p>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-12">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger}
          initial="initial"
          animate="animate"
          ref={ref}
        >
          {visibleServices.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-blue-700 dark:text-blue-400">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-4 h-4 mr-2 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{service.rating.toFixed(1)}</span>
                  </div>
                  <Button 
                    onClick={() => handleServiceClick(service)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredServices.length > 4 && (
          <div className="mt-8 text-center">
            <Button
              onClick={() => setShowAllServices(!showAllServices)}
              variant="outline"
              className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800"
            >
              {showAllServices ? 'Show Less' : 'Show All Services'}
            </Button>
          </div>
        )}
      </main>

      <Dialog open={!!selectedService} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-[700px] bg-white dark:bg-gray-800">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-blue-700 dark:text-blue-400 flex items-center">
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription>{selectedService.description}</DialogDescription>
              </DialogHeader>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <ScrollArea className="h-[250px] w-full rounded-md border p-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedService.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Our Expertise:</h4>
                      <Progress value={selectedService.expertise} className="w-full" />
                      <p className="text-sm text-right mt-1">{selectedService.expertise}%</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Completed Projects:</h4>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedService.projects}+</p>
                    </div>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="benefits">
                  <ScrollArea className="h-[250px] w-full rounded-md border p-4">
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="testimonial">
                  <ScrollArea className="h-[250px] w-full rounded-md border p-4">
                    <blockquote className="italic text-gray-600 dark:text-gray-300">
                      "{selectedService.testimonial.text}"
                    </blockquote>
                    <p className="text-right mt-2 font-semibold">- {selectedService.testimonial.author}</p>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="details">
                  <ScrollArea className="h-[250px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="font-semibold">Rating:</span>
                        <span className="ml-2">{selectedService.rating.toFixed(1)} / 5.0</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="font-semibold">Typical Completion Time:</span>
                        <span className="ml-2">{selectedService.completionTime}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-semibold">Price Range:</span>
                        <span className="ml-2">{selectedService.priceRange}</span>
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
              <DialogFooter className="mt-6">
                <Button onClick={handleCloseDialog}>Close</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesPage;