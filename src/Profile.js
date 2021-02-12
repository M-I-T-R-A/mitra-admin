import React, { useEffect, useState } from 'react'
import { Typography, CircularProgress } from '@material-ui/core';
import FeedCard from './FeedCard';

function Profile({ match }) {
    const {
        params: { id }
    } = match;

    const [customer, setCustomer] = useState(null);
    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = async () => {
        const res = await fetch(`http://localhost:5000/admin/customer/${id}`)
        const data = await res.json();
        console.log(data);
        setCustomer(data);
    }

    if (!customer) return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '100vh' }}>
            <CircularProgress />
        </div>
    )
    else {
        return (

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <Typography variant="h4" gutterBottom>
                    Profile
                </Typography>

                <FeedCard
                    data={customer}
                />
            </div>
        )
    }
}

export default Profile;