import { Typography, Container, Box, Button } from '@mui/material'
import { convertToRomanNumeral } from 'helpers/convertToRomanNumeral';
import React, {useEffect, useRef, useState} from 'react'
import {motion} from 'framer-motion'

interface OpeningCrawlProps{
  text: string;
  episodeId: number;
  title: string;
  setDisplayCrawl: (value: boolean) => void
  animationDuration: number;
}

const OpeningCrawl: React.FC<OpeningCrawlProps> = ({
  text, 
  episodeId, 
  title,
  setDisplayCrawl,
  animationDuration
}) => {
  const crawlRef = useRef<HTMLElement>()
  const [crawlHeight, setCrawlHeight] = useState(0)

  useEffect(() => {
    const element = crawlRef.current
    if(element){
      setCrawlHeight(element.clientHeight)
      const removeCrawl = () => setDisplayCrawl(false)
      element.addEventListener('animationend', removeCrawl)
      const cleanup = () => element.removeEventListener('animationend', removeCrawl)
      return cleanup
    }
  }, [setDisplayCrawl])

  return (
    <Box
      sx={{
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          minHeight: '35vh',
          top: 0,
          right: 0,
          backgroundImage: 'linear-gradient(0deg, transparent, black 75%)',
          zIndex: 1,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Button
          sx={{
            my: 2
          }}
          component={motion.button}
          variant="outlined"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ duration: 3 }}
          onClick={() => setDisplayCrawl(false)}
        >
          Skip
        </Button>
      </Box>

    <Container 
      maxWidth='md'
      sx={{
        height: '100%',
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        // perspective: '1000px',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: "100%",
          lineHeight: '150%',
          position: 'relative',
          top: '100px',
          // visibility: 'hidden',
          // transformOrigin: '50% 100%',
          animation: `crawl ${animationDuration}s linear`,
          animationDelay: '1s',
          '@keyframes crawl': {
            '0%': {
              top: '100vh',
              transform: 'rotateX(20deg) translateZ(0)',
              display: 'block',
              visibility: 'visible'
            },
            '100%': { 
              top: `-${window.innerHeight + crawlHeight + 50}px`,
              transform: 'rotateX(25deg) translateZ(-2500px)',
              display: 'block',
              visibility: 'visible'
            }
          }
        }}
        ref={crawlRef}
      >
        <Typography
          align="center"
          color="primary"
          fontWeight='bold'
          fontSize={"2.5rem"}
          mb={1}
        >
          Episode {convertToRomanNumeral(episodeId)}
        </Typography>
        <Typography
          align="center"
          color="primary"
          fontWeight='bold'
          mb={2}
          variant="h1"
        >
          {title.toUpperCase()}
        </Typography>
        <Typography
          align="justify"
          color="primary"
          fontWeight='bold'
          fontSize={"2.5rem"}
        >
          {text}
        </Typography>
      </Box>
    </Container>
    </Box>
  )
}

export default OpeningCrawl