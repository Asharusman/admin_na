// import React from 'react'
import project from '../../images/project1.png'
import './project.css'
import Table from './Table';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
const Project = () => {
    return (
        <div>
        <div className='head'>
           <img src={project} alt="" /><h2>Project</h2>
           </div>
           <div className="table">
            <Table/>

            </div>
        
       
        
        
    </div>
    )
}

export default Project
