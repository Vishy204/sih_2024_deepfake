import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@mui/material";

function UploadPage() {
  const [videoFile, setVideoFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const navigate = useNavigate();

  // Handle video file input change
  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);

    // Video preview
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
    }
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
      formData.append("video", videoFile);
    }
    if (audioFile) {
      formData.append("audio", audioFile);
    }

    try {
      // Redirect to LoaderPage while uploading
      navigate("/loader");

      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const {
        result,
        random_array,
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
        final_result,
        result1,
      } = response.data;

      // Navigate to ResultPage with the result and other details
      navigate("/result", {
        state: {
          result,
          randomArray: random_array || [],
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
          final_result,
          result1,
        },
      });
    } catch (error) {
      console.error("Error uploading the files:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex-col content-center justify-center w-full mt-0">
        <div className="flex flex-col pt-[15vh] text-white w-full items-center">
          <h1 className="text-[6vh] font-bold my-6 text-center">
            Welcome to TrueSight – Your Reliable Deepfake Detection Tool
          </h1>
          <div className="w-[80%]  py-8 flex justify-center content-center">
            <div className="text-[4vh] w-[50vw] flex justify-center content-center text-center my-auto">
              At TrueSight, we leverage AI to help you detect if a file is
              genuine or manipulated, targeting deepfake content.
            </div>
            <img
              src="/upload.jpeg"
              className="w-[30vw] h-[40vh]"
              alt="Upload Preview"
            />
          </div>

          <h2 className="text-[6vh] font-semibold my-8">How It Works:</h2>
          <ul className="custom-square-list text-[4vh] mb-8 max-w-[90%]">
            <li>
              <strong>Upload Your Media:</strong> Upload a video (.mp4) or audio
              file (.wav).
            </li>
            <li>
              <strong>Real-Time Analysis:</strong> Our system will analyze it
              for deepfake inconsistencies.
            </li>
            <li>
              <strong>Instant Results:</strong> You’ll receive a detailed report
              on the analysis.
            </li>
          </ul>

          {/* Video and Audio Upload */}
          <div className="flex flex-col content-center justify-center mb-8 text-center text-white">
            <h3 className="text-[3vh] text-center">
              Upload Audio (.wav) or Video (.mp4) for Analysis
            </h3>
            <div className="flex content-center justify-center h-32">
              <div className="flex flex-col content-center justify-center mx-2 my-6 border h-28 ">
                <label>Upload Video:</label>
                <input
                  type="file"
                  onChange={handleVideoFileChange}
                  accept="video/*"
                  className="mx-auto ml-4"
                />
              </div>
              <div className="flex flex-col items-center justify-center mx-2 my-6 border h-28">
                <label className="mb-2">Upload Audio:</label>
                <input
                  type="file"
                  onChange={handleAudioFileChange}
                  accept="audio/wav"
                  className="self-center mx-auto ml-14"
                />
              </div>
            </div>
          </div>

          {/* Video Preview */}
          {videoSrc && (
            <div className="my-4">
              <video width="400" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Upload Button */}
          <Button
            onClick={handleUpload}
            className="px-6 py-3 text-white bg-red-500 hover:bg-yellow-500"
          >
            Upload and Process
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UploadPage;
