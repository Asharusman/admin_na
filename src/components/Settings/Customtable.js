import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Module, Label, Name, Type, Value, Required, Action) {
  return { Module, Label, Name, Type, Value , Required , Action };
}

const rows = [
  createData('', '','', '', '','',''),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Module</TableCell>
            <TableCell>	 Label</TableCell>
            <TableCell>	 Name</TableCell>
            <TableCell> Type</TableCell>
            <TableCell>	Value</TableCell>
            <TableCell>	Required</TableCell>
            <TableCell>	Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Module}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Module}
              </TableCell>
              <TableCell>{row.Label}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Type}</TableCell>
              <TableCell>{row.Value}</TableCell>
              <TableCell>{row.Required}</TableCell>
              <TableCell>{row.Action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}