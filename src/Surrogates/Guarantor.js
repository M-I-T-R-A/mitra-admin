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
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    mediaRoot: {
        maxWidth: 345,
    }
}));

export default function Guarantor({ data }) {
    const classes = useStyles();
    let text;

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <b>Personal Information</b>
                    <br></br><br></br>
                    <b>Full Name: </b> {data.name} <br></br>
                    <b>Gender: </b> {data.gender} <br></br>
                    <b>Phone Number: </b> {data.phoneNumber} <br></br>
                    <b>Annual Income: </b> {data.annualIncome} <br></br>
                </Paper>
                <br></br>
                <br></br>
                <Paper className={classes.paper}>
                    <b>Aadhar Card</b><br></br><br></br>
                    <b>Aadhar Card Number: {data.aadhar}</b>
                    <br></br><br></br>
                    <center>
                        <Card className={classes.mediaRoot}>
                            <CardMedia
                                className={classes.media}
                                image={data.aadharCardFrontImageUrl}
                                title="Front Side"
                            />
                            <br></br>
                            <CardMedia
                                className={classes.media}
                                image={data.aadharCardBackImageUrl}
                                title="Back Side"
                            />
                        </Card></center>
                </Paper>

            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <b>Residence Address</b><br></br><br></br>
                    <b>First Line: </b> {data.residenceAddress.firstLine} <br></br>
                    <b>Second Line: </b> {data.residenceAddress.secondLine} <br></br>
                    <b>City: </b> {data.residenceAddress.city} <br></br>
                    <b>State: </b> {data.residenceAddress.state} <br></br>
                    <b>Pin Code: </b> {data.residenceAddress.pincode} <br></br>
                </Paper>
                <br></br>
                <br></br>
                <Paper className={classes.paper}>
                    <b>PAN Card</b><br></br><br></br>
                    <b>PAN Card Number: {data.pan}</b>
                    <br></br><br></br>
                    <center>
                        <Card className={classes.mediaRoot}>
                            <CardMedia
                                className={classes.media}
                                image={data.panCardImageUrl}
                                title="Front Side"
                            />
                        </Card></center>
                </Paper>
            </Grid>
        </Grid>
    );
}