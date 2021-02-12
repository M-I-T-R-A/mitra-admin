import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
        paddingTop: '56.25%', // 16:9
    },
    mediaRoot: {
        maxWidth: 345,
    }
}));

export default function Tab1({ data }) {
    const classes = useStyles();
    let text;
    if (data.haveCurrentLoan) {
        text = <p>having loan</p>;
    } else {
        text = <p>Currently no loan is being sactioned or being applied.</p>;
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <center><b>Home</b></center>
                    <p>Bill Amount: {data.customer.electricityBill}</p>
                    <center>
                        <Card className={classes.mediaRoot}>
                            <CardMedia
                                className={classes.media}
                                image={data.customer.electricityBillImageUrl}
                                title="Bill"
                            />
                        </Card>
                    </center>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <center><b>Shop</b></center>
                    <p>Bill Amount: {data.shop.electricityAmount}</p>
                    <center>
                        <Card className={classes.mediaRoot}>
                            <CardMedia
                                className={classes.media}
                                image={data.shop.electricityBillImageUrl}
                                title="Bill"
                            />
                        </Card>
                    </center>
                </Paper>
            </Grid>
        </Grid>
    );
}