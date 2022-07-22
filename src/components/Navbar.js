import { MovieFilter, Logout } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/img/logo.svg";
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';

const navItems = [
  { text: 'Home', link: '/' },
  { text: 'Movie List', link: '/movielist' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/signin");
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <Toolbar>
        <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              marginRight: {
                xs: "1rem",
              },
            }}
            alt="Logo Movlix."
            src={Logo}
          />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
              MOVLIX
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 6, display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ 
              flexGrow: 5, 
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            {loading ? null : user ? (
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ marginRight: 5, marginTop: 0.5 }}>
                  {user.email}
                </Box>
                <Box>
                  <Logout onClick={onLogout} />
                </Box>
            </Box>
            ) : (
              <NavLink
                to={'/signin'}
                key={'Sign In'}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
              >
                Sign In
              </NavLink>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Navbar;
