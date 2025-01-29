import React from 'react';

const services = [
  { title: 'Machine Learning', description: 'Empowering your business with advanced machine learning solutions.' },
  { title: 'Cybersecurity', description: 'Protecting your digital assets with top-notch security.' },
  { title: 'Mobile Development', description: 'Creating user-friendly mobile applications.' },
  { title: 'Data Analytics', description: 'Transforming data into actionable insights.' },
  { title: 'DevOps', description: 'Streamlining development and operations processes.' },
  { title: 'Blockchain', description: 'Innovative blockchain solutions for various industries.' },
  { title: 'BigData', description: 'Harnessing the power of big data to drive business growth and innovation.' },
  { title: 'React Native', description: 'Building cross-platform mobile applications with React Native.' },
  { title: 'iOS Development', description: 'Creating high-quality iOS applications for Apple devices.' },
];


const Services = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-200">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;