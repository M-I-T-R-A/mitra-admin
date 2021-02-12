import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tax from '../Surrogates/Tax';
import Guarantor from '../Surrogates/Guarantor';
import Bills from '../Surrogates/Bills';
import Electricity from '../Surrogates/Electricity';
import ReactSpeedometer from "react-d3-speedometer";
import CibilScore from '../Surrogates/Cibil';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Tab3({data}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Income Tax Returns" {...a11yProps(0)} />
        <Tab label="Guarantor" {...a11yProps(1)} />
        <Tab label="Shop Purchase Bills" {...a11yProps(2)} />
        <Tab label="Electricity Bills" {...a11yProps(3)} />
        <Tab label="Cibil Score" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Tax data={data.instantLoanSurrogates.taxReturns}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Guarantor data={data.instantLoanSurrogates.guarantor} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Bills data={data.instantLoanSurrogates.bills}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Electricity data={data} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CibilScore data={data} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={8}>
        <ReactSpeedometer />
      </TabPanel>
    </div>
  );
}