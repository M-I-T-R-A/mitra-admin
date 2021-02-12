import React, { useEffect, useState } from 'react'
import { Typography, CircularProgress } from '@material-ui/core';
import FeedCard from './FeedCard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Profile({ match }) {
    const {
        params: { id }
    } = match;

    const [customer, setCustomer] = useState(null);
    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = async () => {
        const res = await fetch(`http://20.198.81.29:5000/admin/customer/${id}`)
        const data = await res.json();
        console.log(data);
        setCustomer(data);
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
                                Profile
                    
                            <Button variant="contained" color="green">
                                Consider
                    </Button>
                            <Button variant="contained" color="red">
                                Reject
                     </Button></Typography>
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