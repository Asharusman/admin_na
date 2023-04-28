import React from 'react'
import client from '../../images/client.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Addcllient = () => {
  return (
    <div>
      <div className='head'>
      <img src={client} alt="" />
      <h2>Clients</h2>
      </div>
      <div className="contain">
        <div className="header">
            <h4>ADD CLIENT INFO</h4>
          </div>
          <div className="form">
            <div className="companydetails">
            <h4>COMPANY DETAILS</h4>        
          <p>Company Name</p>
        <TextField/>
        <p>Company Website</p>
        <TextField/>
        <p>Address</p>
        <TextField/>
        </div>
        
        <div className="companydetails">
            <h4>CLIENT DETAILS</h4>        
          <p>Client Name</p>
        <TextField/>
        <p>Client Email</p>
        <TextField/>
        <p>Password</p>
        <TextField/>
        <p>Mobile</p>
        <TextField/>
        <p>Note</p>
        <TextField/>
        </div>

          <div className="buttons">
          <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'white', color:'#e91e63' ,borderColor:'#e91e63',borderInlineColor:'#e91e63', border:2}}>
      Save
      </Button>
      <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'white', color:'#e91e63' ,borderColor:'#e91e63',borderInlineColor:'#e91e63', border:2}}>
      Reset
      </Button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Addcllient
