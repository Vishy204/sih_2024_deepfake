import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div>
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
          HOW TO STAY FOCUSED WHILE WORK
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
          Work for 25 minutes, then take a 5-minute break. This helps maintain
          focus and prevents burnout.
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
          HOW TO AVOID DISTRACTIONS
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
          Limit Digital Distractions: Use apps that block distracting websites
          and notifications during focus periods. Consider silencing your phone
          or using “Do Not Disturb” mode to minimize interruptions.
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
          HOW TO BE MORE PRODUCTIVE
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
          Set Clear Goals: Define specific, achievable goals for each day or
          week. Use the SMART criteria (Specific, Measurable, Achievable,
          Relevant, Time-bound) to guide your goal-setting
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
          WAYS TO MAINTAIN A HEALTHY LIFESTYLE
        </AccordionSummary>
        <AccordionDetails className="bg-[#0D0F15] text-[#BAC0C5]">
          Eat Whole Foods: Focus on fruits, vegetables, whole grains, lean
          proteins, and healthy fats. Limit processed foods, added sugars, and
          high-sodium snacks. Stay Hydrated: Drink plenty of water throughout
          the day, aiming for about 8 glasses (2 liters) or more if you’re
          active.
        </AccordionDetails>
      </Accordion>
      

    </div>
  );
}
