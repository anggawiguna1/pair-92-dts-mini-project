import './assets/css/App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box, ThemeProvider } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import MovieList from './containers/MovieList';
import DetailMovie from './containers/DetailMovie';
import theme from './themes/theme';
import ProtectedComponent from "./components/ProtectedComponent";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movielist" element={<MovieList />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/movie/:movieId"
              element={
                <ProtectedComponent>
                  <DetailMovie />
                </ProtectedComponent>
              }
            />
            <Route
              path="*"
              element={
                <Box sx={{
                  display: 'flex', 
                  margin: 10, 
                  justifyContent: 'center',
                  alignItems: 'center', 
                  flexDirection: 'column',
                }}>
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
                    alt="404"
                  />
                  <p>You have reach the edge of universe</p>
                  <Link to="/">Take me home!</Link>
                </Box>
              }
            />
          </Routes>
        </ScrollToTop>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
