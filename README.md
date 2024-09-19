# TrueSight: Advanced Deepfake Detection with Explanatory Insights
TrueSight is an advanced deepfake detection framework designed to not only identify manipulated media but also explain why a video is classified as a deepfake. Leveraging state-of-the-art AI models, TrueSight goes beyond simple detection, offering detailed insights into the underlying reasons for the classification. This project integrates various deep learning techniques to provide a comprehensive and transparent analysis of video authenticity. 
  
TrueSight is particularly useful for researchers, developers, and organizations looking for reliable, explainable AI in the fight against media manipulation. By utilizing cutting-edge detection models and incorporating advanced visual and audio analysis, TrueSight stands out as a unique tool in the growing field of deepfake detection.

## AI Models Utilized in TrueSight

TrueSight employs a diverse set of AI models and techniques to ensure robust and reliable deepfake detection. Each model plays a critical role in analyzing different aspects of the video to provide a comprehensive evaluation:  

- **Forensic Analysis:** This model inspects inconsistencies in the visual data by detecting artifacts, compression issues, and irregularities in pixel distribution. It helps identify manipulated content by examining digital fingerprints left by deepfake generation methods.
  
- **LipNet:** LipNet is employed to perform lip reading, analyzing the synchronization between spoken words and lip movements. By comparing audio and visual cues, it identifies mismatches that may occur in deepfake videos where voice and lip movements are not aligned.
  
<div align="center">
  <img src="./images/Lipnet.png" alt="Alt text" width="800" height="365">
  <p align="center">
    <i>Figure 1: Custom-built Lipnet Architecture.</i>
  </p>
</div>

- **MesoNet:** MesoNet is specifically designed for deepfake detection, focusing on mesoscopic properties of images. It analyzes subtle visual patterns that are typically invisible to the human eye but indicate tampered media.
    
<div align="center">
  <img src="./images/Mesonet.png" alt="Alt text" width="650" height="375">
  <p align="center">
    <i>Figure 2: Custom-built Mesonet Architecture.</i>
  </p>
</div>

- **Gaze Tracker:** This model monitors the subject's eye movements, tracking irregularities in blinking patterns and gaze direction. Since deepfake models often struggle with replicating natural eye movements, the gaze tracker is an effective tool in detecting anomalies.
    
<div align="center">
  <img src="./images/Gaze tracker.png" alt="Alt text" width="600" height="350">
  <p align="center">
    <i>Figure 3:  Gaze-tracker Architecture.</i>
  </p>
</div>
