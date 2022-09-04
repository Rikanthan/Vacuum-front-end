import { Alert, CircularProgress, Grid, Snackbar } from "@mui/material";
import React, {useEffect,useState} from "react"
import axios from "axios";
import Day from "../Widgets/Cards/Calender";


const dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export default function ShowCalendar(){
  const weeks = [];
var curr = new Date;
var first = curr.getDate() - curr.getDay();
for(var i = 1; i<=7; i++){
  var next = first + i;
  var nextday = (new Date(curr.setDate(next)));
  weeks.push(nextday);
  }
    return(
        <>
        <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      margin={2}
    >
      {(weeks.map((element, index) => {
        {
            
          return (index < 8) ?
            (
              <Day
               day = {dayNames[index]}
                date = {element.getDate()}
                />
            ) :
            <CircularProgress/>
        }
      }))
      }
      {/* <Snackbar
        open={open}
        autoHideDuration={2000}
        message="Note archived"
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Booking started!
        </Alert>
        </Snackbar> */}
    </Grid>
        </>
    )
}