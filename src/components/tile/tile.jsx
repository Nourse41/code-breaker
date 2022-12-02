import React, {useState, useEffect} from 'react';
import { Card, CardContent, CardHeader, Divider, Button, Stack } from '@mui/material';

export const Tile = (props) => {
  const [color, setColor] = useState('#6E63C6');
  const [clickStatus, setClickStatus] = useState(false);

  return (
    <Card spacing={2}>
      <CardContent style={{textAlign: 'center'}}>
        <Button
          className='wordButton'
          variant='contained'
          fullWidth
          padding={2}
          color='secondary'
          onClick={(event) => {
            setClickStatus(true);
            event.target.innerText = props.number;
          }}
       >
          {props.word}
       </Button>
      </CardContent>
    </Card>
  );
};
