import {styled} from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import React from "react";

export const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon />}
        {...props}
    />
))(() => ({
    borderRadius: "1em",
    borderBottom: '1px solid #212226',
    backgroundColor: "#2f3238",
    marginBottom: 3,
    minHeight: 56,
    '&$expanded': {
        minHeight: 56,
    },
    '& .MuiAccordionSummary-content': {
        '&$expanded': {
            margin: '12px 0',
        },
    },
}));
