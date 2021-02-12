import Card from '@material-ui/core/Card';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography, CircularProgress } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function Tab1({ data }) {
    const classes = useStyles();

    return (<div><ul style={{listStyleType: "none"}}>
        {data.map(loan => <li><Card>
            <Typography>Demanded Amount: {loan.demandedAmount}       Status: {loan.approval}</Typography>
        </Card><br></br></li>)}</ul>
    </div>

    );
}