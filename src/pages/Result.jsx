import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LineChart from "../components/LineChart";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import MonitorPng from "../assets/monitor.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    result,
    randomArray,
    metadata,
    frame_base64,
    dct_base64,
    image_base64,
    total_blinks,
    irregular_blinks,
    full_prediction_string,
    transcribed_text,
    similarity,
    micro,
    freq,
    gaze,
    lip,
    mfcc1_64,
    mfcc2_64,
    mfcc3_64,
    final_result,
    result1,
    videoFileName,
    isDeepfake,
  } = location.state || {};

  // Construct the video URL from the filename
  const videoUrl = videoFileName
    ? `http://127.0.0.1:5000/uploads/${videoFileName}`
    : null;

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-3">
        <div className="flex flex-col content-center justify-center">
          {/* Micro-Expression Analysis */}
          <div className="grid grid-cols-2 gap-2">
            <div className="content-center justify-center mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md">
              <div className="max-w-sm overflow-hidden bg-[#D9D9D9] flex flex-col justify-center content-center ml-6">
                <h1 className="font-extrabold text-center text-black">
                  Micro-Expression Analysis
                </h1>
                <h2 className="font-bold text-center text-black">MesoNet</h2>
              </div>
              <div className="bg-[#0D0F15] rounded-md p-4 w-[95%] h-[200px] mt-3 flex justify-center content-center ml-2">
                <LineChart data={randomArray} />
              </div>
              <p className="m-3 font-semibold text-center">
                Conclusion: {micro || "Some good content from the backend"}
              </p>
            </div>

            {/* Gaze Tracker */}
            <div className="content-center justify-center mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md">
              <div className="max-w-sm overflow-hidden bg-[#D9D9D9] flex flex-col justify-center content-center ml-6">
                <h1 className="font-extrabold text-center text-black">
                  Gaze-Tracer
                </h1>
              </div>
              <div className="rounded-md p-4 w-[95%] h-[200px] my-3 flex justify-evenly content-center ml-2">
                <div className="bg-[#0D0F15] flex w-[50%]  justify-center content-center rounded-md">
                  <img src={MonitorPng} alt="Monitor" />
                </div>
                <div className="flex flex-col content-center justify-evenly">
                  <div className="text-black">
                    <p className="font-semibold">Total Blinks: {total_blinks}%</p>
                  </div>
                  <div className="text-black">
                    <p className="font-semibold">
                      Irregular Blinks: {irregular_blinks}%
                    </p>
                  </div>
                </div>
              </div>
              <p className="m-3 font-semibold text-center">
                Conclusion: {gaze || "Some good content from the backend"}
              </p>
            </div>
          </div>

          {/* Frequency Analysis */}
          <div className="grid grid-cols-1 p-3">
            <div className="content-center justify-center mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md">
              <h1 className="font-extrabold text-center text-black">
                Frequency Analysis
              </h1>
              <div className="rounded-md p-4 w-[95%] h-[200px] my-3 flex flex-col justify-evenly content-center ml-2">
                <div className="flex content-around justify-around w-full h-full gap-2">
                  <div className="bg-[#0D0F15] flex w-[50%] pb-2 justify-evenly content-center rounded-md">
                    <img src={MonitorPng} alt="Frequency Analysis Plot" />
                  </div>
                  <div className="bg-[#0D0F15] flex w-[50%] pb-2 justify-center content-center rounded-md">
                    <img src={MonitorPng} alt="Frequency Analysis Plot" />
                  </div>
                </div>
              </div>
              <p className="m-3 font-semibold text-center">
                Result: {freq || "Give some user-friendly output"}
              </p>
              <p className="m-3 font-semibold text-center">
                Conclusion: Some good content from the backend
              </p>
            </div>
          </div>

          {/* Video Section */}
          {videoUrl && (
            <div className="flex justify-center my-4">
              <video
                style={{ width: "66vw", height: "66vh" }}
                controls
                className="border border-gray-700 rounded-lg"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Deepfake Speech Detection */}
          {isDeepfake !== null && (
            <div className="flex flex-col content-center justify-center p-6 rounded-lg shadow-lg">
              <h1 className="text-lg font-semibold text-center underline">
                Speech Detection
              </h1>
              <p className="px-6 font-medium leading-relaxed text-center">
                {isDeepfake ? "Deepfake Detected" : "No Deepfake Found"}
              </p>
              <p className="mt-4 text-center text-gray-500">
                {full_prediction_string}
              </p>
              {similarity && <p>Lip-Audio Consistency Score: {similarity}</p>}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResultPage;
