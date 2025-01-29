import React from 'react';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';
import { 
  imgPerson1, imgPerson2, imgPerson3, imgPerson4, imgPerson5, imgPerson6, 
  imgPerson7, imgPerson8, imgPerson9, imgPerson10, imgPerson11 
} from '../assets/Constant';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const teamMembers = [
  { name: 'John Doe', role: 'CEO', photo: imgPerson1, description: 'Leading the company with a vision for innovation.' },
  { name: 'Jane Smith', role: 'CTO', photo: imgPerson2, description: 'Driving technological advancements and solutions.' },
  { name: 'Alice Johnson', role: 'SWE', photo: imgPerson3, description: 'Ensuring smooth operations and growth.' },
  { name: 'Bob Brown', role: 'CFO', photo: imgPerson4, description: 'Managing financial strategies and growth.' },
  { name: 'Emily Davis', role: 'SDE', photo: imgPerson5, description: 'Leading marketing strategies and initiatives.' },
  { name: 'Emily Mechle', role: 'CEO', photo: imgPerson6, description: 'Leading marketing strategies and initiatives.' },
];

const testimonials = [
  { name: 'Michael Scott', feedback: 'TechNova transformed our business with cutting-edge solutions.', photo: imgPerson7 },
  { name: 'Pam Beesly', feedback: 'Their team is incredibly talented and dedicated.', photo: imgPerson8 },
  { name: 'Jim Halpert', feedback: 'Exceptional service and support throughout our journey.', photo: imgPerson9 },
  { name: 'Dwight Schrute', feedback: 'The best decision we made was choosing TechNova.', photo: imgPerson10 },
  { name: 'Angela Martin', feedback: 'Reliable, innovative, and customer-focused.', photo: imgPerson11 },
];

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">
          About Us
        </h2>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="bg-white text-black bg-opacity-10 p-6 rounded-xl shadow-lg border border-gray-300 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90">
              To innovate and deliver top-notch technology solutions that empower businesses worldwide.
            </p>
          </div>

          <div className="bg-white text-black bg-opacity-10 p-6 rounded-xl shadow-lg border border-gray-300 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
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
                className="bg-white p-8 rounded-2xl shadow-xl text-center text-gray-900 border border-gray-300 transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                <LazyLoad height={200} offset={100}>
                  <img src={member.photo} alt={member.name} className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-md mb-4 relative z-10" />
                </LazyLoad>
                <h4 className="text-2xl font-semibold mb-2 relative z-10">{member.name}</h4>
                <p className="text-gray-500 text-lg mb-3 relative z-10">{member.role}</p>
                <p className="text-gray-700 text-base relative z-10">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

      
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-center mb-12">What Our Clients Say</h3>
          <Slider {...sliderSettings} className="max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center bg-white text-black p-6 rounded-2xl shadow-lg border border-gray-300">
                <LazyLoad height={200} offset={100}>
                  <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 shadow-md mb-4" />
                </LazyLoad>
                <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
