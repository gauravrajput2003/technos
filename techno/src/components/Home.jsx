import React from "react";
import { heroImage } from "../assets/Constant";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const changeLearnMore = () => {
    navigate("/about"); // Use the path string to navigate
  };
  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
  

      <div className="flex flex-col md:flex-row h-full">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-6 md:px-16 py-12 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to <span className="text-yellow-400">TechNova</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-lg opacity-90">
            Your gateway to the latest in technology and innovation. Stay ahead with cutting-edge solutions.
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-300 shadow-lg transform hover:scale-110" onClick={changeLearnMore}>
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute  bg-black bg-opacity-30"></div> {/* Soft overlay for better visibility */}
        </div>
      </div>
    </div>
  );
};

export default Home;