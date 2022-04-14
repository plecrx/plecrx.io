import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import {AccordionSummary} from "./accordionSummary";
import {AccordionDetails} from "./accordionDetails";

const StyledAccordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    backgroundColor: 'rgb(33, 34, 38, 0.2)',
    border: '1px solid #212226',
    boxShadow: 'none',
    borderRadius: "3em",

    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&:expanded': {
        margin: 'auto',
    },
}));

const Accordion = (props) => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (index) => {
        setExpanded(expanded !== index ? index : null);
    };

    return (
        <div>
            {props.data.map((input, i) => (
                <StyledAccordion key={`accordion-${i}`} expanded={expanded === i} onChange={() => handleChange(i)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{marginInline: "auto", fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.25em"}} className="text-gray-400">{input.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {input.details.map((detail, id) => (
                            <Typography key={`accordion-${i}-details-${id}`} className={"text-white"} style={{fontFamily: "'Fira Mono', monospace"}}>
                                {detail}
                            </Typography>
                        ))}
                    </AccordionDetails>
                </StyledAccordion>
            ))}
        </div>
    );
}

export default Accordion
