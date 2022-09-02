import React, { useState } from "react";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import {
  InputAdornment,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import { Person } from "@mui/icons-material";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "cover",
//     flexWrap: "wrap",
//     marginTop: 93,
//     paddingBottom: 140,
//     "& > *": {
//       width: theme.spacing(60),
//     },

//     text: {
//       "& > *": {
//         margin: theme.spacing(1),
//         width: "25ch",
//       },
//       avatar: {
//         "& > *": {
//           alignContent: "center",
//         },
//       },
//     },
//   },
// }));

export default function Login() {

    const [data,setData] = useState({
      username : "",
      password : ""
    });
    const [error,setError] = useState(false);
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyaWthbnRoYW4iLCJleHAiOjE2NjE5ODA1MzYsImlhdCI6MTY2MTk0NDUzNn0.Y7jJaf1oyxjmKKswRAgxxRaQ-akgirnjY_J_78yNJ1s");
  function submit(e){
    if(data == null){
        setError(true);
        setTimeout(()=>{
            setError(false);
        },2000);
    } else {
        axios.post("http://localhost:8081/authenticate",{
            username: data.username,
            password: data.password,
        })
        // axios.get("http://localhost:8081/login?username=rikanthan&password=Rikanthan@34",
        //    {
        //     headers: {
        //       authorization: 'Bearer '+token ,
        //       'Content-Type': 'application/json'
        //    } 
            //  params: 
            //   {
            //    username : data.username, 
            //    password : data.password
            //     }
            //})
        .then((res) =>{
          console.log(res.data);
          //setToken(res.data);
          //console.log(token);
          // axios.get("http://localhost:8081/login",
          //  {
          //    params: 
          //     {
          //      username : data.username, 
          //      password : data.password
          //       }, 
          //     headers: {
          //       "Content-Type" : "application/json",
          //       "Authorization" : "Bearer "+token
          //     }
          //   }).then((response)=>{
              
          //     console.log(response.data)
          //   } )
            
        });
    }
  }
  function handle(e){
    const newdata = {...data};
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        height: 750
      }}
    >
      <div
        style={{
          alignItems: "left",
        }}
      >
      </div>
      <div style={{ paddingTop: 10 }}>
        <Paper
          elevation={3}
          style={{
            width: 383,
            backgroundColor: "white",
            border: "1px solid",
            borderColor: "black",
            margin: "auto",
            padding: 15,
          }}
        >
          <div>
            <LockIcon />
          </div>
          <div>
            <h2
              style={{
                textAlign: "center",
              }}
            >
             Login
            </h2>
          </div>
          <form>
            <TextField
              id="username"
              type="text"
              label="Username"
              variant="outlined"
              value={data ? data.username : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person/>
                  </InputAdornment>
                ),
                style: {
                  fontFamily: "nunito",
                  color: "black",
                  textShadow: "#000 1px 0 10px",
                },
              }}
              fullWidth
              margin="dense"
              style={{ textDecorationColor: "black" }}
                onChange={(e) => {
                  handle(e);
                }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              value={data ? data.password : ""}
              fullWidth
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                style: {
                  fontFamily: "nunito",
                  color: "black",
                  textShadow: "#000 1px 0 10px",
                },
              }}
              style={{ paddingBottom: 0 }}
                onChange={(e) => {
                 handle(e)
                }}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember password"
                style={{ textAlign: "left" }}
              />
            </FormGroup>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              margin="dense"
              style={{ marginBottom: 10 }}
                onClick={(e) => submit(e)}
            >
              Login
            </Button>
            <Grid container
            justifyContent = "space-between"
            >
            <Link underline="none">Forgot password?</Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'/>
            <Link href={"/register"} >Don't have an account? Register</Link>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
}
