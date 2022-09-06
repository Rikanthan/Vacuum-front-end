import axios from 'axios';
 const url = "http://localhost:8085/appointment";
class AppointmentService{
    getAllAppointments(){
       return axios.get(url);
    }
    getAllAppointmentsByServiceCenter(id){
        return axios.get(`${url}/byServiceCenter?id=${id}`);
    }
}
export default new AppointmentService