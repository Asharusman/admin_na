import React from 'react'
import timer from '../../images/timer1.png'
import CardContent from "@mui/material/CardContent";
import { Typography } from '@mui/material'
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from '@mui/material/ListItemText';
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
const Dashboard = () => {
    return (
        <div>
            <div className='head'>
                <img src={timer} alt="" /><h2>Dashboard</h2>
                
            </div>
            <div className="widgets">
            <CardContent sx={{backgroundColor:'#e91e63 ',color:'white'}}>
        <Typography variant="h5" component="div">
        Total Clients
        </Typography><br/>
        <ListItemIcon>
        <AccessibilityIcon/>
        <ListItemText primary="3" sx={{color:'white'}} />
        </ListItemIcon>
        </CardContent>

        <CardContent sx={{backgroundColor:'#e91e63 ',color:'white'}}>
        <Typography variant="h5" component="div">
        Total Employees
        </Typography><br/>
        <ListItemIcon>
        <AccessibilityIcon/>
        <ListItemText primary="3" sx={{color:'white'}} />
        </ListItemIcon>
        </CardContent>

        <CardContent sx={{backgroundColor:'#e91e63 ',color:'white'}}>
        <Typography variant="h5" component="div">
        Total Projects
        </Typography><br/>
        <ListItemIcon>
        <AccessibilityIcon/>
        <ListItemText primary="3" sx={{color:'white'}} />
        </ListItemIcon>
        </CardContent>

        <CardContent sx={{backgroundColor:'#e91e63 ',color:'white'}}>
        <Typography variant="h5" component="div">
        Total Unpaid Invoices
        </Typography><br/>
        <ListItemIcon>
        <AccessibilityIcon/>
        <ListItemText primary="3" sx={{color:'white'}} />
        </ListItemIcon>
        </CardContent>
        </div>
        <div className="timelog">
        <div className="header1">
            <h3>USER ACTIVITY TIMELINE</h3>
        </div>
        <div className="list">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary="Brunch this weekend?"
            secondary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
            }
        />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary="Summer BBQ"
            secondary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
            }
        />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary="Oui Oui"
            secondary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                {/* Sandra Adams */}
                </Typography>
                {'Do you have Paris recommendations? Have you ever'}
            </React.Fragment>
            }
        />
        </ListItem>
    </List>
        </div>
        </div>



        <div className="timelog">
        <div className="header1">
            <h3>USER ACTIVITY TIMELINE</h3>
        </div>
        <div className="list">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary="Brunch this weekend?"
            secondary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
            }
        />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary="Summer BBQ"
            secondary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
            }
        />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary="Oui Oui"
            secondary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                {/* Sandra Adams */}
                </Typography>
                {'Do you have Paris recommendations? Have you ever'}
            </React.Fragment>
            }
        />
        </ListItem>
    </List>
        </div>
        </div>




        <div className="timelog">
        <div className="header1">
            <h3>USER ACTIVITY TIMELINE</h3>
        </div>
        <div className="list">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary="Brunch this weekend?"
            secondary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
            }
        />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary="Summer BBQ"
            secondary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
            }
        />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary="Oui Oui"
            secondary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                {/* Sandra Adams */}
                </Typography>
                {'Do you have Paris recommendations? Have you ever'}
            </React.Fragment>
            }
        />
        </ListItem>
    </List>
        </div>
        </div>


        
        </div>
    )
}

export default Dashboard
