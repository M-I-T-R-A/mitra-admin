import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Cibil from '../Charts/Cibil';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function CibilScore({ data }) {
    const classes = useStyles();

    return (
        <div >
            <b>Cibil Score: 600</b>
            <br></br>
            <Paper className={classes.paper}>
                <Cibil />
            </Paper>
            <br></br>
        </div>
    );
}