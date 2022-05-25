import React from 'react'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Gender } from 'typings';
import Tooltip from '@mui/material/Tooltip';

interface GenderIconProps{
  gender: Gender
}

const GenderIcon: React.FC<GenderIconProps> = ({gender}) => {
  switch(gender){
    case 'male':
      return <Tooltip title="Male">
        <MaleIcon htmlColor="#03a1fe"/>
      </Tooltip>
    case 'female':
      return <Tooltip title="Female">
        <FemaleIcon htmlColor="#ed48a3"/>
      </Tooltip>
    case 'hermaphrodite':
      return <Tooltip title="Hermaphrodite">
        <TransgenderIcon htmlColor="#7302a1"/>
      </Tooltip>
    default:
      return <Tooltip title="Unknown">
        <QuestionMarkIcon/>
      </Tooltip>
  }
}

export default GenderIcon