import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AllCustomers from './AllCustomers'
import {
  Link
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 700,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));


export default function FeedCard2({ person }) {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{person.name}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Customer ID: {person.id}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column}>
            <Typography>
              Phone Number: {person.phoneNumber}<br />
              Demanded Loan Amount:
              <br />
              <b>{person.instantLoanDTO.demandedAmount}</b>
            </Typography>
          </div>
          <div className={classes.column}>

          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Status: {person.instantLoanDTO.approval}
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" color="primary" component={Link} to={`/applications/profile/${person.id}`}>
            See Profile
          </Button>
        </AccordionActions>
      </Accordion>
    </div>

  );
}