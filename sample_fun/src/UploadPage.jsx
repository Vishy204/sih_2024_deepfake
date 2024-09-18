import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <div className="App">
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
