import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

const Landing: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Main Landing Section */}
      <div className="pt-40 min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Your Smile, <br /> Our Priority
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            We provide exceptional dental care for the Indang, Cavite community.
            With decades of trusted service, we're now embracing digital
            innovation for your convenience.
          </p>

          <Link to="/login">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all">
              Login
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/images/silan.jpg"
            alt="Dental Clinic"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Services Offered Section */}
      <div
        id="services"
        className="py-16 px-10 md:px-20 relative"
        style={{
          background: "linear-gradient(to right, #c8e6c9 60%, #66bb6a 100%)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-10">
          Services Offered
        </h2>
        <div
          id="scroll-container"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth relative z-10 mx-16"
        >
          {/* Service Cards */}
          {[
            {
              title: "Extraction",
              description:
                "Safe and effective tooth extractions to alleviate pain and prevent infections.",
              img: "src/assets/images/extraction.png",
            },
            {
              title: "Oral Prophylaxis",
              description:
                "Professional cleaning to maintain healthy gums and teeth.",
              img: "src/assets/images/oral prophylaxis.png",
            },
            {
              title: "Dental Fillings",
              description:
                "Restore decayed or damaged teeth with durable, high-quality fillings.",
              img: "src/assets/images/dental fillings.png",
            },
            {
              title: "Dentures",
              description:
                "Custom-made dentures to restore your smile and functionality.",
              img: "src/assets/images/dentures.png",
            },
            {
              title: "Braces",
              description:
                "Straighten and align teeth with expert orthodontic care.",
              img: "src/assets/images/braces.png",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative min-w-[250px] h-64 bg-gray-100 rounded-lg overflow-hidden shadow-2xl flex-shrink-0 transition-all"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
              <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white bg-black bg-opacity-50 px-2 py-1 rounded-lg z-10 group-hover:hidden">
                {service.title}
              </h3>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform translate-y-full">
                {service.description}
              </div>
            </div>
          ))}
        </div>
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-[100%] w-16 text-white flex justify-center items-center z-20 group" onClick={() => document.getElementById("scroll-container")?.scrollBy({ left: -300, behavior: "smooth" })}>
          <span className="text-2xl z-10">&#x2039;</span>
        </button>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[100%] w-16 text-white flex justify-center items-center z-20 group" onClick={() => document.getElementById("scroll-container")?.scrollBy({ left: 300, behavior: "smooth" })}>
          <span className="text-2xl z-10">&#x203A;</span>
        </button>
      </div>

      {/* Contact Us Section */}
      <div id="contact" className="bg-gradient-to-br from-green-100 to-green-200 py-16 px-10 flex justify-center items-center">
        <div className="relative bg-white w-full max-w-6xl rounded-[30px] shadow-xl px-10 py-12 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">
              Get in <span className="text-green-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-700">
              Have a question or feedback? We're here to help!
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Phone number *"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                placeholder="Enter text here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                SEND
              </button>
            </form>
            <div className="flex space-x-6 pt-4">
              <div className="text-gray-700">
                <p>
                  <a href="tel:+639385951894" className="flex items-center text-green-600 hover:underline">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" /> PHONE
                  </a>
                </p>
                <p>+639385951894</p>
              </div>
              <div className="text-gray-700">
                <p>
                  <a href="https://www.facebook.com/silan.dental.clinic.2024" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:underline">
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 mr-2" /> FACEBOOK
                  </a>
                </p>
                <p>Silan Dental Clinic</p>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.424399603986!2d120.8566392!3d14.1777919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5817e7fc7d95%3A0x7e6197fa24c716f0!2sSilan%20Dental%20Clinic!5e0!3m2!1sen!2sph!4v1688256583791!5m2!1sen!2sph"
              className="w-full h-full border-0"
              title="Dental Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
