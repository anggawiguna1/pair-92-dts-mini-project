import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from "react-router-dom";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <Card id={movie.id} sx={{ display: 'flex', width: 400, margin: 5, cursor: 'pointer' }}
      onClick={() => {
        navigate(`../movie/${movie.id}`, { replace: true });
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt="Movie poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', color: '#FFF' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
            <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MovieCard;