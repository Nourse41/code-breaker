import React, {useState, useEffect} from 'react';
import { Tile } from '../tile/tile.jsx';
import { Box, Grid, Container, Table } from '@mui/material';
import { wordBank } from './../../misc/helperFunctions.js';
import { keyGenerator } from './../../misc/helperFunctions.js';
import { wordGenerator } from './../../misc/helperFunctions.js';
import { fieldGenerator } from './../../misc/helperFunctions.js';


export const Field = () => {
  //  const [userFeed, setUserFeed] = useState<any>([]);
  const [key, setKey] = useState([]);
  const [playerStart, setSetPlayerStart] = useState(true);

  useEffect(() => {
    setKey( fieldGenerator(wordGenerator(wordBank), keyGenerator(playerStart)) )
  }, [])

  return (
    <Box>
      <Container fixed>
          {key.map((value, index) => {
            return (
              < Tile
                number={value.number}
                word={value.word}
                key={index}
              />
            );
          })}
      </Container>
    </Box>
   );
};
