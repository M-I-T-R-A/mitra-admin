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
        width: '80vh',
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

function AccordianBills({data}){

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion onChange={handleChange('panel2')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                <Typography className={classes.heading}><b>Date: 12/12/2000</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Supplier Name: {data.supplierName}
                    <br></br>
                    Supplier Phone Number: {data.supplierMobile}
                    <br></br>
                    Bill: <a href={data.imageUrl} target="_blank">Image</a>
                  </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default function Bills({ data }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {data.map(bill =>
                    <div>
                        <AccordianBills data={bill} />
                    </div>
                )}
        </div>
    );
}