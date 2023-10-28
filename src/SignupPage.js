import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const history = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [getError, setGetError] = useState('')
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = async () => {
    let data = {
      "name": name,
      "email": email,
      "mobileNumber": mobileNumber
    }
    // history('/OtpChecker',{data)
    let getData = await axios.post('http://localhost:4000/loginRoute/signUp', data).then((res) => res).catch((err) => {
      console.log("err", err);
    })
    console.log("getData ***", getData);
    if (getData.data.code == 600) {
      localStorage.setItem('userDetails',JSON.stringify(getData.data.data))
      history('/OtpChecker')
    } else {
      setGetError(getData.data.data)
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '20px', width: '300px' }}>
        <Typography variant="h5">Sign Up</Typography>
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          margin="normal"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Mobile Number"
          fullWidth
          variant="outlined"
          margin="normal"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
        <Typography style={{color:'red'}}>{getError ? getError : null}</Typography>
      </Paper>
    </Grid>
  );
};

export default SignupPage;
