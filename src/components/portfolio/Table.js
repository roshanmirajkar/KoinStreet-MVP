import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, Bought, Sold, Time, Profit) {
  return { name, Bought, Sold, Time, Profit };
}

const rows = [
  createData('Bitcoin', 3000, 3300, 24, 4.0),
  createData('Litecoin', 237, 9.0, 37, 4.3),
  createData('Ethereum', 262, 16.0, 24, 6.0),
  createData('Iota', 305, 3.7, 67, 4.3),
  createData('Monero', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Transaction History</TableCell>
            <TableCell align="right">Bought</TableCell>
            <TableCell align="right">Sold</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Bought}</TableCell>
              <TableCell align="right">{row.Sold}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
              <TableCell align="right">{row.Profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}