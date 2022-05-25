import React from 'react'
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { cmToFeet, cmToInches } from 'helpers/unitConversion';

interface CustomTableFooterProps{
  totalHeight: number,
  noOfCharacters: number,
}

const CustomTableFooter: React.FC<CustomTableFooterProps> = ({
  totalHeight,
  noOfCharacters
}) => {
  const totalHeightInFeet = Math.floor(cmToFeet(totalHeight));
  const totalHeightInInches = Math.floor(cmToInches(totalHeight))

  return (
    <TableFooter>
      <TableRow>
        <TableCell align='center' sx={{border: 'none'}}>
          <Typography>Number of Characters: {noOfCharacters}</Typography>
        </TableCell>
        <TableCell align='center' sx={{border: 'none'}}>
          <Typography>Total Height: {totalHeight} cm ({totalHeightInFeet} ft, {totalHeightInInches} in)</Typography>
        </TableCell>
      </TableRow>
    </TableFooter>
  )
}

export default CustomTableFooter