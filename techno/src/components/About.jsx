import React from 'react';
import { imgPerson1, imgPerson2, imgPerson3, imgPerson4, imgPerson5,imgPerson6 } from '../assets/Constant';

const teamMembers = [
  { name: 'John Doe', role: 'CEO', photo: imgPerson1, description: 'Leading the company with a vision for innovation.' },
  { name: 'Jane Smith', role: 'CTO', photo: imgPerson2, description: 'Driving technological advancements and solutions.' },
  { name: 'Alice Johnson', role: 'SWE', photo: imgPerson3, description: 'Ensuring smooth operations and growth.' },
  { name: 'Bob Brown', role: 'CFO', photo: imgPerson4, description: 'Managing financial strategies and growth.' },
  { name: 'Emily Davis', role: 'SDE', photo: imgPerson5, description: 'Leading marketing strategies and initiatives.' },
  { name: 'Emily Mechle', role: 'CEO', photo: imgPerson6, description: 'Leading marketing strategies and initiatives.' },
];

const About = () => {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-amber-300">About Us</h2>
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-xl mb-8">To innovate and deliver top-notch technology solutions that empower businesses worldwide.</p>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
          <p className="text-xl mb-8">To be a global leader in technology, driving progress and making a positive impact on society.</p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-8">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
             <div
             key={index}
             className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-900 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
           >
                <img src={member.photo} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4 hover:duration-300 ease-in-out" />
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;