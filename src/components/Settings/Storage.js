import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
const Storage = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <div>
       <div className="companydetails">
            <h4>FILE STORAGE</h4>        
          <p>Select Storage</p>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>

        <Select
            id="demo-simple-select"
            onChange={handleChange}
            defaultValue="mail"
        >
            <MenuItem>Local(default)</MenuItem>
            <MenuItem>AWS Storage(Amazon Web Services)</MenuItem>
            <MenuItem>Google Drive Storage</MenuItem>
            <MenuItem>Dropbox Storage</MenuItem>
        </Select>
        </FormControl>
    </Box>
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
  )
}

export default Storage
