import React, {useState, useEffect} from 'react';
import { Card } from './../card/card.jsx';
import { Box, Grid } from '@mui/material';
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ md: 5}}
        columns={{ md: 5 }}
        >
        {key.map((value, index) => {
          return (
            < Card
              number={value.number}
              word={value.word}
            />
          );
        })}
        {/* <div>{JSON.stringify(key)}</div> */}
      </Grid>
    </Box>
   );
};
