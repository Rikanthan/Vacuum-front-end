import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Divider, Grid } from '@mui/material';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Schedule(schedule) {
    const booking = schedule.booking;
    const time = schedule.time;
    return (
        <Card sx={{ width: 150 }} style={{ margin: 5, backgroundColor: "white" }} >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                   {time}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    No bookings on this time slot
                </Typography>
                {
                    booking ?
                        <Button variant='contained' color="success" style={{ textTransform: 'capitalize' }}> Add booking</Button> :
                        <Button variant='contained' disabled style={{ textTransform: 'capitalize' }}> Add booking</Button>
                }
            </CardContent>
        </Card>
    );
}
