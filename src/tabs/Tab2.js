import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function Tab1({ data }) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {data.map(bankAccount =>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}><b>AC/No:</b> {bankAccount.accountNumber}</Typography>
                        <Typography className={classes.secondaryHeading}><b>IFSC:</b> {bankAccount.ifsc}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <b>Bank Statments:</b>
                        <br></br>
                        <ul>
                            {bankAccount.bankStatementImageUrls.map((value, index) => {
                                return <li key={index}><a href={value}>Bank Statement {index+1}</a></li>
                            })}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            )}

        </div>
    );
}