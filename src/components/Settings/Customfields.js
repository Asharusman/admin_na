import React from 'react'
import Button from '@mui/material/Button';
import BasicTable from './Customtable';
const Customfields = () => {
    return (
        <div>
            <div className="ctitle">
            <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,backgroundColor:'white', color:'#e91e63' ,borderColor:'#e91e63',borderInlineColor:'#e91e63', border:2}}>
            + Add Field
            </Button>
            <BasicTable/>
            <div className="comment">No data available in table</div>
        </div>
        </div>
    )
}

export default Customfields
