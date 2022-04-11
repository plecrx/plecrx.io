import MuiAccordion from "@mui/material/Accordion";
import React from "react";

export const Accordion = ((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props}  children={<></>}/>
))(() => ({
    backgroundColor: "#212226",
    border: '1px solid #212226',
    boxShadow: 'none',
    borderRadius: "3em",
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&$expanded': {
        margin: 'auto',
    },
}));
