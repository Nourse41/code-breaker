import React, {useState, useEffect} from 'react';
import { Card, CardContent, CardHeader, Divider, Button, Stack } from '@mui/material';
import { Tile } from './../tile/Tile.jsx'

export const Row = (props) => {
  return (
    <div className='row'>
      <Stack direction="row" spacing={2}>
        {props.row.map((value, key) => {
          return (
            <Tile
              number={value.number}
              word={value.word}
              key={key}
            />
          );
        })}
      </Stack>
    </div>
  );
}