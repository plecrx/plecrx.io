import {styled} from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: 'rgb(0, 0, 0, 0.2)',
    marginInline: '2em',
    display: "flex",
    flexDirection: "column"
}));

