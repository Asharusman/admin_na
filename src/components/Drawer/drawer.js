import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import title from '../../images/title.png'
import { color } from '@mui/system';
import '../Assets/custom.css'
// import Sidebar from './Sidebar/Sidebar';
// import { Link } from 'react-router-dom';
import timer from '../../images/timer.png';
import clock from '../../images/clock.png';
import title1 from '../../images/title.png';
import project from '../../images/project.png';
import task from '../../images/task.png';
import ticket from '../../images/ticket.png';
import finance from '../../images/finance.png';
import message from '../../images/message.png';
import logout from '../../images/logout2.png';
import attendance from '../../images/attendance.png';
import event from '../../images/event.png';
import leave from '../../images/leave.png';
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListIcon from '@mui/icons-material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import profile from '../../images/profile.png';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
import  Dashboard  from '../Dashboard/Dashboard';
import  Project  from '../Projects/Project';
import  Tasks  from '../Tasks/Tasks';
import  Timelog  from '../Timelogs/Timelog';
import  Expenses  from '../Expenses/Expenses';
import Footer from '../Footer/Footer';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import LayersIcon from '@mui/icons-material/Layers';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StyleIcon from '@mui/icons-material/Style';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EmailIcon from '@mui/icons-material/Email';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Groups2Icon from '@mui/icons-material/Groups2';
import Settings from '../Settings/Settings';
import Clients from '../Clients/Clients';
import Addcllient from '../Clients/Addcllient';
import admin from '../../images/admin.jpeg'
import Attendance from '../Attendance/Attendance';
const drawerWidth = 240;
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
     
//     ),
//   },
//   {
//     path: "about",
//     element:  <Dashboard/>
//     <div>About</div>
//     ,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


// const [open, setOpen] = React.useState(true);

// const handleClick = () => {
//   setOpen(!open);
// };

// for sidebar 
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);

const handleClick = () => {
  setOpen1(!open1);
};


const [open2, setOpen2] = React.useState(false);

const handleClick1 = () => {
  setOpen2(!open2);
};

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor:'#e91e63'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,

              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img style={{width:'200px'}} src={title}/>
          </Typography>
          <Button color="inherit"><img src={logout}/>Logout</Button>
          {/* <img src={title}/>
          <img src={logout}/><ListItemText primary="Logout" /> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{backgroundColor:'#e91e63'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? 
            <ChevronRightIcon sx={{color:'white'}} />
          
            : 
            
          <ChevronLeftIcon /> }
          </IconButton>
        </DrawerHeader>
        
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          ADMIN PANEL
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {/* <img src={task}/> */}
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          <Avatar
            alt="Remy Sharp"
            src={admin}
            sx={{ width: 24, height: 24 }}
          />
        </ListItemIcon>
        <ListItemText primary="Admin" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className='aaa'>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AccountCircleIcon/>
              {/* <StarBorder /> */}
              {/* <img src={profile} alt="profile" /> */}
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* <div className="a"> */}
      <Link to="/dashboard" >
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
        <AvTimerIcon/>
          {/* <img src={timer} alt="timer" /> */}
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      </Link>
      {/* </div> */}
      <Link to="/clients" >
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
        <Groups2Icon/>
        </ListItemIcon>
        <ListItemText primary="Clients" />
      </ListItemButton>
      </Link>

      <Link to="/project">
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
        <LayersIcon/> 
          {/* <img src={project} alt="" /> */}
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItemButton>
      </Link>
      
      <ListItemButton onClick={handleClick1} sx={{color:'white'}}>
        <ListItemIcon>
          {/* <img src={task}/> */}
          <FormatListBulletedIcon/>
        </ListItemIcon>
        <ListItemText primary="Tasks" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className='aaa'>
          <ListItemButton sx={{ pl: 4 ,color:'white'}} >
            <ListItemIcon>
            <ListIcon/>
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding className='aaa'>
          <ListItemButton sx={{ pl: 4 ,color:'white'}} >
            <ListItemIcon>
              <PlaylistAddCheckIcon/>
            </ListItemIcon>
            <ListItemText primary="Task Board" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding className='aaa'>
          <ListItemButton sx={{ pl: 4 ,color:'white'}} >
            <ListItemIcon>
              <AssignmentTurnedInIcon/>
            </ListItemIcon>
            <ListItemText primary="Task Calendar" />
          </ListItemButton>
        </List>
      </Collapse>
      
      <Link to="/timelog">
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
          {/* <img src={clock}/> */}
          <AccessTimeIcon/>
        </ListItemIcon>
        <ListItemText primary="Timelog" />
      </ListItemButton>
      </Link>

      <Link to="/attendance">
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
          {/* <img src={attendance}/> */}
          <CalendarMonthIcon/> 
        </ListItemIcon>
        <ListItemText primary="Attendance" />
      </ListItemButton>
      </Link>

      <Link to="/project">
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
          {/* <img src={ticket} alt="ticket" /> */}
          <StyleIcon/>
        </ListItemIcon>
        <ListItemText primary="Tickets" />
      </ListItemButton>
      </Link>

      <Link to="/expenses">
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
          {/* <img src={finance} alt="finance */}
          <CreditCardIcon/>
        </ListItemIcon>
        <ListItemText primary="Expenses" />
      </ListItemButton>
      </Link>

      <Link to="/project">
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
          <EmailIcon/>
          {/* <img src={message} alt="message" /> */}
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItemButton>
      </Link>

      <Link to="/attendance">
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
        <CalendarMonthIcon/> 
          {/* <img src={event} alt="event" /> */}
        </ListItemIcon>
        <ListItemText primary="Events" />
      </ListItemButton>
      </Link>

      <Link to="/project">
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
          <ExitToAppIcon/>
          {/* <img src={leave} alt="leave" /> */}
        </ListItemIcon>
        <ListItemText primary="Leaves" />
      </ListItemButton>
      </Link>
      <Link to="/settings">
      <ListItemButton sx={{color:'white'}}>
        <ListItemIcon>
          <SettingsIcon/>
          {/* <img src={event} alt="settings" /> */}
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      </Link>
    </List>
</Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/clients/addclient" element={<Addcllient/>}/>
          <Route path="/project" element={<Project/> }/>
          <Route path="/tasks" element={<Tasks/> }/>
          <Route path="/attendance" element={<Attendance/> }/>
          <Route path="/timelog" element={<Timelog/> }/>
          <Route path="/expenses" element={<Expenses/> }/>
          <Route path="/settings" element={<Settings/> }/>
          
      </Routes>
      <Footer/>
      {/* <Dashboard/>
      <Project/>
        
        <RouterProvider router={router} /> */}
      </Box>
    </Box>
  );
}