import React from 'react'
import cloc from '../../images/clock1.png'
import Table from '../Projects/Table';
import attendance from '../../images/attendance1.png'
import '../Projects/project.css'
const Attendance = () => {
    return (
        <div><div className='head'>
        <img src={attendance} alt="" /> <h2>Attendance</h2>
        </div>
        <div className="table">
        <Table/>

        </div>
        
        </div>
    )
}

export default Attendance
