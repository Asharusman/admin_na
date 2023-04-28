import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import { useState } from "react";
const Profile = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [selectedImage, setSelectedImage] = useState();
        const imageChange = (e) => {
            if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            }
        };
        const removeSelectedImage = () => {
            setSelectedImage();
        };
    return (
        <div>
        <label>Your Name</label>
        <TextField 
       />
        <label>Your Email</label>
        <TextField/>
        <label>Your Password</label>
        <TextField type='password'/>
        <label>Your Mobile Number</label>
        <TextField />
        <label>Gender</label>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>

        <Select
            id="demo-simple-select"
            onChange={handleChange}
            defaultValue="mail"
        >
            <MenuItem>Male</MenuItem>
            <MenuItem>Female</MenuItem>
        </Select>
        </FormControl>
    </Box>

        <label>Your Address</label>
        <TextField/>
        
        
        <label>Profile Picture</label>

<div className="row">
        <label class="label">
        <input type="file" className="formcontrol" onChange={imageChange} accept="image/*"/>
        <span>Select Image</span>
        </label>
        </div> <br/>
{selectedImage && (
    <div>
        <div className="im">
    <img className='image'
        src={URL.createObjectURL(selectedImage)}
        alt="Thumb"
    />
    </div>
    <button className='remove' onClick={removeSelectedImage}>Remove</button>
    </div>
)}

<div className="buttons">
            <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,mr:1,backgroundColor:'#e91e63', color:'white' }}>
            Update
            </Button>
            <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'grey', color:'white'}}>
            Reset
            </Button>
            </div>
        </div>
    )
}

export default Profile
