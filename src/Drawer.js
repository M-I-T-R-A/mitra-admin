import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AllCustomers from './AllCustomers';
import LoanApplications from './LoanApplications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  photo: {
    height: 150,
    width: 150
  }
}));

export default function SideBar() {
  const classes = useStyles();
  const [flow, setFlow] = useState(0);

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem >
            <img src={'./icons.png'} className = {classes.photo} />
          </ListItem>
          <ListItem >
            <b>Welcome to Mitra Admin</b>
          </ListItem>
          <ListItem button key="Dashboard" component={Link} to="/customers">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItem>
          <ListItem button key="Loan Applications"  component={Link} to="/applications">
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Loan Applications" />
            <Link to="/applications" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/customers" component={AllCustomers}></Route>
            <Route path="/applications" component={LoanApplications}></Route>
          </Switch>
        </main>
    </div>
    </Router>
  );
}