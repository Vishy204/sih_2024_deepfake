import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { Line } from 'react-chartjs-2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LineChart from "../components/LineChart";
import { Navbar } from "../components/Navbar";
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

    const {
        result, randomArray, metadata, frame_base64, dct_base64, image_base64, total_blinks,
        irregular_blinks, full_prediction_string, transcribed_text, similarity, micro, freq, gaze, 
        lip, mfcc1_64, mfcc2_64, mfcc3_64, final_result, result1, videoFileName, isDeepfake
    } = location.state || {};

    // Construct the video URL from the filename
    const videoUrl = videoFileName ? `http://127.0.0.1:5000/uploads/${videoFileName}` : null;

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    // Prepare data for the chart
    const data = {
        labels: randomArray.map((_, index) => `Point ${index + 1}`),
        datasets: [
            {
                label: 'Predictions',
                data: randomArray,
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: 1,
                color: 'white',
            },
        ],
    };

    return (
        <>
            <Navbar />
            <div className="about text-white px-10 w-[100vw] h-auto flex flex-col items-center justify-center">
                <div className="w-[95vw] h-auto border-black my-12 border-4 shadow-[-10px_10px_0_0_#000000] flex flex-col items-center">
                    <div className="bg-white h-[2vh] lg:h-[8vh] w-full flex items-center border-black border-b-2 pl-[0.5vw]">
                        <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1vh] lg:h-[5vh]" />
                    </div>
                    <p className="text-center text-[7vh] my-4 font-noto shadow-[#6a3b6e]">Analysis Results</p>

                    {metadata && (
                        <div className="text-[4vh] bg-red-500 border-black border-4 shadow-[-10px_10px_0_0_#000000] my-4 w-[80vw] text-center" data-aos="zoom-in">
                            <p className="text-[6vh] font-extrabold">METADATA</p>
                            {metadata.split('\n').map((line, index) => <p key={index}>{line}</p>)}
                        </div>
                    )}

                    <div className="flex w-[80vw] justify-between my-8 text-[4vh]">
                        {frame_base64 && (
                            <div className="bg-red-500 w-[48%] p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000]" data-aos="zoom-in">
                                <p className="text-[6vh] font-extrabold">FREQNET</p>
                                <img src={`data:image/png;base64,${dct_base64}`} alt="DCT Plot" className="h-[70vh] w-full" />
                                {freq && <p className="py-4 mt-4 text-gray-500 bg-yellow-400"><span className="underline">Conclusion: </span>{freq}</p>}
                            </div>
                        )}

                        {image_base64 && (
                            <div className="bg-red-500 w-[48%] p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000]" data-aos="zoom-in">
                                <p className="text-[6vh] font-extrabold">GAZE TRACKER</p>
                                <img src={`data:image/png;base64,${image_base64}`} alt="Eye Tracker Plot" className="w-full h-[60vh]" />
                                {gaze && <p className="py-4 mt-4 text-gray-500 bg-yellow-400"><span className="underline">Conclusion: </span>{gaze}</p>}
                            </div>
                        )}
                    </div>

                    {/* Video Section */}
                    {videoUrl && (
                        <div className="flex justify-center flex-1 my-4">
                            <video style={{ width: "66vw", height: "66vh" }} controls className="border border-gray-700 rounded-lg">
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    {/* Deepfake Speech Detection */}
                    {isDeepfake !== null && (
                        <div className="flex flex-col content-center justify-center p-6 rounded-lg shadow-lg">
                            <h1 className="text-lg font-semibold text-center underline">Speech Detection</h1>
                            <p className="px-6 font-medium leading-relaxed text-center">{isDeepfake ? "Deepfake Detected" : "No Deepfake Found"}</p>
                            <p className="mt-4 text-center text-gray-500">{full_prediction_string}</p>
                            {similarity && <p>Lip-Audio Consistency Score: {similarity}</p>}
                        </div>
                    )}

                    {randomArray.length > 0 && (
                        <div className="bg-red-500 w-[80vw] text-[4vh] p-4 text-center border-black border-4 shadow-[-10px_10px_0_0_#000000]" data-aos="zoom-in">
                            <p className="text-[6vh] font-extrabold">MESO NET</p>
                            <LineChart data={randomArray} />
                        </div>
                    )}
                </div>
                <button onClick={() => navigate('/')} className="my-[10vh] bg-red-500 text-white py-2 px-4 rounded hover:bg-yellow-500">
                    Go Back
                </button>
            </div>
        </>
    );
}

export default ResultPage;
