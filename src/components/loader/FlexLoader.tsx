import { Box, CircularProgress } from '@mui/material'
import React from 'react'

interface LoaderProps {
  size?: string | number
}

const FlexLoader: React.FC<LoaderProps> = ({size}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={size}/>
    </Box>
  )
}

export default FlexLoader