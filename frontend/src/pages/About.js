// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Section */}
        <h2 className="text-5xl font-extrabold text-gray-700 mb-6">About Journey Junction</h2>
        <p className="text-lg text-gray-800 mb-8 leading-relaxed max-w-4xl mx-auto">
          Discover the world with ease through personalized travel suggestions and curated experiences. At Journey Junction, we make your travel planning smooth and fun.
        </p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
          <div className="p-8 bg-white rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-base">
              We aim to simplify travel planning with tailored itineraries, making every trip enjoyable and memorable.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-base">
              To inspire every traveler to explore more by offering a platform that is intuitive and packed with global travel insights.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white p-10 rounded-lg shadow-xl my-16 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-700 mb-6">Why Choose Journey Junction?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex items-start">
              <div className="p-4 bg-gray-500 rounded-full text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v5l-7-4 7-4v5l11-6V5l-11 6z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700">Personalized Trips</h4>
                <p className="text-gray-600 mt-2">
                  Create custom travel plans based on your preferences and budget.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-4 bg-blue-500 rounded-full text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v5l-7-4 7-4v5l11-6V5l-11 6z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700">Global Destinations</h4>
                <p className="text-gray-600 mt-2">
                  Access a wide range of travel destinations, from hidden gems to iconic landmarks.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-4 bg-green-500 rounded-full text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v5l-7-4 7-4v5l11-6V5l-11 6z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700">User-Friendly Interface</h4>
                <p className="text-gray-600 mt-2">
                  An intuitive platform that makes trip planning fast and hassle-free.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-4 bg-yellow-500 rounded-full text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v5l-7-4 7-4v5l11-6V5l-11 6z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700">Local Insights</h4>
                <p className="text-gray-600 mt-2">
                  Get authentic tips from locals to make the most out of your travels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 mb-8">
          <img
            className="mx-auto w-full max-w-lg rounded-lg shadow-lg"
            src="https://example.com/about-journey-image.jpg"
            alt="Traveling through the world"
          />
        </div>

        {/* Call to Action */}
        <div className="dark:bg-gray-900 text-white py-12 px-6 mt-16 rounded-lg">
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the World?</h3>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Start planning your next adventure with Journey Junction today!
          </p>
          <a
            href="/signup"
            className="bg-white text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
