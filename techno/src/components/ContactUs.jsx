import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
    

      {/* Background Section */}
      <div className="py-28 bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-600 text-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          {/* Section Title */}
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Get in Touch
          </h2>

          {/* Contact Form & Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-gray-900 border border-gray-300 hover:shadow-2xl transition duration-300">
              <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">Send Us a Message</h3>
              <form>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Write your message..."
                    rows="5"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-gray-900 border border-gray-300 hover:shadow-2xl transition duration-300">
              <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">Contact Information</h3>
              <div className="flex items-center space-x-4 mb-6">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
                <p className="text-lg text-gray-700">+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <p className="text-lg text-gray-700">contact@technova.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <p className="text-lg text-gray-700">123 TechNova St, Silicon Valley, CA</p>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="mt-16">
            <h3 className="text-4xl font-semibold text-center mb-8">Find Us Here</h3>
            <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg border border-gray-300">
              <iframe
                title="Google Maps"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484646!2d144.9630579153167!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b1b0b1b1!2sTechNova%20Office!5e0!3m2!1sen!2us!4v1634567890123!5m2!1sen!2us"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
