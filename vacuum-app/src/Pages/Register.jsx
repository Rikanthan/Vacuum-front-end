import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CallIcon from "@mui/icons-material/Call";
import LockOpen from "@mui/icons-material/LockOpen";
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
    const [errMsg,setPassErrMsg] = useState("");
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
    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        if (!isValidEmail(data.email)) {
            setEmailerror(true)
            console.log(data.email);
            console.log(emailerror);
          } else {
            setEmailerror(false)
            console.log(data.email);
            console.log(emailerror);
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
              type="password"
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
              //   onChange={(e) => {
              //     setPassword(e.target.value);
              //   }}
            />
            
            {/* <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I want to receive marketing promotions and updates via email."
                style={{ textAlign: "left" }}
              />
            </FormGroup>
            <p style={{ textAlign: "left", fontSize: 14 }}>
              By clicking Sign Up, you agree to our
              <span>
                &nbsp;
                <Link>Term of Use</Link>
              </span>
              <span>&nbsp;and&nbsp;</span>
              <Link>Privacy Policy</Link>
            </p> */}
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
