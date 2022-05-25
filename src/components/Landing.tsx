import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import starWarsLogo from 'assets/starWarsLogoSmall.png'
import {Movie} from 'typings'
import { motion } from 'framer-motion';

interface LandingProps {
  handleMovieSelectorOpen: () => void;
  selectedMovie?: Movie;
}

const Landing: React.FC<LandingProps> = ({
  handleMovieSelectorOpen, 
  selectedMovie
}) => {
  
  return (
      <Stack 
        component={motion.div}
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        spacing={4}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.25 }}
      >
        <Box
          sx={{
            maxWidth: 860,
            px: 2,
            '& img': {
              width: '100%',
              height: 'auto'
            }
          }}
        >
          <img src={starWarsLogo} alt="Star Wars Logo" />
        </Box>
        {!selectedMovie && <Button
          onClick={handleMovieSelectorOpen}
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 6
          }}
        >
          Choose a movie
        </Button>}
      </Stack>
  )
}

export default Landing