import React from 'react'
import client from '../../images/client.png'
import { Typography } from '@mui/material'
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from '@mui/material/ListItemText';
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Button from '@mui/material/Button';
import CardContent from "@mui/material/CardContent";
import Table from '../Projects/Table';
import { Link } from 'react-router-dom';
const Clients = () => {
  return (
    <div>
      <div className='head'>
      <img src={client} alt="" />
      <h2>Clients</h2>
      </div>
      <CardContent sx={{backgroundColor:'#e91e63 ',color:'white'}}>
      <Typography variant="h5" component="div">
        Total Clients
      </Typography><br/>
      <ListItemIcon>
        <AccessibilityIcon/>
        <ListItemText primary="3" sx={{color:'white'}} />
      </ListItemIcon>
      </CardContent>
      <Link to="/clients/addclient">
      <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'white', color:'#e91e63' ,borderColor:'#e91e63',borderInlineColor:'#e91e63', border:2}}>
      Add Client +
      </Button>
      </Link>
      <Table/>
        {/* <table>
        <thead>
          
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
        </table> */}
    </div>
  )
}

export default Clients
