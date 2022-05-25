import {Stack, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import React, { useState, useEffect, useCallback } from 'react'
import CharacterTable from './CharacterTable'
import axios from 'axios';
import {Character, Movie} from 'typings'
import FlexLoader from './loader/FlexLoader';
import { useSnackbar } from 'notistack';

interface CharacterListProps {
  movie: Movie,
  setSelectedMovie: (value: Movie | undefined) => void,
}

const CharacterList: React.FC<CharacterListProps> = ({movie, setSelectedMovie}) => {
  const characters = movie.characters;
  const [loading, setLoading] = useState(true)
  const [charactersData, setCharactersData] = useState<Character[]>([])
  const {enqueueSnackbar} = useSnackbar()

  const fetchCharacters = useCallback(async () => {
    try {
      setLoading(true)
      const res = await Promise.all(
        characters.map(character => axios.get<Character>(character))
      );
      const data = res.map((res) => res.data);
      setCharactersData(data.flat());
    } catch {
      enqueueSnackbar("An Error occured Fetching characters", {variant: 'error'})
    }
    finally{
      setLoading(false)
    }
  }, [characters, enqueueSnackbar]);

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters])
  
  if(loading){
    return <FlexLoader size="5rem"/>
  }

  return (
    <Stack
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        py: 2
      }}
      spacing={1.5}
    >
      <CharacterTable
        data={charactersData}
        title={movie.title}
      />

      <Button
        variant="outlined"
        sx={{
          alignSelf: "center"
        }}
        onClick={() => setSelectedMovie(undefined)}
        startIcon={<HomeIcon />}
      >
        Home
      </Button>
    </Stack>
  )
}

export default CharacterList