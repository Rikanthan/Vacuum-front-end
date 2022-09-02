import { CircularProgress, Grid } from "@mui/material";
import React, {useEffect,useState} from "react"
import ServiceCenterCard from "../Widgets/Cards/ServiceCenterCard";
import axios from "axios";
import ServiceCenterData from "../Constants/ServiceCenterData";
// {
//     id: "",
//     name: "",
//     description: "",
//     email: "",
//     imgUrl: "",
//     mobileNumber: "",
//     address: {
//       id: "",
//       city: "",
//       state: "",
//       landMark: "",
//       pinCode: ""
//     }
//   }
export default function ShowServiceCenter(){
    const [serviceCenters,setServiceCenters] = useState([]); 
    const [loader, setLoader] = useState(true);
    useEffect(()=> {
        async function fetchServiceCenters () {
          await axios.get("http://localhost:8086/servicecenter")
          .then((res)=>{
            setServiceCenters(res.data);
            setLoader(false)
         })
        }
        fetchServiceCenters()
      },[])
    return(
        <>
        <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
    >
      {(serviceCenters.map((element, index) => {
        {
          return !loader ?
            (
              <ServiceCenterCard
                name={element.name}
                email = {element.email}
                imgUrl = {element.imgUrl}
                phoneNumber = {element.phoneNumber}
                description = {element.description}
                city = {element.address.city}
                landMark = {element.address.landMark}
                pinCode = {element.address.pinCode}
                state = {element.address.state}
                onpress ={() => {
                //   setClick(true);
                //   setIdx(index);
                }}

              >
              </ServiceCenterCard>
            ) :
            <CircularProgress/>
        }
      }))
      }
    </Grid>
        </>
    )
}