import React, {useState, useEffect} from 'react';
import { Card, CardContent, CardHeader, Divider, Button, Stack } from '@mui/material';

export const Tile = (props) => {

  return (
    <Card>
      <CardHeader title={props.word}></CardHeader>
    </Card>
  );
};
