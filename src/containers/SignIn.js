import {CircularProgress} from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GoogleIcon from "@mui/icons-material/Google";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from "../assets/img/logo.svg";

import { auth } from '../config/firebase';

const SignIn = () => {
    const navigate = useNavigate();
    const [user, isLoading, error] = useAuthState(auth);
    const [errorMessage, setErrorMessage] = React.useState('');

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
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const loginGoogleHandler = async () => {
        const googleAP = new GoogleAuthProvider();
        try {
            const response = await signInWithPopup(auth, googleAP);
            navigate("/");
          } catch (err) {
            console.log(err);
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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
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
                                autoComplete="current-password"
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
                        Sign In
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        startIcon={<GoogleIcon></GoogleIcon>}
                        sx={{ mb: 2 }}
                        onClick={loginGoogleHandler}
                    >
                        Sign in with Google
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/signup">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default SignIn;
