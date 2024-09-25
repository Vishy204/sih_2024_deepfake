import * as React from "react";
import bannerImg from "../assets/homepage1.png";
import arrow1 from "../assets/arrow1.png";
import stayFocus from "../assets/StayFocus.png";
import clock from "../assets/clock.png";
import monitor from "../assets/monitor.png";
import dotGrid from "../assets/dotGrid.png";
import stats from "../assets/stats.png";
import { Navbar } from "../components/Navbar";
import DropDown from "../components/DropDown";
import Footer from "../components/Footer";

// import ImpCard from "../components/ImpCard";

export function Homepage() {
  return (
    <>
     <Navbar />
    <div>
     
      <div className="flex flex-col w-full hero-section h-50 ">
        <img
          alt="..."
          src={bannerImg}
          className="self-center object-cover w-full"
        />
        <div className="flex flex-col items-center self-center justify-center w-full sub-hero-section">
          <p className="text-[#FFFFFF] text-4xl my-5 outline-white">
            Exposing the Fake Revealing the Truth
          </p>
          <p className="text-[#BAC0C5] my-2 w-48 self-center text-nowrap text-center">
            TrueSight: We Unmask Deepfakes
          </p>
          <p className="text-[#70B5ED] text-xs my-2 flex">
            <div className="flex items-center justify-center flex-shrink-0">
              <img alt="..." src={arrow1} className="w-8 mx-2 " />
            </div>{" "}
            Unmasking Deepfakes, One Frame at a Time
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="impImage bg-[#111729] flex justify-center  items-center text-white">
          <div
            style={{ height: "12rem", width: "12rem" }}
            className="container  bg-[#111729] flex flex-shrink-0 items-center justify-center max-w-[90%] "
          >
            <div className="relative w-full h-full mx-2 ml-10 psuedoimage">
              <img
                alt="..."
                src={monitor}
                className="absolute top-0 h-40 start-0 "
              />
              <img alt="..." src={dotGrid} className="absolute w-20 -left-5" />
            </div>
          </div>

          <p className="text-3xl">
            Trust What {" "}
            <span className="text-3xl text-[#70B5ED]">You See and Hear</span>
          </p>
        </div>
        <div className="impImage bg-[#111729] flex justify-center  items-center text-white max-w-[90%] ">
          <p className="ml-5 text-3xl max-w-[64%] text-wrap">
            Detect Deepfakes, {" "}
            <span className="text-3xl text-[#70B5ED]">Protect Authenticity</span>
          </p>
          <div
            style={{ height: "12rem", width: "12rem" }}
            className="container  bg-[#111729] flex-shrink-0 
            flex items-center justify-center  "
          >
            <div className="relative w-full h-full ml-10 psuedoimage max-w-[90%]">
              <img
                alt="..."
                src={stats}
                className="absolute top-0 h-40 start-0 "
              />
              <img alt="..." src={dotGrid} className="absolute w-20 -left-5" />
            </div>
          </div>
        </div>
        <div className="impImage bg-[#111729] flex justify-center items-center  text-white max-w-[90%]">
          <div
            style={{ height: "12rem", width: "12rem" }}
            className="container flex-shrink-0 bg-[#111729] flex items-center justify-center mx-2 "
          >
            <div className="relative w-full h-full ml-10 psuedoimage">
              <img
                alt="..."
                src={clock}
                className="absolute top-0 h-40 start-0 "
              />
              <img alt="..." src={dotGrid} className="absolute w-20 -left-5" />
            </div>
          </div>

          <p className="ml-5 text-3xl max-w-[64%] text-wrap">
            Beyond the Surface: {" "}
            <span className="text-3xl text-[#70B5ED]">Audio and Video Authenticity</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full mt-32 h-fit outline-white ">
        <DropDown />
        <div className="w-32">
          <img alt="..." src={stayFocus} className="w-30" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default Homepage;
