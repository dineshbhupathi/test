import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Button } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>DDE</Title>
      <Typography component="p" variant="p">
       This application used to find duplicates in the datasets
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
       last update on 15 March, 2019
      </Typography>
      <div>
        <Button color="primary" variant='contained'>
          Install
        </Button>
      </div>
    </React.Fragment>
  );
}