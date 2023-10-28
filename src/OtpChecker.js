import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const OtpChecker = () => {
    const history = useNavigate()
    let getData = JSON.parse(localStorage.getItem('userDetails'));
    const [getOtp, setGetOtp] = useState()
    const [getUserDetails, setGetUserDetails] = useState(getData);
    const [getError, setGetError] = useState('')
    const handleOtpChange = (e) => {
        setGetOtp(e.target.value)
    }
    const verifiOtp = async () => {
        console.log(getOtp, 'getOtp');
        let data = {
            "mobileNumber": getUserDetails.mobilenumber,
            "otp": getOtp

        }
        let getData = await axios.post('http://localhost:4000/mobileNum/verfiyOtp', data).then((res) => res).catch((err) => {
            console.log("err", err);
        })
        console.log("getData ***", getData);
        if (getData.data.code == 600) {
            history('/Mainpage')
        } else {
            setGetError(getData.data.message)
        }
    }

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Paper elevation={3} style={{ padding: '20px', width: '300px' }}>
                <TextField
                    label="Enter Mobile Number"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={getUserDetails.mobilenumber}
                // onChange={handleEmailChange}
                />

                <TextField
                    label="Enter OTP"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    // value={email}
                    onChange={handleOtpChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={verifiOtp}
                    style={{ marginTop: '20px' }}
                >send</Button>
                 <Typography style={{color:'red'}}>{getError ? getError : null}</Typography>
            </Paper>
        </Grid>
    )
}

export default OtpChecker