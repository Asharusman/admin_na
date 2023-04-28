import React from 'react'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const Module = () => {
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
        <div>
            <div>
            <h3 className="mod">Modules</h3>
            <p className='cap'>Select the modules which you want to enable.</p>
            </div> 
            <div className="items">
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Clients"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Employees"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Attendance"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Projects"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label=" Tasks"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Estimates"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Invoices "
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Payments "
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Expenses "
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Timelogs "
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Tickets "
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Messages"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Events "
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Leaves "
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Notices "
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Operations"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Production"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Ebd"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Seals"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Clientbranch"
                labelPlacement="start"  
            />
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="New_module"
                labelPlacement="start"  
            />
            </div>
        </div>
    )
}

export default Module
