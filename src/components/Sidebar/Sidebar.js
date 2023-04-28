import React from 'react';
// import './sidebar.css';
import timer from '../../images/timer.png';
import clock from '../../images/clock.png';
import title from '../../images/title.png';
import project from '../../images/project.png';
import task from '../../images/task.png';
import ticket from '../../images/ticket.png';
import finance from '../../images/finance.png';
import message from '../../images/message.png';
import attendance from '../../images/attendance.png';
import event from '../../images/event.png';
import leave from '../../images/leave.png';
import { Link } from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { color } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
const Sidebar = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };


    const [open2, setOpen2] = React.useState(true);

    const handle2Click = () => {
      setOpen2(!open2);
    };
    const matches = useMediaQuery('(min-width:600px)');
    return (
        // <div 
        // className='firstSection'
        // >
            <div className="leftsec">
                {/* <li><img className='title' src={title}/></li> */}
                <li><a><h3>Employee Panel</h3></a></li>


                <ListItemButton onClick={handle2Click} sx={{bgcolor:'#e91e63' ,color:'white',":hover":{bgcolor:'#04272a'}}}>
        {/* <ListItemIcon>
            <InboxIcon />
            
        </ListItemIcon> */}
        <img src={task}/>
        <ListItemText primary=" Name" sx={{}} />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <div className='a'>
        <Collapse in={open2} timeout="auto" unmountOnExit>
        
            <List component="div" disablePadding>
            <Link to='/tasks'>
            <ListItemButton sx={{ pl: 4 ,bgcolor:'#e91e63' ,color:'white',":hover":{bgcolor:'#04272a'}}} >
                {/* <ListItemIcon>
                <StarBorder />
                </ListItemIcon> */}
            <ListItemText primary="Profile Settimgs" />
            </ListItemButton> 
            </Link>
            

            <Link to='/tasks'>
            <ListItemButton sx={{ pl: 4 ,bgcolor:'#e91e63' ,color:'white',":hover":{bgcolor:'#04272a'}}} >
                {/* <ListItemIcon>
                <StarBorder />
                </ListItemIcon> */}
            <ListItemText primary="Task Board" />
            </ListItemButton> 
            </Link>

            <Link to='/tasks'>
            <ListItemButton sx={{ pl:4 ,bgcolor:'#e91e63' ,color:'white',":hover":{bgcolor:'#04272a'}}} >
                {/* <ListItemIcon>
                <StarBorder />
                </ListItemIcon> */}
            <ListItemText primary="Task Calendar" />
            </ListItemButton> 
            </Link>
                
            </List>
            
        </Collapse>
        </div>




                <div className='a'><Link to='/dashboard'><li><img src={timer}/><ListItemText primary="Dashboard" sx={{}} /></li></Link></div>
                <div className='a'><Link to='/project'><li><img src={project}/><ListItemText primary="Projects" sx={{}} /></li></Link></div>
                {/* <Link to='/expenses'><li><img src={project}/>Projects</li></Link> */}
                {/* <li><img src={task}/>Tasks
                <select name="cars" className='task'>
                </select>
                </li> */}




<ListItemButton onClick={handleClick} sx={{bgcolor:'#e91e63' ,color:'white',":hover":{bgcolor:'#04272a'}}}>
        {/* <ListItemIcon>
            <InboxIcon />
        </ListItemIcon> */}
        <img src={task}/>
        <ListItemText primary="Tasks" sx={{}} />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <div className='a'>
            <List component="div" disablePadding>
            <Link to='/tasks'>
            <ListItemButton sx={{ pl: 4 ,bgcolor:'#e91e63' ,color:'white',":hover":{bgcolor:'#04272a'}}} >
                {/* <ListItemIcon>
                <StarBorder />
                </ListItemIcon> */}
            <ListItemText primary="Tasks" />
            </ListItemButton> 
            </Link>

            <Link to='/tasks'>
            <ListItemButton sx={{ pl: 4 ,bgcolor:'#e91e63' ,color:'white',":hover":{bgcolor:'#04272a'}}} >
                {/* <ListItemIcon>
                <StarBorder />
                </ListItemIcon> */}
            <ListItemText primary="Task Board" />
            </ListItemButton> 
            </Link>

            <Link to='/tasks'>
            <ListItemButton sx={{ pl: 4 ,bgcolor:'#e91e63' ,color:'white',":hover":{bgcolor:'#04272a'}}} >
                {/* <ListItemIcon>
                <StarBorder />
                </ListItemIcon> */}
            <ListItemText primary="Task Calendar" />
            </ListItemButton> 
            </Link>
                
            </List>
            </div>
        </Collapse>







                {/* <option value="volvo"><Link to='/tasks'>Tasks</Link></option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option> */}
                
                {/* <img class='dropdown' src={dropdown}/> */}
                
                <div className='a'><Link to='/timelog'><li><img src={clock}/><ListItemText primary="Time Logs" sx={{}} /></li></Link></div>
                <div className='a'> <Link><li><img src={attendance}/><ListItemText primary="Attendance" sx={{}} /></li></Link></div>
                <div className='a'><Link><li><img src={ticket}/><ListItemText primary="Tickets" sx={{}} /></li></Link></div>
                <div className='a'> <Link to='/expenses'><li><img src={finance}/><ListItemText primary="Expenses" sx={{}} /></li></Link></div>
                <div className='a'> <Link><li><img src={message}/><ListItemText primary="Messages" sx={{}} /></li></Link></div>
                <div className='a'><Link><li><img src={event}/><ListItemText primary="Events" sx={{}} /></li></Link></div>
                <div className='a'><Link><li><img src={leave}/><ListItemText primary="Leaves" sx={{}} /></li></Link></div>
                {/* <span>{`(min-width:600px) matches: ${matches}`}</span>; */}
            {/* </div> */}
        </div>
    //     <>
    //      <List
    //   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Nested List Items
    //     </ListSubheader>
    //   }
    // >
    //   <ListItemButton>
    //     <ListItemIcon>
    //       <SendIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Sent mail" />
    //   </ListItemButton>
    //   <ListItemButton>
    //     <ListItemIcon>
    //       <DraftsIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Drafts" />
    //   </ListItemButton>
    //   <ListItemButton onClick={handleClick}>
    //     <ListItemIcon>
    //       <InboxIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Inbox" />
    //     {open ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>
    //   <Collapse in={open} timeout="auto" unmountOnExit>
    //     <List component="div" disablePadding>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <StarBorder />
    //         </ListItemIcon>
    //         <ListItemText primary="Starred" />
    //       </ListItemButton>
    //     </List>
    //   </Collapse>
    // </List></>
    )
}

export default Sidebar
