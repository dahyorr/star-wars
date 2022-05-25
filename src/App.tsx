import React, {useState, useEffect} from 'react';
import { AnimatePresence } from "framer-motion"
import { Box, Container } from '@mui/material';
import Landing from 'components/Landing';
import MovieSelectorModal from 'components/modals/MovieSelectorModal';
import {useDisclosure} from 'hooks'
import { Movie } from 'typings';
import OpeningCrawl from 'components/OpeningCrawl';
import CharacterList from 'components/CharacterList';

const App = () => {
  const {
    onOpen: movieSelectorOnOpen,
    onClose: movieSelectorOnClose,
    isOpen: movieSelectorIsOpen
  } = useDisclosure();
  const [selectedMovie, setSelectedMovie] = useState<Movie>()
  const [displayCrawl, setDisplayCrawl] = useState(true)

  useEffect(() => {
    if(selectedMovie){
      setDisplayCrawl(true)
    }
  }, [selectedMovie])

  const handleMovieSelectorOpen = () => {
    movieSelectorOnOpen();
  }

  return (
    <Box 
      height="100vh" 
      width="100vw"
      sx={{
        overflow: 'hidden'
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{
          maxHeight: '100%',
          height: '100%',
        }}
      >
      
      <AnimatePresence>
        {!selectedMovie && <Landing
          handleMovieSelectorOpen={handleMovieSelectorOpen}
          selectedMovie={selectedMovie}
        />}
      </AnimatePresence>

        { selectedMovie && (
        <>
          {displayCrawl && (
          <OpeningCrawl
            text={selectedMovie.opening_crawl}
            episodeId={selectedMovie.episode_id}
            title={selectedMovie.title}
            setDisplayCrawl={setDisplayCrawl}
            animationDuration={40}
          />)}
          {!displayCrawl && (
          <CharacterList
            movie={selectedMovie}
          />)}
        </>)}

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
