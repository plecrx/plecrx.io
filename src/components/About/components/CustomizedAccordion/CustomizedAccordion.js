import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({
    root: {
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
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        borderRadius: "1em",
        borderBottom: '1px solid #212226',
        backgroundColor: "#2f3238",
        marginBottom: 3,
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
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        marginInline: '2em',
        display: "flex",
        flexDirection: "column"
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
