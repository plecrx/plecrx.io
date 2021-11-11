import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {fontFamily} from "tailwindcss/lib/plugins";

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "#2f3238",
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: '#D1D5DB'
    },
}))(MuiAccordionDetails);

const CustomizedAccordion = (props) => {
    const [expanded, setExpanded] = React.useState(0);

    const handleChange = (index) => {
        setExpanded(expanded !== index ? index : null);
    };

    return (
        <div>
            {props.data.map((input, i) => (
                <Accordion expanded={expanded === i} onChange={() => handleChange(i)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon className="text-yellow-700"/>}>
                        <Typography style={{fontFamily: 'Ubuntu Mono, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}} className="text-gray-400">{input.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{fontFamily: 'Ubuntu Mono, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>{input.details}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

        </div>
    );
}

export default CustomizedAccordion
