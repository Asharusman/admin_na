import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Dashboard from '../Dashboard/Dashboard';
import Company from './company';
import Profile from './Profile';
import Email from './Email';
import Currency from './Currency';
import Payment from './Payment';
import Language from './Language';
import Storage from './Storage';
import Attendance from './Attendance';
import Slack from './Slack';
import Message from './Message';
import Roles from './Roles';
import Module from './Module';
import Customfields from './Customfields';
import Leaves from './Leaves';
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',
    //    height: 424 
    }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab
        label="Company Settings" {...a11yProps(0)} />
        <Tab label=" Profile Settings" {...a11yProps(1)} />
        <Tab label=" Email Settings" {...a11yProps(2)} />
        <Tab label=" Currency Settings" {...a11yProps(3)} />
        <Tab label=" Theme Settings" {...a11yProps(4)} />
        <Tab label="Payment Credentials " {...a11yProps(5)} />
        <Tab label=" Invoice Settings" {...a11yProps(6)} />
        <Tab label=" Slack Settings" {...a11yProps(7)} />
        <Tab label="Ticket Settings" {...a11yProps(8)} />
        <Tab label="Attendance Settings" {...a11yProps(9)} />
        <Tab label="Leaves Settings" {...a11yProps(10)} />
        <Tab label="Custom Fields" {...a11yProps(11)} />
        <Tab label="Module Settings" {...a11yProps(12)} />
        <Tab label="Roles & Permissions" {...a11yProps(13)} />
        <Tab label="Message Settings" {...a11yProps(14)} />
        <Tab label="Storage Settings" {...a11yProps(15)} />
        <Tab label="Language Settings" {...a11yProps(16)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Company/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Profile/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Email/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Currency/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        aa
      </TabPanel>

      <TabPanel value={value} index={5}>
      <Payment/>
      </TabPanel>

      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Slack/>
      </TabPanel>

      <TabPanel value={value} index={8}>
        Item Four
      </TabPanel>

      <TabPanel value={value} index={9}>
        <Attendance/>
      </TabPanel>

      <TabPanel value={value} index={10}>
        <Leaves/>
      </TabPanel>

      <TabPanel value={value} index={11}>
        <Customfields/>
      </TabPanel>
      <TabPanel value={value} index={12}>
        <Module/>
      </TabPanel>

      <TabPanel value={value} index={13}>
        <Roles/>
      </TabPanel>

      <TabPanel value={value} index={14}>
        <Message/>
      </TabPanel>

      <TabPanel value={value} index={15}>
        <Storage/>
      </TabPanel>

      <TabPanel value={value} index={16}>
        <Language/>
      </TabPanel>
      
    </Box>
  );
}