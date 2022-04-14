import {styled} from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import React from "react";

export const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} className='text-yellow-700' />}
        {...props}
    />
))(({ theme }) => ({
    borderRadius: "1em",
    borderBottom: '1px solid #212226',
    backgroundColor: "#2f3238",
    marginBottom: 3,
    minHeight: 56,
    cursor: 'pointer',
    '&:expanded': {
        minHeight: 56,
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));
