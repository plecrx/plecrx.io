import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps as StyledAccordionProps } from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import {AccordionSummary} from "./accordionSummary";
import {AccordionDetails} from "./accordionDetails";
import {useState} from "react";

const StyledAccordion = styled((props: StyledAccordionProps) => (
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

type AccordionProps = {
    data: {
        title: string,
        details: string[]
    }[]
}

const Accordion = ({data}: AccordionProps) => {
    const [expanded, setExpanded] = useState<number|null>(0);

    const handleChange = (index: number) => {
        setExpanded(expanded !== index ? index : null);
    };

    return (
        <div>
            {data.map((input, i) => (
                <StyledAccordion key={`accordion-${i}`} expanded={expanded === i} onChange={() => handleChange(i)}>
                    <AccordionSummary aria-controls={`panel-${i}-content`} id={`panel-${i}-header`}>
                        <Typography style={{marginInline: "auto", fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.25em"}} className="text-gray-400">
                            {input.title}
                        </Typography>
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
