import React from "react";
import { heroImage } from "../assets/Constant";
import Navbar from "./Navbar"; // Adjust the import path as needed

const Home = () => {
  return (
    <div className="relative w-full h-screen">
     

      <div className="flex h-full">
        {/* Image Section */}
        <div 
          className="w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute  bg-black bg-opacity-40"></div> {/* Darker overlay for better text visibility */}
        </div>

        {/* Text Section */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">Welcome to TechNova</h1>
          <p className="text-2xl mb-8 drop-shadow-md">Your gateway to the latest in technology and innovation.</p>
          <button className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition duration-300 shadow-lg">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;