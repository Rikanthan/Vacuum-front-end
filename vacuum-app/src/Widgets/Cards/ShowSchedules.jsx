import { Alert, CircularProgress, Grid, IconButton, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react"
import Schedule from "./Schedule";
import axios from "axios";

export default function ShowSchedules() {

    const [appointments,setAppointments] = useState([]); 
    const [schedule,setSchedule] = useState([]);
    var date = new Date('2022-09-06T07:00:29');
        Date.prototype.addHours = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
        }
        for(var i = 1; i < 12 ; i++){
           var next = new Date(date.addHours(1));
            schedule.push(next);
        }
        
    return (
        <>
            <Grid item>
                {(schedule.map((element, index) => {
                    {

                        return (index < 11) ?
                            (
                                <Schedule
                                    time={element.getHours()}
                                    booking={index % 2 == 0 ? true : false}
                                />
                            ) :
                            <CircularProgress />
                    }
                }))
                }
            </Grid>
        </>
    )
}