import { Alert, CircularProgress, Grid, IconButton, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react"
import Schedule from "./Schedule";


const schedule = ["8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm",
    "4:00 pm", "5:00 pm", "6:00 pm"];

export default function ShowSchedules() {
    return (
        <>
            <Grid item>
                {(schedule.map((element, index) => {
                    {

                        return (index < 11) ?
                            (
                                <Schedule
                                    time={element}
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