import React, { useEffect, useState } from 'react'
import { Typography, CircularProgress } from '@material-ui/core';
import FeedCard from './FeedCard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
    Link
  } from 'react-router-dom';

function Profile({ match }) {
    const {
        params: { id }
    } = match;

    const [customer, setCustomer] = useState(null);
    const [loanId, setLoanId] = useState(null);


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
                                <p>Profile</p>
                                <Button variant="contained" color="primary" component={Link} to={`/applications/accept/${loanId}`}>Consider</Button>
                                <Button variant="contained" color="red" component={Link} to={`/applications`} onClick={reject}>Reject</Button>
                            </Typography>
                        </Grid>
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