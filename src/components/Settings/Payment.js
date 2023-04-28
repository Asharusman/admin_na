import React from 'react'
import client from '../../images/client.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
const Payment = () => {
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
      <div className="contain">
          <div className="form">
            <div className="companydetails">
            <h4>PAYPAL</h4>        
          <label>Paypal Client Id</label>
        <TextField/>
        <label>Paypal Secret</label>
        <TextField/>
        <label>Paypal Status</label><br />
        <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            />
        </div>
        
        <div className="companydetails">
            <h4>STRIPE</h4>        
          <label>Stripe Client Id</label>
        <TextField/>
        <label>Stripe Secret</label>
        <TextField/>
        <label>Stripe Webhook Secret</label>
        <TextField/>
        <label>Stripe Status</label><br />
        <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            />
        </div>

          <div className="buttons">
          <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,mr:1,backgroundColor:'#e91e63', color:'white' }}>
        Save
        </Button>
        <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'grey', color:'white'}}>
        Reset
        </Button>
          </div>
          </div>
      </div>
    </div>
  )
}
export default Payment
