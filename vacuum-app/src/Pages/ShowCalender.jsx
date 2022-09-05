import { Alert, CircularProgress, Grid, IconButton, Snackbar } from "@mui/material";
import React, {useEffect,useState} from "react"
import axios from "axios";
import Day from "../Widgets/Cards/Calender";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";


const dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export default function ShowCalendar(){
  const weeks = [];
  
var curr = new Date;
const [currday,setCurrday] = useState(curr.getDay()-1);
console.log(currday);
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
      <IconButton onClick={()=> {
        if(currday <= 0)
        {
          setCurrday(0);
          console.log(currday);
        }else{
          setCurrday(currday-1);
          console.log(currday);
        }
        }
        }>
        <KeyboardArrowLeft/>
      </IconButton>
      {(weeks.map((element, index) => {
        {
            
          return (index < 7) ?
            (
              <Day
                day = {dayNames[index]}
                date = {element.getDate()}
                today = { index === currday ? true : false}
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
        <IconButton onClick={()=> {
          if(currday >= 6)
        {
          setCurrday(6);
          console.log(currday);
        }
        else{
          setCurrday(currday+1)}
          console.log(currday);
        }
        
        }>
        <KeyboardArrowRight/>
      </IconButton>
    </Grid>
        </>
    )
}