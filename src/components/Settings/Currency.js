import React from 'react'
import Button from '@mui/material/Button';
import BasicTable from './Currencytable';
const Currency = () => {
    return (
    <div>
        <div className="ctitle">
            <h3>CURRENCIES</h3>
            <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'white', color:'#e91e63' ,borderColor:'#e91e63',borderInlineColor:'#e91e63', border:2}}>
            Add New Currency +
            </Button>
            <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'white', color:'#e91e63' ,borderColor:'#e91e63',borderInlineColor:'#e91e63', border:2}}>
            Update Exchange Rate
            </Button>
            <BasicTable/>
            </div>
    </div>
    )
}

export default Currency
