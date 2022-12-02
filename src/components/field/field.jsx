import React, {useState, useEffect} from 'react';
import { Row } from './../row/Row'
import { Box, Grid, Container, Table } from '@mui/material';
import { wordBank } from '../../misc/helperFunctions.js';
import { keyGenerator } from '../../misc/helperFunctions.js';
import { wordGenerator } from '../../misc/helperFunctions.js';
import { fieldGenerator } from '../../misc/helperFunctions.js';


export const Field = () => {
  const [board, setBoard] = useState([]);
  const [playerStart, setSetPlayerStart] = useState(true);

  useEffect(() => {
    setBoard( fieldGenerator(wordGenerator(wordBank), keyGenerator()) )
  }, [])

  return (
    <Box>
      <Container>
          {board.map((row, key) => {
            return (
              < Row
                className="row"
                row={row}
                key={key}
              />
            );
          })}
      </Container>
    </Box>
   );
};
