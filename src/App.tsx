import React, {useState} from 'react';
import { Box, Container } from '@mui/material';
import Landing from 'components/Landing';
import MovieSelectorModal from 'components/modals/MovieSelectorModal';
import {useDisclosure} from 'hooks'
import { Movie } from 'typings';
import OpeningCrawl from 'components/OpeningCrawl';

const App = () => {
  const {
    onOpen: movieSelectorOnOpen,
    onClose: movieSelectorOnClose,
    isOpen: movieSelectorIsOpen
  } = useDisclosure();
  const [selectedMovie, setSelectedMovie] = useState<Movie>()

  const handleMovieSelectorOpen = () => {
    console.log('handleMovieSelectorOpen')
    movieSelectorOnOpen();
  }

  return (
    <Box height="100vh" width="100vw">
      <Container 
        maxWidth="xl" 
        sx={{
          maxHeight: '100%',
          height: '100%',
        }}
      >
        {!selectedMovie 
        ? (<Landing
          handleMovieSelectorOpen={handleMovieSelectorOpen}
          selectedMovie={selectedMovie}
        />)
        : (<OpeningCrawl/>)}
        <MovieSelectorModal
          onClose={movieSelectorOnClose}
          open={movieSelectorIsOpen}
          setSelectedMovie={setSelectedMovie}
        />
      </Container>
    </Box>
  );
}

export default App;
