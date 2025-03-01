import React, { useEffect, useState } from 'react'
import { Typography, CircularProgress } from '@material-ui/core';
import FeedCard from './FeedCard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {
    Link
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios'

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


function AcceptLoan({ match }) {
    const {
        params: { id }
    } = match;
    const classes = useStyles();

    //const [startDate, setStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
    //const [endDate, setEndDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const [approvedLoan, setApprovedLoan] = useState({
        approvedAmount: 0.0,
        rateOfInterest: 0.0,
        timeFactor: 0.0,
        startDate: "2000-10-10",
        endDate: "2000-10-10"
    });

    const handleStartDateChange = (date) => {
        setApprovedLoan({
            ...approvedLoan,
            startDate: date
        });
    };

    const handleEndDateChange = (date) => {
        setApprovedLoan({
            ...approvedLoan,
            endDate: date
        });
    };

    const updateField = e => {
        setApprovedLoan({
            ...approvedLoan,
            [e.target.name]: e.target.value
        });
        console.log(approvedLoan);
    };

    const submitLoanApplication = () => {
        axios.post(`http://20.198.81.29:5000/admin/customer/approve/${id}`, approvedLoan) //'http://localhost:8000' 'https://bharatdebtrelief-backend.herokuapp.com'
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div>
            <div style={{ display: 'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h3>Loan Grant Form</h3>
                            <form className={classes.root} noValidate autoComplete="off" >
                                <TextField id="outlined-basic" label="Approved Amount" variant="outlined" name="approvedAmount" onChange={updateField}/>
                                <br></br><br></br><TextField id="outlined-basic" label="Rate of Interest" variant="outlined" name="rateOfInterest"  onChange={updateField}/>
                                <br></br><br></br><TextField id="outlined-basic" label="Time factor" variant="outlined" name="timeFactor"  onChange={updateField}/>
                                <br></br><br></br><TextField
                                    id="datetime-local"
                                    label="Start Date"
                                    type="date"
                                    onChange={updateField}
                                    defaultValue="2021-01-01"
                                    name="startDate"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <br></br><br></br><TextField
                                    id="datetime-local"
                                    label="End Date"
                                    type="date"
                                    onChange={updateField}
                                    defaultValue="2021-01-01"
                                    name="endDate"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                /><br></br><br></br>
                                <Button type="submit" variant="contained" color="primary" onClick={submitLoanApplication} component={Link} to={`/customers`}>Approve</Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}


export default AcceptLoan;