import {CircularProgress} from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/img/logo.svg";

import { auth } from '../config/firebase';

const SignUp = () => {
    const navigate = useNavigate();
    const [user, isLoading, error] = useAuthState(auth);
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (user) {
          navigate("/");
        }
      }, [user, navigate]);
    
      if (isLoading) {
        return (
          <Box
            sx={{
              backgroundColor: "black",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        );
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    mt: 20,
                    mb: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src={Logo} alt=""/>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Typography color='red'>{errorMessage}</Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/signin">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;
