import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: '90vh',
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



export default function DashboardFeed({ person }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}><b>ID:</b> {person.id}</Typography>
                    <Typography className={classes.heading}>{person.name}</Typography>
                    <Typography className={classes.secondaryHeading}>{person.phoneNumber}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b>Gender: </b>{person.gender}
                    </Typography>

                </AccordionDetails>
                <AccordionDetails>

                    <Typography>
                        <b>Annual Income: </b>{person.annualIncome}
                    </Typography>

                </AccordionDetails>
                <AccordionDetails>
                    <Typography>
                        <b>Aadhar: </b>{person.aadhar}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}