import React from 'react'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
const Attendance = () => {
    return (
        <div>
            <label>Office Start Time</label>
            <TextField
            type="time"
            defaultValue="09:00 AM"/>
            <label>Office End Time</label>
            <TextField
            type="time"
            defaultValue="06:00 PM"/>
            <label>Late mark after (minutes)</label>
            {/* <input type="number" id="quantity" name="quantity" min="1" max="5"/> */}
            <TextField 
            type="number"
            defaultValue="5"/>
            <label class="container">Allowed Employee self Clock-In/Clock-Out
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label>Office opens on</label>
            <label class="container">Monday
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label class="container">Tuesday
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label class="container">
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label class="container">Thursday
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label class="container">Friday
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label class="container">Saturday
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label class="container">Sunday
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <div className="buttons">
          <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,mr:1,backgroundColor:'#e91e63', color:'white' }}>
        Save
        </Button>
        <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'grey', color:'white'}}>
        Reset
        </Button>
          </div>
        </div>
    )
}

export default Attendance
