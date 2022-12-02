import React, {useState, useEffect} from 'react';
import { Card, CardContent, CardHeader, Divider, Button, Stack } from '@mui/material';

export const Tile = (props) => {
  const [color, setColor] = useState('#6E63C6');
  const [clickStatus, setClickStatus] = useState(false);

  return (
    <Card>
      {/* <CardHeader title={`${props.word} (${props.number})`}></CardHeader> */}
      <CardContent style={{textAlign: 'center'}}>
        <Button
          className='button'
          variant='contained'
          fullWidth
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
