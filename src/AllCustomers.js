import React, { useEffect, useState } from 'react'
import { Typography, CircularProgress } from '@material-ui/core';
import DashboardFeed from './DashboardFeed';

function AllCustomers(){
    const [customers, setCustomers] = useState(null);
    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = async () => {
        const res = await fetch('http://20.198.81.29:5000/admin/customer')
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
                    Customers
                </Typography>
                {customers.map(customer => <div>
                    <DashboardFeed
                        person={customer}
                        /*title={blog.title}
                        publisher={blog.publisher}
                        body={blog.text}
                        likes={blog.likes}
                        dislikes={blog.dislikes}
                        key={blog.id}
                        id={blog.id}*/
                    />
                    <div style={{ margin: '10px'}} />
                </div>
                )}
            </div>
        )
    }
}

export default AllCustomers;