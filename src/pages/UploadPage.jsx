import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Button} from "@mui/material"

function UploadPage() {
    const [videoFile, setVideoFile] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const navigate = useNavigate();

    // Handle video file input change
    const handleVideoFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    // Handle audio file input change
    const handleAudioFileChange = (e) => {
        setAudioFile(e.target.files[0]);
    };

    // Handle the upload of both audio and video
    const handleUpload = async () => {
        if (!videoFile && !audioFile) {
            alert("Please select a video or audio file.");
            return;
        }

        const formData = new FormData();
        if (videoFile) {
            formData.append('video', videoFile); // Add video file if selected
        }
        if (audioFile) {
            formData.append('audio', audioFile); // Add audio file if selected
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const { result, random_array, metadata, prediction, frame_base64, dct_base64, image_base64, total_blinks, irregular_blinks, full_prediction_string, transcribed_text,similarity,micro,freq,gaze,lip,mfcc1_64,mfcc2_64,mfcc3_64 } = response.data;

            // Navigate to ResultPage with the result, randomArray, metadata, and encoded images
            navigate('/result', { 
                state: { 
                    result, 
                    randomArray: random_array || [], 
                    metadata, 
                    prediction,
                    frame_base64,  // Add frame_base64 image
                    dct_base64,    // Add dct_base64 image
                    image_base64,
                    total_blinks,
                    irregular_blinks,
                    full_prediction_string,
                    transcribed_text,
                    similarity,
                    micro,freq,gaze,lip,mfcc1_64,mfcc2_64,mfcc3_64// Add transcribed_text
                } 
            });
        } catch (error) {
            console.error('Error uploading the files:', error);
        }
    };

    return (
      
        <div className="App about">

<div className=" flex flex-col pt-[15vh] text-white w-full ">
          <h1 className="text-[6vh] font-bold my-6 font-noto flex pl-24">
            Welcome to TrueSight – Your Reliable Deepfake Detection Tool
          </h1>
          <div className="flex justify-center border-b-8 border-white py-8">
          <p className="text-[4vh] mb-6 font-inria inline w-[50vw]  pr-4">
            In an era where media manipulation is becoming increasingly sophisticated, detecting the
            authenticity of video and audio content is more important than ever. At TrueSight, we
            leverage cutting-edge AI technology to help you identify whether a file is genuine or
            manipulated, specifically targeting deepfake content.
          </p>
          <img src="/upload.jpeg" className="w-[30vw] h-[40vh] inline "/>
          </div>
          <h2 className="text-[6vh] font-semibold my-8 font-noto flex items-center pl-24 ">How It Works:</h2>
    <ul className="custom-square-list">
    <li>
      <div className="text-[4vh] mb-4 text-left font-inria pr-24">
        <strong>Upload Your Media:</strong> You can upload either a video (in .mp4 format) or an
        audio file (in .wav format).
      </div>
    </li>
    <li>
      <div className="text-[4vh] mb-4 text-left font-inria pr-24">
        <strong>Real-Time Analysis:</strong> Once your file is uploaded, our system will analyze it
        using advanced deep learning models trained to detect inconsistencies typical of deepfakes.
      </div>
    </li>
    <li>
      <div className="text-[4vh] mb-8 text-left font-inria pr-24">
        <strong>Instant Results:</strong> After processing, you will receive a clear report
        indicating whether the content is real or a deepfake, along with detailed reasons behind the
        classification.
      </div>
    </li>
  </ul>



          
        </div>

            <h1>Upload Audio (.wav) or Video for Analysis</h1>
            
            {/* Video Upload */}
            <div>
                <label>Upload Video:</label>
                <input type="file" onChange={handleVideoFileChange} accept="video/*" />
            </div>

            {/* Audio Upload */}
            <div>
                <label>Upload Audio (.wav):</label>
                <input type="file" onChange={handleAudioFileChange} accept="audio/wav" />
            </div>

            <button onClick={handleUpload}>Upload and Process</button>

        </div>
    );
}

export default UploadPage;