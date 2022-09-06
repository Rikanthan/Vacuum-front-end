import { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";

export default function CheckAppointment(params) {
    const [appointment,setAppointment] = useState([]);
    const [booking,setBookings] = useState(false);
    useEffect(()=>{
        getAppointments();
    },[]);
    const getAppointments = async() =>{
        const response = await AppointmentService.getAllAppointmentsByServiceCenter(4);
        setAppointment(response.data);
    }
    return appointment;
}