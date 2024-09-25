import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div className="w-screen">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color: "#FFFFFF",
          }}
        >
          Exposing the Fake, Revealing the Truth
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
          Empower your digital integrity with our advanced deepfake detection
          system for both video and audio. Stay ahead of misinformation.
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#1E1E1E]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color: "#FFFFFF",
          }}
        >
          Unmasking Deepfakes, One Frame at a Time
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Ensure authenticity with our cutting-edge video and audio analysis that separates reality from deception.
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#1E1E1E]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color: "#FFFFFF",
          }}
        >
          Trust What You See and Hear
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Our technology scrutinizes videos and audio to give you confidence in what’s real and what’s not. Your truth matters.
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#1E1E1E]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            backgroundColor: "#0D0F15",
            borderBottom: "2px solid #35BAF2",
            color: "#FFFFFF",
          }}
        >
          Detect Deepfakes, Protect Authenticity
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
        Combining video and audio verification, we help safeguard your content from deepfake manipulation.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
