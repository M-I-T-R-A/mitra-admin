import React, { useEffect, useState } from 'react'
import { Typography, CircularProgress } from '@material-ui/core';
import FeedCard2 from './FeedCard2';

function PendingLoans(){
    const [customers, setCustomers] = useState(null);
    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = async () => {
        const res = await fetch('http://20.198.81.29:5000/admin/customer/waiting')
        const data = await res.json();
        console.log(data);
        setCustomers(data);
    }

    if (!customers) return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '100vh' }}>
            <CircularProgress />
        </div>
    ) 
    else {
        return (

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <Typography variant="h4" gutterBottom>
                    Pending Loan Applications
                </Typography>
                {customers.map(customer => <div>
                    <FeedCard2
                        person={customer}
                    />
                    <div style={{ margin: '10px'}} />
                </div>
                )}
            </div>
        )
    }
}

export default PendingLoans;