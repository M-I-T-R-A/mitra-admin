import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tab1 from './tabs/Tab1'
import Tab2 from './tabs/Tab2'
import Tab5 from './tabs/Tab5'
import Tab3 from './tabs/Tab3'
import Tab4 from './tabs/Tab4'
import BarChartIcon from '@material-ui/icons/BarChart';
import Tab6 from './tabs/Tab6';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
    maxWidth: 500,
  }
}));

export default function FeedCard({ data }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div className={classes.root} style={{ width: "80%" }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Basic Details" {...a11yProps(0)} />
          <Tab label="Bank Accounts" {...a11yProps(1)} />
          <Tab label="Surrogates" {...a11yProps(2)} />
          <Tab label="Shop" {...a11yProps(3)} />
          <Tab label="Previous Loan Applications" {...a11yProps(4)} />
          <Tab label="Analysis" icon={<BarChartIcon />} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Tab1 data={data.customer} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab2 data={data.allBankAccounts} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tab3 data={data}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Tab4 data={data.shop}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Tab5 data={data.allLoans} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Tab6 data={data} />
      </TabPanel>
    </div>
  );
}
