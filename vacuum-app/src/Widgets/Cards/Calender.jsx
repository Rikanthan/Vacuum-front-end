import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { blue } from '@mui/material/colors';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Day(week) {
  const color = week.today ? "blue" : "white";
  return (
    <Card sx={{ width: 100 }} style = {{margin: 5,backgroundColor: color}} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {week.day}
        </Typography>
        <Divider/>
        <Typography sx={{ fontSize: 32 }} color="text.secondary" >
         {week.date}
        </Typography>
      </CardContent>
    </Card>
  );
}
