import React, { useEffect, useState } from 'react'
import { Typography, CircularProgress } from '@material-ui/core';
import FeedCard from './FeedCard2';
import PendingLoans from './PendingLoans'
import Profile from './Profile'
import AcceptLoan from './AcceptLoan'
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from 'react-router-dom';

function LoanApplications() {
    return (
        <div>
            <Switch>
                <Route path="/applications" exact component={PendingLoans} />
                <Route path="/applications/profile/:id" component={Profile} />
                <Route path="/applications/accept/:id" component={AcceptLoan} />
            </Switch>
        </div>
    );
}

export default LoanApplications;