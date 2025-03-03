import React from "react";
import contactImage from "../assets/contact.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactMe() {
  return (
    <section className="bg-gray-900 text-gray-900
py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={contactImage}
            alt="Contact Me"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Social Media Links */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Connect with Me</h2>
          <p className="text-gray-300 mb-6">
            Feel free to reach out via my social media platforms.
          </p>

          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row justify-center md:justify-start items-center">
            <a
              href="https://www.facebook.com/profile.php?id=100026425036282"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-500 hover:text-blue-600 transition transform hover:scale-105"
            >
              <FaFacebook className="text-3xl" /> <span className="text-lg">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/rana_abhay_singh47/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-pink-500 hover:text-pink-600 transition transform hover:scale-105"
            >
              <FaInstagram className="text-3xl" /> <span className="text-lg">Instagram</span>
            </a>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row justify-center md:justify-start items-center mt-6">
            <a
              href="https://www.linkedin.com/in/abhay-singh-a62b00253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-500 transition transform hover:scale-105"
            >
              <FaLinkedin className="text-3xl" /> <span className="text-lg">LinkedIn</span>
            </a>
            <a
              href="mailto:abhaysingh20022003@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-gray-400 transition transform hover:scale-105"
            >
              <FaEnvelope className="text-3xl" /> <span className="text-lg">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
