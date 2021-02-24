import React, { useEffect, useState } from 'react'
import { Typography, CircularProgress } from '@material-ui/core';
import FeedCard from './FeedCard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SmartModal from './SmartModal'
import {
    Link
} from 'react-router-dom';
import { red } from '@material-ui/core/colors';

const styles = theme => ({

    containedRed: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        "&:hover": {
            backgroundColor: red[700],
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: red[500]
            }
        }
    }
});


function Profile({ match }) {
    const {
        params: { id }
    } = match;

    const classes = styles;

    const [customer, setCustomer] = useState(null);
    const [loanId, setLoanId] = useState(null);
    const [demandedAmount, setDemandedAMount] = useState(null);


    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = async () => {
        const res = await fetch(`http://20.198.81.29:5000/admin/customer/${id}`)
        const data = await res.json();
        console.log(data);
        setCustomer(data);
        const res2 = await fetch(`http://20.198.81.29:5000/customer/loan/instant/current/${id}`);
        const data2 = await res2.json();
        console.log(data2);
        setLoanId(data2.id);
        setDemandedAMount(data2.demandedAmount);
    }

    const reject = async () => {
        const res2 = await fetch(`http://20.198.81.29:5000/admin/customer/reject/${loanId}`)
    }

    if (!customer) return (
        <div style={{ display: 'inline', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '100vh' }}>
            <CircularProgress />
        </div>
    )
    else {
        return (
            <div>
                <div style={{ display: 'inline', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>
                                <h4><b>Profile</b></h4>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <h2><b>Requested Amount: {demandedAmount}</b></h2>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <span style={{ padding: "5px" }}><Button variant="contained" color="primary" component={Link} to={`/applications/accept/${loanId}`}>Consider</Button></span>
                                <span style={{ padding: "5px" }}><Button variant="contained" className={classes.containedRed} component={Link} to={`/applications`} onClick={reject}>Reject</Button></span>
                            </div>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ alignContent: "left" }}>
                        <Typography variant="h4" gutterBottom>
                            <SmartModal amount={demandedAmount} id={id}/>
                        </Typography>
                    </Grid>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FeedCard
                        data={customer}
                    />
                </div>
            </div >
        )
    }
}

export default Profile;