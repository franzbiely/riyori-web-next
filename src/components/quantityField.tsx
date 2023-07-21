"use client"
import React, { useEffect, useState } from 'react';
import { IconButton, TextField, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantityField = (
  { fontSize = '16px', changeEvent, value = 1}: 
  {
    fontSize?: string,
    changeEvent?: any,
    value?: number
  }
) => {

  const handleIncrement = () => {
    changeEvent(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      changeEvent(value - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center" sx={{
        backgroundColor: '#f6f6f6',
        display:'inline-block',
        padding: '5px',
        borderRadius:'20px',
        fontSize: fontSize
      }}>
      <IconButton onClick={handleDecrement} sx={{
        padding: '0px 5px',
      }}>
        <RemoveIcon />
      </IconButton>
      <span>{value}</span>
      <IconButton onClick={handleIncrement} sx={{
        padding: '0px 5px'
      }}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityField;