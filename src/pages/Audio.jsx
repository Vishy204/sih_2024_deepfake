import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

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

function AudioPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    result,
    metadata,
    mfcc1_64,
    mfcc2_64,
    mfcc3_64,
    result1,
    isDeepfake,
    full_prediction_string,
    transcribed_text,
    similarity,
    lip,
  } = location.state || {};

  // Function to convert Base64 string to Data URL
  const toDataURL = (base64String) => {
    return `data:image/png;base64,${base64String}`;
  };

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
          {/* Meta Data */}
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

          {/* MFCC Graphs */}
          <div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="border shadow-md bg-[#D9D9D9] rounded-md p-4">
                <h1 className="font-extrabold text-center text-black">
                  MFCC 1
                </h1>
                {mfcc1_64 ? (
                  <img
                    src={toDataURL(mfcc1_64)} // Use the toDataURL function
                    alt="MFCC 1"
                    className="mx-auto"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                ) : (
                  <p className="text-center">No image available for MFCC 1</p>
                )}
              </div>

              <div className="border shadow-md bg-[#D9D9D9] rounded-md p-4">
                <h1 className="font-extrabold text-center text-black">
                  MFCC 2
                </h1>
                {mfcc2_64 ? (
                  <img
                    src={toDataURL(mfcc2_64)} // Use the toDataURL function
                    alt="MFCC 2"
                    className="mx-auto"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                ) : (
                  <p className="text-center">No image available for MFCC 2</p>
                )}
              </div>

              <div className="border shadow-md bg-[#D9D9D9] rounded-md p-4">
                <h1 className="font-extrabold text-center text-black">
                  MFCC 3
                </h1>
                {mfcc3_64 ? (
                  <img
                    src={toDataURL(mfcc3_64)} // Use the toDataURL function
                    alt="MFCC 3"
                    className="mx-auto"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                ) : (
                  <p className="text-center">No image available for MFCC 3</p>
                )}
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className="flex flex-col content-center justify-center my-3 mx-auto w-[60%] min-h-[40vh] rounded-md bg-[#D9D9D9] mb-4 p-4">
            <h1 className="text-lg font-semibold text-center underline">
              Result
            </h1>
            <p className="px-6 font-medium leading-relaxed text-center">
              {result1 || "No result available"}
            </p>

            {similarity && (
              <>
                <p className="text-center">
                  Lip-Audio Consistency Score: {similarity}
                </p>
                <p className="text-center">
                  Audio actually spoken in the Video: {transcribed_text}
                </p>
                <p className="text-center">Conclusion: {lip}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AudioPage;
