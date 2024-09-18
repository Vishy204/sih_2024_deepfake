import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
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
        similarity,micro,freq,gaze,lip,mfcc1_64,mfcc2_64,mfcc3_64
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
        similarity:null,micro:null,freq:null,gaze:null,lip:null,mfcc1_64:null,mfcc2_64:null,mfcc3_64:null
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

    return (
        <div>
            <h1>Analysis Results</h1>
            
            <p>Meta Data: {metadata ? metadata : 'No metadata available'}</p>
            <p>Prediction Result: {result ? result : 'No prediction result available'}</p>
            <p>Total Blinks: {total_blinks !== null ? total_blinks : 'No data available'}</p>
            <p>Irregular Blinks: {irregular_blinks !== null ? irregular_blinks : 'No data available'}</p>
            <p>Model Predicted String: {full_prediction_string ? full_prediction_string : 'No data available'}</p>
            <p>Frequency Predicted Value: {prediction ? prediction : 'No data available'}</p>
            <p>Transcribed Text: {transcribed_text ? transcribed_text : 'No transcribed text available'}</p>
            <p>Sync Score: {similarity ? similarity: 'No transcribed text available'}</p>
            <p>Lipnet Conclusion {lip ? lip: 'No transcribed text available'}</p>
            <p>Freqnet conclusion: {freq ? freq: 'No transcribed text available'}</p>
            <p>Microexpresion conclusion:  {micro ? micro: 'No transcribed text available'}</p>
            <p>GazeTracker: {gaze ? gaze: 'No transcribed text available'}</p>

            {/* Show the frame image if available */}
            {frame_base64 && (
                <div>
                    <h2>Frame Image (Predicted Deepfake Frame)</h2>
                    <img src={`data:image/png;base64,${frame_base64}`} alt="Predicted Deepfake Frame" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}

            {/* Show the DCT plot if available */}
            {dct_base64 && (
                <div>
                    <h2>DCT Plot</h2>
                    <img src={`data:image/png;base64,${dct_base64}`} alt="DCT Plot" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
            {mfcc1_64 && (
                <div>
                    <h2>DCT Plot</h2>
                    <img src={`data:image/png;base64,${mfcc1_64}`} alt="DCT Plot" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
            {mfcc2_64 && (
                <div>
                    <h2>DCT Plot</h2>
                    <img src={`data:image/png;base64,${mfcc2_64}`} alt="DCT Plot" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
            {mfcc3_64 && (
                <div>
                    <h2>DCT Plot</h2>
                    <img src={`data:image/png;base64,${mfcc3_64}`} alt="DCT Plot" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}

            {/* Show the eye tracker image if available */}
            {image_base64 && (
                <div>
                    <h2>Eye Tracker Plot</h2>
                    <img src={`data:image/png;base64,${image_base64}`} alt="Tracker Plot" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}

            {/* Show graph only if randomArray has data */}
            {randomArray.length > 0 ? (
                <div>
                    <h2>Prediction Graph</h2>
                    <Line data={data} />
                </div>
            ) : (
                <p>No prediction data to display.</p>
            )}

            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    );
}

export default ResultPage;
