import React from 'react';
import { imgPerson1, imgPerson10, imgPerson11, imgPerson2, imgPerson3, imgPerson4, imgPerson5, imgPerson6, imgPerson7, imgPerson8, imgPerson9 } from '../assets/Constant';
import LazyLoad from 'react-lazyload';
import Slider from 'react-slick';

const teamMembers = [
  { name: 'John Doe', role: 'CEO', photo: imgPerson1, description: 'Leading the company with a vision for innovation.' },
  { name: 'Jane Smith', role: 'CTO', photo: imgPerson2, description: 'Driving technological advancements and solutions.' },
  { name: 'Alice Johnson', role: 'SWE', photo: imgPerson3, description: 'Ensuring smooth operations and growth.' },
  { name: 'Bob Brown', role: 'CFO', photo: imgPerson4, description: 'Managing financial strategies and growth.' },
  { name: 'Emily Davis', role: 'SDE', photo: imgPerson5, description: 'Leading marketing strategies and initiatives.' },
  { name: 'Emily Mechle', role: 'CEO', photo: imgPerson6, description: 'Leading marketing strategies and initiatives.' },
];
const testimonials = [
  { name: 'Rohit', feedback: 'TechNova provided excellent service and innovative solutions.' ,photo: imgPerson7 },
  { name: 'Mohit', feedback: 'The team at TechNova is highly skilled and professional.',photo: imgPerson8 },
  { name: 'Virat', feedback: 'I am extremely satisfied with the results delivered by TechNova.',photo: imgPerson9 },
  { name: 'Atal', feedback: 'I am extremely satisfied with the results delivered by TechNova.',photo: imgPerson10 },
  { name: 'Bumrah', feedback: 'I am extremely satisfied with the results delivered by TechNova.',photo: imgPerson11 },
];
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  return (
    <div className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">
          About Us
        </h2>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left ">
          <div className="bg-white text-black bg-opacity-10 p-6 rounded-xl shadow-lg duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90 ">
              To innovate and deliver top-notch technology solutions that empower businesses worldwide.
            </p>
          </div>

          <div className="bg-white text-black bg-opacity-10 p-6 rounded-xl shadow-lg duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg opacity-90">
              To be a global leader in technology, driving progress and making a positive impact on society.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-center mb-12">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl text-center text-gray-900 transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                 <LazyLoad height={200} offset={100}>
                  <img src={member.photo} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                </LazyLoad>
                <h4 className="text-2xl font-semibold mb-2">{member.name}</h4>
                <p className="text-gray-500 text-lg mb-3">{member.role}</p>
                <p className="text-gray-700 text-base">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-center mb-12 text-white">Feedbacks</h3>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center text-gray-900">
                  <p className="text-xl mb-4">"{testimonial.feedback}"</p>
                  
                  <LazyLoad height={200} offset={100}>
                    <img src={testimonial.photo} alt={testimonial.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                  </LazyLoad>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
