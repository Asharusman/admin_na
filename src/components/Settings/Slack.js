import React from 'react'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import NativeSelect from '@mui/material/NativeSelect';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Slack = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
        ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
            duration: 500,
            }),
        },
        }));



    return (

    <div className='email'>
        
        <div className='first'>
        <div className="etitle">
            <h2>Set Notification Settings</h2>
        </div>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="User Added by Admin"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Employee Assign to Project"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="New Notice Published"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="User Assign to Task"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="New Expense (Added by Admin)"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="New Expense (Added by Member)"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Expense Status Changed"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="New Support Ticket Request"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Leave Request Received"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Task completed"
                labelPlacement="start"  
            />
        </div>
        <div className='second'>
    <label>Slack Webhook</label>
        <TextField />
        <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,mr:1,backgroundColor:'#e91e63', color:'white' }}>
        Update
        </Button>
        <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,mr:1,backgroundColor:'purple', color:'white' }}>
        Send Test Email
        </Button>
        <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'grey', color:'white'}}>
        Reset
        </Button>
        </div>
    </div>
    )
}

export default Slack
