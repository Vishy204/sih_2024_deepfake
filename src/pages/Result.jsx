import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

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

    // Extract result, randomArray, metadata, frame_base64, dct_base64, image_base64, total_blinks, irregular_blinks, full_prediction_string, and transcribed_text from location state
    const {
        result,
        randomArray,
        metadata,
        prediction,
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
        mfcc3_64
    } = location.state || { 
        result: null, 
        randomArray: [], 
        metadata: null, 
        prediction: null,
        frame_base64: null, 
        dct_base64: null, 
        image_base64: null, 
        total_blinks: null, 
        irregular_blinks: null,
        full_prediction_string: null,
        transcribed_text: null,
        similarity: null,
        micro: null,
        freq: null,
        gaze: null,
        lip: null,
        mfcc1_64: null,
        mfcc2_64: null,
        mfcc3_64: null
    };

    // Debugging - log the result, randomArray, metadata, and images to see what is being passed
    useEffect(() => {
        console.log("Result:", result);
        console.log("Random Array:", randomArray);
        console.log("Metadata:", metadata);
        console.log("Frame Image (Base64):", frame_base64);
        console.log("DCT Image (Base64):", dct_base64);
        console.log("Tracker Image (Base64):", image_base64);
        console.log("Total Blinks:", total_blinks);
        console.log("Irregular Blinks:", irregular_blinks);
        console.log("Full Prediction String:", full_prediction_string);
        console.log("Transcribed Text:", transcribed_text);
    }, [result, randomArray, metadata, frame_base64, dct_base64, image_base64, total_blinks, irregular_blinks, full_prediction_string, transcribed_text]);

    useEffect(() => {
      AOS.init({
          duration: 2000, // Duration of animations
          easing: 'ease-in-out', // Animation easing function
          once: true, // Whether animation should happen only once
      });
  }, []);
  
    // Prepare data for the chart
    const data = {
        labels: randomArray.map((_, index) => `Point ${index + 1}`),  // Labels for each point on the x-axis
        datasets: [
            {
                label: 'Predictions',
                data: randomArray,  // Data to plot on the chart
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    useEffect(() => {
      const handleScroll = () => {
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize on load
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    return (
      <div className="about text-white px-10 w-[100vw] h-[300vh] flex flex-col items-center justify-center">
        <div className="w-[95vw] h-[250vh] border-black border-4 shadow-[-10px_10px_0_0_#000000] flex flex-col items-center">
        <div className="bg-white h-[2vh] lg:h-[8vh] w-full flex items-center border-black border-b-2 pl-[0.5vw]">
          <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1vh] lg:h-[5vh]" />
        </div>
          <p className="text-center text-[7vh] my-4 font-noto [text-shadow:10px_10px_20px_var(--tw-shadow-color)] shadow-[#6a3b6e]">Analysis Results</p>
          
          {metadata && <p className="text-center">Meta Data: {metadata}</p>}
  
          {full_prediction_string && full_prediction_string !== 0 &&  
          <div className="bg-red-500 my-4 w-[60vw] text-center border-black border-4 shadow-[-10px_10px_0_0_#000000]" data-aos="zoom-in">
              { <p>Model Predicted String: {full_prediction_string}</p>}
              {prediction !== undefined && prediction !== 0 && <p>Frequency Predicted Value: {prediction}</p>}
              {transcribed_text && transcribed_text !== 0 && <p>Transcribed Text: {transcribed_text}</p>}
              {similarity !== undefined && similarity !== 0 && <p>Sync Score: {similarity}</p>}
              {lip !== undefined && lip !== 0 && <p>Lipnet Conclusion: {lip}</p>}
          </div>
}
  
          {/* Container for side-by-side content */}
          <div className="flex w-[60vw] justify-between my-8 " >
              {/* DCT Plot */}
              {frame_base64 && (
                  <div className="bg-red-500 w-[48%] p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000]" data-aos="zoom-in">
                      <h2>Frame Image (Predicted Deepfake Frame)</h2>
                      <h2>DCT Plot</h2>
                      <img src={`data:image/png;base64,${dct_base64}`} alt="DCT Plot" className="h-[40vh] w-full" />
  
                      {freq !== undefined && freq !== 0 && <p>Freqnet Conclusion: {freq}</p>}
                  </div>
              )}
  
              {/* Eye Tracker Plot */}
              {image_base64 && (
                  <div className="bg-red-500 w-[48%] p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000] " data-aos="zoom-in">
                      {total_blinks !== undefined && <p>Total Blinks: {total_blinks}</p>}
                      {irregular_blinks !== undefined && <p>Irregular Blinks: {irregular_blinks}</p>}
                      <h2>Eye Tracker Plot</h2>
                      <img src={`data:image/png;base64,${image_base64}`} alt="Eye Tracker Plot" className="w-full" />
  
                      {gaze !== undefined && gaze !== 0 && <p>GazeTracker Conclusion: {gaze}</p>}
                  </div>
              )}
          </div>
  
          {mfcc1_64 && (
              <div className="text-center mt-4 border-black border-4 shadow-[-20px_20px_0_0_#000000]" data-aos="zoom-in">
                {result && <p>Prediction Result: {result}</p>}
                  <h2>MFCC Plot 1</h2>
                  <img src={`data:image/png;base64,${mfcc1_64}`} alt="MFCC Plot 1" className="w-[70vw] h-[50vh]" />
              </div>
          )}
          {mfcc2_64 && (
              <div className="text-center mt-12 border-black border-4 shadow-[-20px_20px_0_0_#000000]" data-aos="zoom-in">
                  <h2>MFCC Plot 2</h2>
                  <img src={`data:image/png;base64,${mfcc2_64}`} alt="MFCC Plot 2" className="w-[70vw] h-[50vh]" />
              </div>
          )}
          {mfcc3_64 && (
              <div className="text-center mt-12 border-black border-4 shadow-[-20px_20px_0_0_#000000]" data-aos="zoom-in">
                  <h2>MFCC Plot 3</h2>
                  <img src={`data:image/png;base64,${mfcc3_64}`} alt="MFCC Plot 3" className="w-[70vw] h-[50vh]" />
                  
              </div>
          )}
  
          {randomArray.length > 0 && (
              <div className="bg-red-500 w-[60vw] p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000]" data-aos="zoom-in">
                  <h2>Prediction Graph</h2>
                  <Line data={data} />
                  {result && <p>Prediction Result: {result}</p>}
                  {micro !== undefined && micro !== 0 && <p>Microexpression Conclusion: {micro}</p>}
              </div>
          )}
  
          <button onClick={() => navigate('/')} className="my-[10vh] bg-blue-500 text-white py-2 px-4 rounded hover:underline w-[20vw] hover:bg-yellow-500 border-[#525252] hover:border-black border-4 shadow-[-10px_10px_0_0_#525252] hover:shadow-[-10px_10px_0_0_#000000]">
              Go Back
          </button>
          </div>
      </div>
  );
  
}

export default ResultPage;
