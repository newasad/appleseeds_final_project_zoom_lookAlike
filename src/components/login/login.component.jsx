import React from "react";
import {Link} from 'react-router-dom';
import "./login.style.css"
import {
  Grid,
  TextField,
  Paper,
  Button,
} from "@material-ui/core";
const LoginPage = ({loding,logIn}) => {
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const errorRef =React.useRef()
   
    const handleLogin =()=>{
        if((email === "")){
           errorRef.current.innerHTML =`<span style={color="rad"}>email is required</span>`
        }else if((password=== "")){
            errorRef.current.innerHTML =`<span style={color="rad"}>password is required</span>`
        }
         logIn(email,password);
    }
  return (
    <div style={{ padding: 30 }} className="login-page">
      <Paper className="login-paper" >
        <Grid
          container
          spacing={3}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField label="email"  type="email" value={email} onFocus={(e)=>{errorRef.current.innerHTML=""}} onChange={(e)=>{setEmail(e.target.value)}} ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password"  type={"password"} value={password} onFocus={(e)=>{errorRef.current.innerHTML=""}} onChange={(e)=>{setPassword(e.target.value)}}></TextField>
          </Grid>
          <Grid item xs={12}>
              <div className="error" ref={errorRef}></div>
          </Grid>
          <Grid item xs={12}>
            <Button  className="login-btn" disabled={loding} fullWidth onClick={handleLogin}> Login </Button>
          </Grid>
          <Grid item xs={12}>
            <p> dont have an account <Link to={"/register"} className="register-link">Register</Link> </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
