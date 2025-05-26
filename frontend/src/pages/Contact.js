// src/pages/Contact.js
import React from "react";

import profile_photo_1 from "../images/Team/profile_photo_1.jpg";
import profile_photo_2 from "../images/Team/profile_photo_2.jpg";
import profile_photo_3 from "../images/Team/profile_photo_3.jpg";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Section */}
        <h2 className="text-5xl font-extrabold text-gray-700 mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-800 mb-8 leading-relaxed max-w-4xl mx-auto">
          We'd love to hear from you! Whether you have a question, feedback, or
          need assistance, feel free to reach out.
        </p>

        {/* Contact Form Section */}
        <div className="bg-white p-10 rounded-lg shadow-xl max-w-4xl mx-auto my-12">
          <h3 className="text-3xl font-semibold text-gray-700 mb-6">
            Contact Us
          </h3>

          {/* Form Fields */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300"
                required
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg border border-gray-300"
              required
            ></textarea>

            <button
              type="submit"
              className="dark:bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Team Section with LinkedIn Profiles */}
        <div className="my-16">
          <h3 className="text-3xl font-bold text-gray-700 mb-8">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Card - 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={profile_photo_1}
                alt="Team Member 1"
              />
              <h4 className="text-xl font-semibold text-gray-700">
                Mayank Rojivadiya
              </h4>
              <p className="text-gray-500">Team Member</p>
              <a
                href="https://www.linkedin.com/in/rojivadiya-mayank-a67104273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-blue-600 hover:text-blue-800 mt-4 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Team Member Card - 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={profile_photo_2}
                alt="Team Member 2"
              />
              <h4 className="text-xl font-semibold text-gray-700">
                Hardi Rajpara
              </h4>
              <p className="text-gray-500">Team Memeber</p>
              <a
                href="https://www.linkedin.com/in/hardi-rajpara?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-blue-600 hover:text-blue-800 mt-4 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Team Member Card - 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={profile_photo_3}
                alt="Team Member 3"
              />
              <h4 className="text-xl font-semibold text-gray-700">
                Suhani Prajapati
              </h4>
              <p className="text-gray-500">Team Member</p>
              <a
                href="https://linkedin.com/in/emilywhite"
                className="text-blue-600 hover:text-blue-800 mt-4 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods Section */}
        <div className="my-16 dark:bg-gray-900 text-white py-12 px-6 rounded-lg">
          <h3 className="text-3xl font-bold mb-6">Other Ways to Connect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold mb-2">Email Us</h4>
              <p className="text-lg">rojivadiyamayank@gmail.com</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
              <p className="text-lg">
                <a
                  href="https://instagram.com/journeyjunction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>{" "}
                |{" "}
                <a
                  href="https://twitter.com/journeyjunction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Call Us</h4>
              <p className="text-lg">+91 94294 23346</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 mb-8">
          <iframe
            className="mx-auto w-full max-w-md rounded-lg shadow-lg"
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Our Location"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
