import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
    function createData(LeaveType, NoofLeaves,Action) {
    return { LeaveType, NoofLeaves, Action};
    }
    
        const rows = [
            createData(
            <Fab variant="extended" size="small" color="primary" sx={{backgroundColor:'#e91e63',color:'white'}}>
            Casual
            </Fab>
            ,<TextField sx={{width:400}}/>
            ,<>
                <Fab color="secondary" aria-label="edit" sx={{backgroundColor:'#e91e63',color:'white'}}>
                    <DoneIcon /> 
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <CloseIcon/> 
                </Fab>
            </>
            ),
            createData(<Fab variant="extended" size="small" aria-label="add" sx={{backgroundColor:'#e91e63',color:'white'}}>
            Earned
            </Fab>,<TextField sx={{width:400}}/>
            ,<>
                <Fab color="secondary" aria-label="edit" sx={{backgroundColor:'#e91e63',color:'white'}}>
                    <DoneIcon /> 
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <CloseIcon/> 
                </Fab>
            </>
            ),
                createData(<Fab variant="extended" size="small" color="pink" aria-label="add" sx={{backgroundColor:'pink',color:'white'}}>
                Sick
            </Fab>,<TextField sx={{width:400}}/>,
            <>
                <Fab color="secondary" aria-label="edit" sx={{backgroundColor:'#e91e63',color:'white'}}>
                    <DoneIcon /> 
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <CloseIcon/> 
                </Fab>
            </>
            )
            ];

const Leaves = () => {
    return (
        <div>
            <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
            <FormControlLabel value="Count leaves from the date of joining
                " control={<Radio />} label="Count leaves from the date of joining
                " />
            <FormControlLabel value="Count leaves from the start of the year" control={<Radio />} label="Count leaves from the start of the year" />
        </RadioGroup>
        </FormControl>

            {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Leave Type</TableCell>
                <TableCell>	No Of Leaves</TableCell>
                <TableCell>	Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.LeaveType}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell>{row.LeaveType}</TableCell>
                <TableCell>{row.NoofLeaves}</TableCell>
                <TableCell>{row.Action}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer> */}


    <TableContainer component={Paper} sx={{mb:2}}>
        <Table sx={{ minWidth: 650  }} aria-label="caption table">
            <TableHead>
            <TableRow>
                <TableCell>Leave Type</TableCell>
                <TableCell>No Of Leaves</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.LeaveType}>
                <TableCell component="th" scope="row">
                    {row.LeaveType}
                </TableCell>
                <TableCell>{row.NoofLeaves}</TableCell>
                <TableCell>{row.Action}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <label>Add Leave Type</label>
        <TextField/>
        <label>Label Color </label>
        <TextField/>
        <Button variant="contained" href="#contained-buttons" sx={{mt:2,mb:2,mr:1,backgroundColor:'#e91e63', color:'white' }}>
            Save
            </Button>
        </div>
    )
}

export default Leaves
