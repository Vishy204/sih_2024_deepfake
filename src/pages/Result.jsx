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
  useEffect(() => {
    console.log("Result:", similarity);
    console.log("Random Array:", transcribed_text);
  }, [similarity, micro, transcribed_text]);

  return (
    <>
      <Navbar />
      <div className="p-3">
        <div className="flex flex-col content-center justify-center">
          <div className="content-center flex justify-center mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md p-4">
            <div className="max-w-sm overflow-hidden bg-[#D9D9D9] flex flex-col justify-center content-center ml-6">
              <h1 className="font-extrabold text-center text-black">
                Meta Data
              </h1>
              <p className="m-3 font-semibold text-center">
                {metadata || "No metadata available"}
              </p>
            </div>
          </div>
          {/* Micro-Expression Analysis */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="content-center justify-center mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md p-4">
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
            <div className="content-center justify-center mx-2 my-3 border shadow-md bg-[#D9D9D9] rounded-md p-4">
              <div className="max-w-sm overflow-hidden bg-[#D9D9D9] flex flex-col justify-center content-center ml-6">
                <h1 className="font-extrabold text-center text-black">
                  Gaze-Tracer
                </h1>
              </div>
              <div className="rounded-md p-4 w-[95%] h-[200px] my-3 flex justify-evenly content-center ml-2">
                {image_base64 && (
                  <div className="bg-[#0D0F15] flex w-[50%] justify-center content-center rounded-md">
                    <img
                      src={`data:image/png;base64,${image_base64}`} // Ensure base64 image has the correct format prefix
                      alt="image base 64"
                      className="max-w-full max-h-full object-contain" // Ensure the image fits in the container
                    />{" "}
                     
                  </div>
                )}
                <div className="flex flex-col content-center justify-evenly">
                  <div className="text-black">
                    <p className="font-semibold">
                      Total Blinks: {total_blinks}
                    </p>
                  </div>
                  <div className="text-black">
                    <p className="font-semibold">
                      Irregular Blinks: {irregular_blinks}
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
          <div className="content-center flex flex-col justify-center border shadow-md bg-[#D9D9D9] rounded-md p-4 mb-4">
            <h1 className="font-extrabold text-center text-black text-xl">
              Frequency Analysis
            </h1>
            <div className="rounded-md h-[60%] mt-0 my-6 pt-6 flex flex-col justify-evenly content-center ml-2 ">
              <div className="flex content-around justify-around w-full h-full gap-2 ">
                {/* DCT Base64 Image */}
                {dct_base64 && (
                  <div className="bg-[#0D0F15] flex  p-10 justify-center content-center rounded-md">
                    <img
                      src={`data:image/png;base64,${dct_base64}`}
                      alt="DCT Base64"
                      className="min-w-full min-h-full object-contain p-3 h-100"
                    />
                  </div>
                )}
              </div>
            </div>

            <p className="m-3 font-semibold text-center">
              Conclusion: {freq || "It doesn't exist"}
            </p>
          </div>

          {/* Video Section */}
          {videoUrl && (
            <div className="flex justify-center mb-4">
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
            <div className="flex flex-col content-center justify-center my-3 mx-auto w-[60%] min-h-[40vh] rounded-md bg-[#D9D9D9] mb-4 p-4">
              <h1 className="text-lg font-semibold text-center underline">
                Speech Detection
              </h1>

              <p className="mt-4 text-center text-gray-500">
                <span className="font-bold">Speech In Video : </span>
                {transcribed_text}
              </p>
              <p className="mt-4 text-center text-gray-500">
                <span className="font-bold">Speech detected by model : </span>
                {full_prediction_string}
              </p>

              {similarity && (
                <p className="text-center text-gray-500">
                  <span className="font-bold">
                    Lip-Audio Consistency Score:
                  </span>{" "}
                  {similarity}
                </p>
              )}
              <p className="mt-4 text-center ">
                <span className="font-bold">Conclusion : </span>
                {lip}
              </p>
            </div>
          )}
        </div>
      </div>
      {final_result && (
        <div className="flex flex-col content-center justify-center my-3 mx-auto w-[60%] min-h-[10vh] rounded-md bg-[#D9D9D9] mb-4 p-4">
          <p className="font-bold text-center">{final_result}</p>
        </div>
      )}
      <Footer />
    </>
  );
}

export default ResultPage;
