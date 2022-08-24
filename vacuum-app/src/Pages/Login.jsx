import React from "react";
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
        <img
          src="/images/aara.png"
          width="110"
          height="95"
          alt="logo"
          align="left"
        />
      </div>
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
              id="adminname"
              type="text"
              label="Username"
              variant="outlined"
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
              //   onChange={(e) => {
              //     setUsername(e.target.value);
              //   }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
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
              //   onChange={(e) => {
              //     setPassword(e.target.value);
              //   }}
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
              //   onClick={() => login()}
            >
              Login
            </Button>
            <Grid container
            justifyContent = "space-between"
            >
            <Link underline="none">Forgot password?</Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'/>
            <Link underline="none">Don't have an account? Register</Link>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
}
