"use client";
import React from "react";
import {
  Table as _Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const cellStyles = {
  paddingLeft: 0,
  paddingRight: 0,
};
const textStyles = {
  fontSize: 12,
};

// Sample data for the table
const drinks = [
  { col1: "Coffee", col2: "$2.50" },
  { col1: "Tea", col2: "$1.50" },
  { col1: "Orange Juice", col2: "$3.00" },
  { col1: "Soda", col2: "$2.00" },
];

interface Table_Props {
  header: any;
  datas: {
    col1: any;
    col2?: any;
    col3?: any;
    colName?: any;
  }[];
}

const Table = ({ header = "Select", datas = drinks }: Table_Props) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
      }}
    >
      <_Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={10} sx={cellStyles}>
              <Typography variant="subtitle1" fontWeight="bold">
                {header}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data, index) => (
            <TableRow key={index}>
              <TableCell sx={cellStyles}>{data.col1}</TableCell>
              <TableCell sx={cellStyles}>
                <div style={{ flexDirection: "column", display: "flex" }}>
                  <div>{data.col2}</div>
                  <div style={textStyles}>{data.colName}</div>
                </div>
              </TableCell>
              {data.col3 && <TableCell sx={cellStyles}>{data.col3}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </_Table>
    </TableContainer>
  );
};

export default Table;
