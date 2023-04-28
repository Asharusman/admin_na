import project from '../../images/project.png'
import expenses from '../../images/finance1.png'
import Table from '../Projects/Table';
import * as React from 'react';
import '../Projects/project.css'

const Expenses = () => {
    return (
        <div>
        <div className='head'>
           <img src={expenses} alt="" /><h2>Expenses</h2>
           </div>
           <div className="table">
            <Table/>

            </div>
        
        
        
        
    </div>
    )
}

export default Expenses
