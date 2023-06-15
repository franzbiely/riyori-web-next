"use client"
import React, { useState } from 'react';
import { IconButton, TextField, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantityField = () => {
  const [quantity, setQuantity] = useState(10);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center" sx={{
        backgroundColor: '#f6f6f6',
        display:'inline-block',
        padding: '5px',
        borderRadius:'20px',
        fontSize: '16px'
      }}>
      <IconButton onClick={handleDecrement} sx={{
        padding: '0px 5px',
      }}>
        <RemoveIcon />
      </IconButton>
      <span>{quantity}</span>
      <IconButton onClick={handleIncrement} sx={{
        padding: '0px 5px'
      }}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityField;