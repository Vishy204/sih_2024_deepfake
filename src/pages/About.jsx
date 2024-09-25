import React from 'react';
import { Navbar } from "../components/Navbar";
import Footer from '../components/Footer';
import "../index.css";

const About = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden about" style={{ backgroundColor: '#111729' }}>
      <Navbar />

      <div className="flex flex-col items-center justify-center w-full pt-16 border-t-8 border-b-8 border-[#70B5ED] h-1/5 font-protest">
        <h1 className="text-[#70B5ED] text-[12vh]">About Us</h1>
      </div>

      <div className="flex flex-col items-center w-full py-10">
        <p className="text-[5vh] font-bold text-[#70B5ED]">Application Summary: User Focus Tracker</p>
        <p className="text-[3vh] mt-2 text-[#70B5ED] px-40 mb-[3vh] font-semibold">
          The User Focus Tracker is an innovative application designed to monitor and analyze user focus levels
          during various tasks. By leveraging advanced tracking techniques, the application provides insights
          into user engagement and concentration, helping individuals optimize their productivity and achieve
          their goals.
        </p>

        <h2 className="text-[4vh] font-bold text-[#70B5ED]">Key Features:</h2>
        <ul className="text-[#70B5ED] text-[3vh] mt-2 px-40 mb-[3vh] font-semibold list-disc">
          <li><strong>Real-Time Focus Monitoring:</strong> Continuously tracks user attention through integrated camera and audio analysis, identifying periods of high and low focus.</li>
          <li><strong>User-Friendly Interface:</strong> Intuitive dashboard that visualizes focus data through charts and graphs, making it easy for users to understand their focus patterns over time.</li>
          <li><strong>Focus Analytics:</strong> Provides detailed reports on focus trends, including average focus duration, peak focus times, and distractions encountered during tasks.</li>
          <li><strong>Custom Alerts and Notifications:</strong> Users can set personalized alerts to remind them to refocus or take breaks when attention levels drop below a certain threshold.</li>
          <li><strong>Goal Setting and Tracking:</strong> Allows users to set specific focus-related goals and track their progress, fostering a proactive approach to managing attention.</li>
          <li><strong>Privacy and Data Security:</strong> Ensures user privacy by implementing strict data protection measures and giving users full control over their data.</li>
        </ul>

        <h2 className="text-[4vh] font-bold text-[#70B5ED]">Use Cases:</h2>
        <ul className="text-[#70B5ED] text-[3vh] mt-2 px-40 mb-[3vh] font-semibold list-disc">
          <li>Ideal for students seeking to improve study habits and concentration during classes.</li>
          <li>Beneficial for professionals aiming to enhance productivity in the workplace.</li>
          <li>Useful for researchers studying attention spans and focus-related behaviors.</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default About;
