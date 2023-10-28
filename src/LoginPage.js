import React, { useState } from 'react';
import axios from 'axios'
import { TextField, Button, Grid, Paper, Typography, Stack } from '@mui/material';
import { useLocation,useHistory, Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const history = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [unAuthDatails, setUnAuthDetails] = useState()
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    let data = {
      email: email,
      password: password
    }
    let getData;
    await axios.post('http://localhost:4000/loginRoute/login', data).then((res) => {

      getData = res
    }).catch((err) => {
      console.log("err", err);
    })
    console.log("GetData", getData);
    if (getData) {
      localStorage.setItem('userDetails', JSON.stringify(getData.data[0]))
      if (getData.data[0]?.status == 'ACTIVE') {
        console.log("came or not");
        history('/Mainpage')
      } else {
         console.log("not");
        setUnAuthDetails(getData.data)
      }
    }
    // Implement your login logic here, e.g., send a request to your backend.
    console.log('Email: ', email);
    console.log('Password: ', password);
  };

  const signUPage = async ()=>{
    history('/SignupPage')
  }

  return (

    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '20px', width: '300px' }}>
        <Typography style={{color:'red'}}>{unAuthDatails ? unAuthDatails : null}</Typography>
        <Typography variant="h5">Login</Typography>
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Password"
          fullWidth
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
        <Stack justifyContent='space-between' alignItems={'center'}>
          <Button sx={{ marginTop: '30px', cursor: 'pointer' }} onClick={signUPage}>Sign Up</Button>
          <Button sx={{ marginTop: '30px', cursor: 'pointer' }} onClick={signUPage}>Forgot Password</Button>
        </Stack>
      </Paper>
    </Grid>

  );
};

export default LoginPage;
