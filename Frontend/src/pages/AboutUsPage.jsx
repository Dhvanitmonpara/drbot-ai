import React from "react";
import heroImg from "../media/about-img.jpeg";
function AboutUsPage() {
  return (
    <div className="hero flex items-baseline bg-transparent min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h3 className="text-5xl font-bold">About Our Healthcare Chatbot</h3>
          <p className="py-6">
            Welcome to our Healthcare Chatbot platform, your digital companion
            in managing and navigating healthcare needs. Our chatbot is designed
            to provide seamless assistance and personalized support for a
            variety of healthcare-related inquiries, ensuring you get the
            information and help you need efficiently and effortlessly.
          </p>
          <button className="btn bg-[#3fba97] text-black hover:bg-white hover:text-[#3fba97] border-2 border-[#3fba97]">
            Get Started
          </button>
        </div>
        <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
}

export default AboutUsPage;
