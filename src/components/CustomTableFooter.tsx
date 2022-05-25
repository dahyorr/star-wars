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
  return (
    <TableFooter>
      <TableRow>
        <TableCell align='center'>
          <Typography>Number of Characters: {noOfCharacters}</Typography>
        </TableCell>
        <TableCell align='center'>
          <Typography>Total Height: {totalHeight}cm({Math.floor(cmToFeet(totalHeight))}ft, {Math.floor(cmToInches(totalHeight))}in)</Typography>
        </TableCell>
      </TableRow>
    </TableFooter>
  )
}

export default CustomTableFooter