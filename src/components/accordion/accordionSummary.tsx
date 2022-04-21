import React from "react";
import {styled} from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';


export const AccordionSummary = styled((props: AccordionSummaryProps) => (
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
