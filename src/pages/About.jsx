import React from 'react';
import Navbar from "../components/Navbar";
import "../index.css";

const About = () => {
  const info = [
    {
      head: "What are Mel-Frequency Cepstral Coefficients (MFCC), and how are they applied in audio and video processing?",
      info: (
        <>Mel-frequency cepstral coefficients (MFCC) are widely used in speech and audio processing to
        represent the short-term power spectrum of a sound signal. This is crucial for analyzing voice
        patterns in speech processing. In deepfake detection, they help identify discrepancies in audio by
        capturing subtle inconsistencies in speech characteristics in manipulated audio.</>
      ),
    },
    {
      head: "How does a digital forensics-based model detect deepfakes?",
      info: (
        <>This model performs a digital forensic analysis by examining various aspects of a video to detect
        potential manipulation. It inspects the metadata for traces of editing software or unusual codecs,
        analyzes frame consistency to identify unnatural transitions, checks facial landmarks for limited or
        abnormal movements, and scrutinizes compression artifacts for irregular patterns. These combined
        techniques allow the model to effectively assess whether a video is likely to be a deepfake.</>
      ),
    },
    {
      head: "How does LipNet work, and what role does it play in deepfake detection?",
      info: (
        <>LipNet is a deep learning model designed to read lips by analyzing video frames of a speaker's
        mouth movements. It captures the temporal dynamics of lip motion to predict spoken words without
        relying on audio input. In the context of deepfake detection, LipNet can be used to detect
        discrepancies between visual lip movements and the corresponding audio. Since deepfakes often
        have subtle misalignments between speech and lip movement, LipNet can help identify these
        inconsistencies, making it a powerful tool in detecting video-based manipulation.</>
      ),
    },
    {
      head: "What is MesoNet, and how does it contribute to identifying manipulated facial features in videos?",
      info: (
        <>MesoNet is a deep learning architecture specifically designed for deepfake detection, focusing on
        identifying manipulated facial features in videos. It analyzes mesoscopic properties—mid-level
        patterns in facial images that are altered during the creation of deepfakes. By detecting subtle
        artifacts and distortions introduced by deepfake generation methods, MesoNet can differentiate
        between real and fake faces.</>
      ),
    },
    {
      head: "How does gaze tracking improve deepfake detection?",
      info: (
        <>Gaze tracking is a technique that monitors eye movements to detect irregularities, such as abnormal
        blinking intervals or unusual blink counts, which are often signs of deepfake manipulations. By
        calculating the eye aspect ratio (EAR), these irregularities can be quantified to identify mismatches
        between expected and observed blink patterns, thus helping in detecting deepfakes.</>
      ),
    },
  ];

  const getItems = () => {
    return info;
  };

  return (
    <div className="flex flex-col w-full h-full about overflow-hidden">
      <Navbar />

      <div className="flex flex-col justify-center items-center h-1/5 font-protest border-b-8 border-t-8 border-white w-full pt-16">
        <h1 className="text-white text-[12vh]">About Us</h1>
      </div>

      <div className="flex flex-col items-center py-10 w-full">
        <p className="text-[5vh] font-bold">Introduction</p>
        <p className="text-[3vh] mt-2 text-white px-40 mb-[3vh] font-semibold">With the rapid advancement of deepfake technology, distinguishing between authentic and
manipulated media has become increasingly difficult. Deepfakes pose serious threats, from
spreading misinformation to eroding trust in digital content. To address this, we developed
TrueSight, a system that not only detects deepfakes with high accuracy using advanced AI models
but also provides a detailed report, explaining the exact reasons why a video is classified as real or
fake.
Below are a few questions that provide deeper insights into the various models we have
implemented.</p>
        {getItems().map((item, index) => (
          <div
            key={index}
            className={`flex font-suse border-b-4 border-white py-6 w-full max-w-[80vw] ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="flex-1">
              <h2 className="text-[5vh] font-bold">{item.head}</h2>
              <p className="text-[3vh] mt-2 text-yellow-400 font-semibold">{item.info}</p>
            </div>
            <div className="flex-none w-[30%] px-6">
              <img src="./guy.png" alt="Illustration" className="w-full h-[30vh] object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
