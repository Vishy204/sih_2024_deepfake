  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Navbar from "../components/Navbar";
  import axios from "axios";
  import { Button } from "@mui/material";

  function Dashboard() {
    const [videoSrc, setVideoSrc] = useState(null);
    const [audioSrc, setAudioSrc] = useState(null); // State to store the audio source
    const [file, setFile] = useState(null); // State to store the selected file (either video or audio)
    const [fileFormat, setFileFormat] = useState(""); // State to store the file format (MIME type)
    const navigate = useNavigate(); // For navigating to other routes

    const handleFileUpload = (event) => {
      const selectedFile = event.target.files[0]; // Get the selected file
      setFile(selectedFile); // Store the file in state

      // Check if the file is video or audio and set preview accordingly
      if (selectedFile) {
        setFileFormat(selectedFile.type); // Set the file format state
        const fileURL = URL.createObjectURL(selectedFile);

        if (selectedFile.type.startsWith("video")) {
          setVideoSrc(fileURL); // Set the video preview URL
          setAudioSrc(null); // Reset audio if video is selected
        } else if (selectedFile.type.startsWith("audio")) {
          setAudioSrc(fileURL); // Set the audio preview URL
          setVideoSrc(null); // Reset video if audio is selected
        }
      }
    };

    const handleSubmit = async () => {
      if (!file) return;

      // Redirect to loader page while uploading
      navigate("/loader");

      // Create a FormData object to hold the file
      const formData = new FormData();
      formData.append("file", file);

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
      <div className="about">
        <Navbar />
        

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



          <input
            className="ml-[8%] my-3 text-white rounded-md pb-8"
            type="file"
            accept="video/*,audio/*"
            onChange={handleFileUpload}
          />

          {/* Video Preview */}
          {videoSrc && (
            <div className="flex flex-col text-white px-32">
              <video width="400" controls className="text-white">
                <source src={videoSrc} type={fileFormat} />
                Your browser does not support the video tag.
              </video>
              <div className="flex content-center justify-center my-3 border border-blue-600 bg-white hover:bg-purple-800 hover:text-white w-[26vw] h-[8vh] text-[5vh]">
                <Button onClick={handleSubmit} className="self-center my-3 mt-4 text-white w-[20vw] text-[5vh]">
                  Upload Video
                </Button>
              </div>
            </div>
          )}

          {/* Audio Preview */}
          {audioSrc && (
            <div className="flex flex-col text-white">
              <audio controls className="text-white">
                <source src={audioSrc} type={fileFormat} />
                Your browser does not support the audio tag.
              </audio>
              <div className="flex content-center justify-center my-3 border border-blue-600 bg-white">
                <Button onClick={handleSubmit} className="self-center my-3 mt-4 text-white">
                  Upload Audio
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  export default Dashboard;
