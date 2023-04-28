import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
    
export default function Company() {
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



        const currencies = [
            {
            value: 'USD',
            label: '$',
            },
            {
            value: 'EUR',
            label: '€',
            },
            {
            value: 'BTC',
            label: '฿',
            },
            {
            value: 'JPY',
            label: '¥',
            },
        ];
        






    return (<>
        <label>Company Name</label>
        <TextField
        />
        <label>Company Email</label>
        <TextField
        />
        <label>Company Phone</label>
        <TextField
        /><label>Company Website</label>
        <TextField
        />
        <label>Company Logo</label>

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
        
        <label>Login Screen Background</label>
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
        <label className='.label1'>Company Address</label><br />
        <TextareaAutosize
        aria-label="empty textarea"
        // placeholder="Empty"
         />


        <label>Default Currency</label><br />
            <TextField
            id="standard-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            variant="standard"
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>



            <label>Default Timezone</label>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>

        <Select
            id="demo-simple-select"
            onChange={handleChange}
            defaultValue="mail"
        >
            <MenuItem>Asia/Karachi</MenuItem>
            <MenuItem>Asia/Kabul</MenuItem>
            <MenuItem>Asia/Kolkata</MenuItem>
            <MenuItem>Atlantic/South_Georgia</MenuItem>
            <MenuItem>Australia/Hobart</MenuItem>
            <MenuItem>Australia/Perth</MenuItem>
            <MenuItem>Europe/Berlin</MenuItem>
            <MenuItem>Europe/Amsterdam</MenuItem>
            <MenuItem>Europe/Barcelona</MenuItem>
        </Select>
        </FormControl>
    </Box>



    <label>Change Language</label>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>

        <Select
            id="demo-simple-select"
            onChange={handleChange}
            defaultValue="mail"
        >
            <MenuItem>English</MenuItem>
            <MenuItem>Arabic</MenuItem>
            <MenuItem>German</MenuItem>
        </Select>
        </FormControl>
    </Box>

    <label>Add Current Location</label>
        <TextField/>

        <div className="buttons">
            <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,mr:1,backgroundColor:'#e91e63', color:'white' }}>
            Update
            </Button>
            <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'grey', color:'white'}}>
            Reset
            </Button>
            </div>

        </>
    );}