import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const StyledAccordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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
    '&:expanded': {
        margin: 'auto',
    },
}));

const AccordionSummary = styled((props) => (
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: 'rgb(0, 0, 0, 0.2)',
    marginInline: '2em',
    display: "flex",
    flexDirection: "column"
}));

const Accordion = (props) => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (index) => {
        setExpanded(expanded !== index ? index : null);
    };

    return (
        <div>
            {props.data.map((input, i) => (
                <StyledAccordion expanded={expanded === i} onChange={() => handleChange(i)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{marginInline: "auto", fontFamily: 'Ubuntu Mono, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', fontSize: "1.25em"}} className="text-gray-400">{input.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {input.details.map(detail => (
                            <Typography className={"text-white"} style={{fontFamily: 'ui-sans-serif, system-ui, "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
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
