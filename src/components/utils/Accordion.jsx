/* eslint-disable react/prop-types */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ControlledAccordions({ value }) {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = value.items;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        width: "65%",
        padding: "20px",
      }}
    >
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            justifyContent: "center",
            "& .MuiAccordionSummary-content": {
              justifyContent: isMobile ? "flex-start" : "center",
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "black",
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              },
            }}
          >
            {items[0].title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            {items[0].description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
            justifyContent: "center",
            "& .MuiAccordionSummary-content": {
              justifyContent: isMobile ? "flex-start" : "center",
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              },
            }}
          >
            {items[1].title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            {items[1].description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{
            justifyContent: "center",
            "& .MuiAccordionSummary-content": {
              justifyContent: isMobile ? "flex-start" : "center",
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              },
            }}
          >
            {items[2].title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            {items[2].description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            justifyContent: "center",
            "& .MuiAccordionSummary-content": {
              justifyContent: isMobile ? "flex-start" : "center",
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              },
            }}
          >
            {items[3].title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            {items[3].description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            justifyContent: "center",
            "& .MuiAccordionSummary-content": {
              justifyContent: isMobile ? "flex-start" : "center",
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              },
            }}
          >
            {items[4].title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            {items[4].description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: "black",
          background: "radial-gradient(cornsilk, transparent)",
        }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel6bh-header"
          sx={{
            justifyContent: "center",
            "& .MuiAccordionSummary-content": {
              justifyContent: isMobile ? "flex-start" : "center",
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontSize: "22px",
              transition: "transform 0.3s ease, text-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              },
            }}
          >
            {items[5].title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "19px",
            }}
          >
            {items[5].description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
