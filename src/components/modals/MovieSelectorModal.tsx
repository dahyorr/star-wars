import React, {useState, useEffect} from 'react'
import { List, ListItemButton, Typography } from '@mui/material'
import BaseModal from './BaseModal'
import { Movie } from 'typings';
import { fetchMovieList } from 'api';
import {useSnackbar} from 'notistack';
import dayjs from 'dayjs'

interface MovieSelectorModalProps{
  open: boolean,
  onClose: () => void,
  setSelectedMovie: (movie: Movie) => void,
}

const MovieSelectorModal: React.FC<MovieSelectorModalProps> = ({
  open,
  onClose,
  setSelectedMovie
}) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const {enqueueSnackbar} = useSnackbar();

  const sortByYear = (a: Movie, b: Movie) => {
    if(dayjs(a.release_date) > dayjs(b.release_date)){
      return 1;
    }
    return -1;
  }

  useEffect(() => {
    fetchMovieList()
      .then(res => {
        const results = res.data.results
        setMovies(results.sort(sortByYear));
      })
      .catch(err => {
        console.log(err)
        enqueueSnackbar('Error fetching movies', {variant: 'error'})
      })
      .finally(() => {
        setLoading(false)
      })
  }, [enqueueSnackbar])

  const onMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie)
    onClose()
  }

  return (
    <BaseModal 
      open={open} 
      onClose={onClose}
      maxWidth="xs"
      loading={loading}  
    >
      <List 
        sx={{
          minHeight: 200,
          minWidth: 200,
          overflow: 'hidden',
        }}
      >
        {movies.map(movie => (
          <ListItemButton
            key={movie.episode_id}
            onClick={() => onMovieSelect(movie)}
            sx={{
              justifyContent: "center"
            }}
          >
            <Typography
              fontWeight="bold"
              align='center'
            >
              {movie.title}
            </Typography>
          </ListItemButton>
        ))}
        
      </List>
    </BaseModal>
  )
}

export default MovieSelectorModal