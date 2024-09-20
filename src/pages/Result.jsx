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
        mfcc3_64,
        final_result
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
        mfcc3_64: null,
        final_result:null
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
        labels: randomArray.map((_, index) => Point ${index + 1}),  // Labels for each point on the x-axis
        datasets: [
            {
                label: 'Predictions',
                data: randomArray,  // Data to plot on the chart
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: 1,
                color: 'white',
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
      <div className="about text-white px-10 w-[100vw] h-auto flex flex-col items-center justify-center">
        <div className="w-[95vw] h-auto border-black my-12 border-4 shadow-[-10px_10px_0_0_#000000] flex flex-col items-center">
        <div className="bg-white h-[2vh] lg:h-[8vh] w-full flex items-center border-black border-b-2 pl-[0.5vw]">
          <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1vh] lg:h-[5vh]" />
        </div>
        <p className="text-center text-[7vh] my-4 font-noto [text-shadow:-10px_10px_10px_var(--tw-shadow-color)] shadow-[#6a3b6e]">
  Analysis Results
</p>

{metadata && (
  <div className="text-[4vh] bg-red-500 border-black border-4 shadow-[-10px_10px_0_0_#000000] my-4 w-[80vw] text-center" data-aos="zoom-in">
    {/* Split the metadata string by '\n' and map each part to a <p> element */}
    <p className="text-[6vh] font-extrabold">METADATA</p>
    {metadata.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </div>
)}

{full_prediction_string && full_prediction_string !== 0 && (
  <div className="bg-red-500 my-4 w-[80vw] text-center border-black border-4 shadow-[-10px_10px_0_0_#000000] text-[4vh]" data-aos="zoom-in">
    <p className="text-[6vh] font-extrabold">LIPNET</p>
    <p> <span className="underline pr-4">Lip Reading Transcript: </span>{full_prediction_string}</p>
   
    {transcribed_text && transcribed_text !== 0 && <p><span className="underline pr-4">Transcribed Text: </span>{transcribed_text}</p>}
    {similarity !== undefined&& <p><span className="underline pr-4">Lip-audio Consistency Score:</span> {similarity}</p>}
    {lip !== undefined && lip !== 0 && <p className='mt-4 border-t-4 border-black bg-yellow-400 py-4 text-gray-500 mt-4 border-t-4 border-black'><span className="underline">Conclusion:</span> {lip}</p>}
  </div>
)}

  
          {/* Container for side-by-side content */}
          <div className="flex w-[80vw] justify-between my-8 text-[4vh]" >
              {/* DCT Plot */}
              {frame_base64 && (
                  <div className="bg-red-500 w-[48%] p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000]" data-aos="zoom-in">
                    <p className="text-[6vh] font-extrabold">FREQNET</p>
                      <span className="underline pr-4">DCT Plot</span>
                      <img src={data:image/png;base64,${dct_base64}} alt="DCT Plot" className="h-[70vh] w-full" />
  
                      {freq !== undefined && freq !== 0 && <p className='mt-4 border-t-4 border-black bg-yellow-400 py-4 text-gray-500'><span className="underline">Conclusion: </span>{freq}</p>}
                  </div>
              )}
  
              {/* Eye Tracker Plot */}
              {image_base64 && (
                  <div className="bg-red-500 w-[48%] p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000] " data-aos="zoom-in">
                    <p className="text-[6vh] font-extrabold">GAZE TRACKER</p>

                      {total_blinks !== undefined && <p><span className="underline pr-4">Total Blinks: </span>{total_blinks}</p>}
                      {irregular_blinks !== undefined && <p><span className="underline pr-4">Irregular Blinks: </span>{irregular_blinks}</p>}
                      <h2><span className="underline pr-4">Eye Tracker Plot</span></h2>
                      <img src={data:image/png;base64,${image_base64}} alt="Eye Tracker Plot" className="w-full h-[60vh]" />
  
                      {gaze !== undefined && gaze !== 0 && <p className='mt-4 border-t-4 border-black bg-yellow-400 py-4 text-gray-500'><span className="underline">Conclusion:</span>{gaze}</p>}
                  </div>
              )}
          </div>
  
          {mfcc1_64 && (
              <div className="text-center mt-4 border-black border-4 shadow-[-20px_20px_0_0_#000000]" data-aos="zoom-in">
                
                  <img src={data:image/png;base64,${mfcc1_64}} alt="MFCC Plot 1" className="w-[80vw] h-[50vh]" />
              </div>
          )}
          {mfcc2_64 && (
              <div className="text-center mt-12 border-black border-4 shadow-[-20px_20px_0_0_#000000]" data-aos="zoom-in">
            
                  <img src={data:image/png;base64,${mfcc2_64}} alt="MFCC Plot 2" className="w-[80vw] h-[50vh]" />
              </div>
          )}
          {mfcc3_64 && (
              <div className="text-center mt-12 border-black border-4 shadow-[-20px_20px_0_0_#000000]" data-aos="zoom-in">
                 
                  <img src={data:image/png;base64,${mfcc3_64}} alt="MFCC Plot 3" className="w-[80vw] h-[50vh]" />
                  
              </div>
          )}
  
          {randomArray.length > 0 && (
              <div className="bg-red-500 w-[80vw] text-[4vh] p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000]" data-aos="zoom-in">
                <p className="text-[6vh] font-extrabold">MESO NET</p>
                  <h2><span className="underline pr-4 ">Prediction Graph</span></h2>
                  <Line data={data} />
                  {result && <p><span className="underline pr-4">MicroExpression Analysis Graph: </span>{result}</p>}
                  {micro !== undefined && micro !== 0 && <p className='mt-4 border-t-4 border-black bg-yellow-400 py-4 text-gray-500'><span className="underline">Conclusion: </span>{micro}</p>}
              </div>
          )}

          {final_result && (
            <div className="bg-yellow-400 w-[80vw] my-10 p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000] text-[5vh] text-gray-500" data-aos="zoom-in">
                <p>{final_result}</p>
              </div>
          )}

{result && (
            <div className="bg-yellow-400 w-[80vw] my-10 p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000] text-[5vh] text-gray-500" data-aos="zoom-in">
                <p>{result}</p>
              </div>
          )}
  
          <button onClick={() => navigate('/')} className="my-[10vh] bg-red-500 text-white py-2 px-4 rounded hover:underline w-[20vw] hover:bg-yellow-500 border-[#525252] hover:border-black border-4 shadow-[-10px_10px_0_0_#525252] hover:shadow-[-10px_10px_0_0_#000000]">
              Go Back
          </button>
          </div>
      </div>
  );
  
}

export default ResultPage;