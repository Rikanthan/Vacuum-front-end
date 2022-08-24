import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CallIcon from "@mui/icons-material/Call";
import LockOpen from "@mui/icons-material/LockOpen";
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  InputAdornment,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Link,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import axios from "axios";

export default function Register() {
    const [data, setData] = useState({
        userType:"",
        name:"",
        email:"",
        password:"",
        phoneNo: ""
    });
    const [alert, setAlert] = useState(false);
    const [emailerror,setEmailerror] = useState(false);
    const [passerror, setPasswordErr] = useState(false);
    const [error,setError] = useState(false);
    const [visible,setVisible] = useState(false);
    const [conErr, setConErr] = useState(false);
    const [phoneerror,setPhoneErr] = useState(false);
    const [phnerrMsg,setphnErrMsg] = useState("");
    const [conErrMsg,setConErrMsg] = useState("");
    const [errMsg,setPassErrMsg] = useState("");
    const [emailErrMsg, setEmailErrMsg] = useState("");
    function submit(e){
        if(data == null){
            setError(true);
            setTimeout(()=>{
                setError(false);
            },2000);
        } else if(validate()){
            axios.post("http://localhost:8081/register",{
                userType: "Customer",
                name: data.name,
                email: data.email,
                password: data.password,
                phoneNo: data.phoneNo
            }).then((res) =>{
                console.log(res);
            });
        }
        
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

      function isValidPhone(phone) {
        return  /^\(?([9]{1})\)?([0-9]{9})$/.test(phone); 
      }
    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        if (!isValidEmail(data.email)) {
            setEmailerror(true)
            setEmailErrMsg("please enter valid email");
          } else {
            setEmailErrMsg("");
            setEmailerror(false)
          }
          if(e.target.id==='password'){
            const uppercaseRegExp   = /(?=.*?[A-Z])/;
            const lowercaseRegExp   = /(?=.*?[a-z])/;
            const digitsRegExp      = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp   = /.{8,}/;
            const passwordInputValue = data.password;
            const passwordLength =      passwordInputValue.length;
            const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
            const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
            const digitsPassword =      digitsRegExp.test(passwordInputValue);
            const specialCharPassword = specialCharRegExp.test(passwordInputValue);
            const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
            setPasswordErr(true);
            if(passwordLength===0){
                    setPassErrMsg("Password is empty");
            }else if(!uppercasePassword){
                    setPassErrMsg("At least one Uppercase");
            }else if(!lowercasePassword){
                    setPassErrMsg("At least one Lowercase");
            }else if(!digitsPassword){
                    setPassErrMsg("At least one digit");
            }else if(!specialCharPassword){
                    setPassErrMsg("At least one Special Characters");
            }else if(!minLengthPassword){
                    setPassErrMsg("At least minumum 8 characters");
            }else{
              setPasswordErr(false);
                setPassErrMsg("");
            }
          }
          if(e.target.id === 'con_password'){
            if(e.target.value === data.password){
              setConErr(false);
              setConErrMsg("");
            }else{
              console.log(e.target.value);
              console.log(data.password);
              setConErr(true);
              setConErrMsg("password doesn't match")
            }
          }
          if(!isValidPhone(data.phoneNo)){
              setPhoneErr(true);
              setphnErrMsg("phone number is not valid")
          }
          else{
            setPhoneErr(false);
            setphnErrMsg("");
          }
      }
    
      function validate() {
        if (
          data.name &&
          !emailerror &&
          data.phoneNo &&
          data.password
        ) {
          return true;
        } else {
          return false;
        }
      }
  return (
    <div style={{
        backgroundColor:"#E5E5E5"
    }}>
      <div style={{ paddingTop: 93 }}>
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
            <AccountCircle/>
          </div>
          <div>
            <h2
              style={{
                textAlign: "center",
              }}
            >
              Register
            </h2>
          </div>
          <form>
          
            <TextField
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              error={emailerror}
              value={data ? data.email : ""}
              helperText={emailErrMsg}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon/>
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
                    isValidEmail();
                    
                }}
            />
            <TextField
              id="name"
              type="text"
              label="Username"
              variant="outlined"
              value={data ? data.name : ""}
              error={!data.name ? true : false}
              helperText={data.name ? "":"username is empty"}
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
                onChange={(e) => 
                  handle(e)
                }
            />
            <TextField
              id="phoneNo"
              label="Phone Number"
              variant="outlined"
              type="tel"
              error={phoneerror}
              helperText={phnerrMsg}
              value= {data ? data.phoneNo : ""}
              fullWidth
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CallIcon/>
                  </InputAdornment>
                ),
                style: {
                  fontFamily: "nunito",
                  color: "black",
                  textShadow: "#000 1px 0 10px",
                },
              }}
              style={{ paddingBottom: 10 }}
                onChange={(e) => {
                  handle(e)
                }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type= {visible ? "text" : "password"}
              helperText={errMsg}
              error={passerror}
              value={data ? data.password : ""}
              fullWidth
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon/>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>  setVisible(!visible)}
                        edge="end"
                      >
                        {visible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
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
            <TextField
              id="con_password"
              label="Confirm Password"
              type="password"
              error={conErr}
              helperText={conErrMsg}
              variant="outlined"
              fullWidth
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpen/>
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
                  handle(e);
                }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              margin="dense"
              style={{ marginBottom: 10 }}
                onClick={(e) => submit(e)}
            >
              Register
            </Button>
            <Link>Already have an account? Login</Link>
          </form>
        </Paper>
      </div>
    </div>
  );
}
