import React from 'react'
import timelog from '../../images/clock1.png'
import Table from '../Projects/Table';
import '../Projects/project.css'
const Timelog = () => {
    return (
        <div>
            <div className='head'>
            <img src={timelog} alt="" /><h2>Timelog</h2>
            </div>
            <div className="table">
            <Table/>

            </div>
        </div>
    )
}

export default Timelog
