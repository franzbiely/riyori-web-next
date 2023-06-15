"use client"
import React from 'react';
import { Table as _Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
  
const Table = () => {
  // Sample data for the table
  const drinks = [
    { name: 'Coffee', price: '$2.50' },
    { name: 'Tea', price: '$1.50' },
    { name: 'Orange Juice', price: '$3.00' },
    { name: 'Soda', price: '$2.00' },
  ];
  const cellStyles = {
    paddingLeft: 0,
    paddingRight: 0,
  };

  return (
    <TableContainer component={Paper} sx={{
        boxShadow: 'none',
      }}>
      <_Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} sx={cellStyles}>
                <Typography variant="subtitle1" fontWeight="bold">Select</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drinks.map((drink, index) => (
            <TableRow key={index}>
              <TableCell sx={cellStyles}>{drink.name}</TableCell>
              <TableCell sx={cellStyles}>{drink.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </_Table>
    </TableContainer>
  );
};

export default Table;