import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(currencyName, currencySymbol, currencyCode, exchangeRate, action) {
  return { currencyName, currencySymbol, currencyCode, exchangeRate, action };
}

const rows = [
  createData('Dollars', '$','USD', '', 4.0),
  createData('Pounds', 	'£', 'GBP', '', 4.3),
  createData('Euros', '	€', 'EUR', '', 6.0),
  createData('Rupees', '₹', 'INR', '', 4.3)
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Currency Name</TableCell>
            <TableCell>	Currency Symbol</TableCell>
            <TableCell>	Currency Code</TableCell>
            <TableCell>Exchange Rate</TableCell>
            <TableCell>	Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.currencyName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.currencyName}
              </TableCell>
              <TableCell>{row.currencySymbol}</TableCell>
              <TableCell>{row.currencyCode}</TableCell>
              <TableCell>{row.exchangeRate}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}