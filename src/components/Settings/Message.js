import React from 'react'
import Button from '@mui/material/Button';
const Message = () => {
  return (
    <div>
      <label class="container">Allow chat between client and admin?
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <label class="container">Allow chat between client and employees?
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
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

export default Message
