import React from 'react';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {Accordion} from "./Accordion";
import {AccordionSummary} from "./AccordionSummary";
import {AccordionDetails} from "./AccordionDetails";

const CustomizedAccordion = (props) => {
    const [expanded, setExpanded] = React.useState(0);

    const handleChange = (index) => {
        setExpanded(expanded !== index ? index : null);
    };

    return (
        <div>
            {props.data.map((input, i) => (
                <Accordion expanded={expanded === i} onChange={() => handleChange(i)}>
                    <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon className="text-yellow-700"/>}>
                        <Typography style={{marginInline: "auto", fontFamily: 'Ubuntu Mono, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', fontSize: "1.25em"}} className="text-gray-400">{input.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        {input.details.map(detail => (
                            <Typography className={"text-white"} style={{fontFamily: 'ui-sans-serif, system-ui, "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
                                {detail}
                            </Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}

        </div>
    );
}

export default CustomizedAccordion
