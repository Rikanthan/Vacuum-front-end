import { Alert, CircularProgress, Grid, IconButton, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react"
import Schedule from "./Schedule";
import axios from "axios";
import CheckAppointment from "../../Services/ProcessAppointment";

export default function ShowSchedules(props) {
    const appointment = CheckAppointment();
    function isBooking(day){
        var flag = false;
        appointment.map((element) =>{
           var ele = new Date(element.appointmentTime);
            if(day.getHours() === ele.getHours() 
            && day.getDate() === ele.getDate()
             && day.getFullYear() === ele.getFullYear()
             && ele.getMonth() === ele.getMonth()) 
            {
                flag = true;
            }
        })
        return flag;
    } 
    
    const [schedule,setSchedule] = useState([]);
        var date = props.date;
       
        Date.prototype.setHrs = function(){
            this.setHours(7,0,0,0);
            return this;
        }
        date = new Date(date.setHrs());
        Date.prototype.addHours = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
        }
        for(var i = 1; i < 12 ; i++){
           var next = new Date(date.addHours(1));
           if(!schedule.includes(next)){
            isBooking(next);
            schedule.push(next);
           }
        }
        
    return (
        <>
            <Grid item>
                {(schedule.map((element, index) => {
                    {
                        return (index < 11) ?
                            (
                                <Schedule
                                    time={element.toLocaleTimeString()}
                                    booking={!isBooking(element)}
                                />
                            ) :
                           null
                    }
                }))
                }
            </Grid>
        </>
    )
}