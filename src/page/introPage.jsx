import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/elogo.png";
import illustration from "../assets/ecommerce_illustration.jpg";

const IntroductionPage = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-500 via-orange-400 to-yellow-300 h-screen flex items-center justify-center">
      <div className="mx-auto p-10 bg-white rounded-lg shadow-xl flex items-center justify-between w-11/12 md:w-4/5 lg:w-3/5">
        <div className="flex flex-col items-start space-y-6 w-2/3 text-center">
          {/* <img src={logo} alt="Logo" className="" /> */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
            Welcome to Our E-commerce Store
          </h1>
          <p className="text-gray-600">
            Explore a curated selection of high-quality products.
          </p>
          <Link to="/signup">
            <button className="bg-gradient-to-br from-blue-500 via-orange-400 to-yellow-300 text-white px-6 py-3 rounded-full focus:outline-none focus:ring hover:shadow-md  focus:border-indigo-300 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
        <div className="hidden lg:block w-3/5">
          <img
            src={illustration}
            className="object-cover w-full h-full rounded-r-lg"
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
