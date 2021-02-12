import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Demo from '../Charts/Demo'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    mediaRoot: {
        maxWidth: 345,
    }
}));

export default function Tab6({ data }) {
    const classes = useStyles();
    let text;

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Demo />
                </Paper>
                <br></br>
                <br></br>
                <Paper className={classes.paper}>
                    <Demo />
                </Paper>
                <br></br>
                <br></br>
                <Paper className={classes.paper}>
                    <Demo />
                </Paper>

            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Demo />
                </Paper>
                <br></br>
                <br></br>
                <Paper className={classes.paper}>
                    <Demo />
                </Paper>
                <br></br>
                <br></br>
                <Paper className={classes.paper}>
                    <Demo />
                </Paper>
            </Grid>
        </Grid>
    );
}