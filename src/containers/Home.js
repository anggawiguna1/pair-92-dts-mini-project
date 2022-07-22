import { useEffect, useState } from "react";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import tmdb from '../apis/tmdb';
import MainFeaturedPost from "../components/MainFeaturedPost";
import MovieList from "../components/MovieList";

const mainFeaturedPost = {
    title: 'Jurassic World Dominion',
    overview:
      "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    image: 'https://image.tmdb.org/t/p/original/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
    release_date: '2022-06-01',
  };

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [moviesReady, setMoviesReady] = useState(false);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const fetchedMovies = await tmdb.get("trending/movie/day");
          setMovies(fetchedMovies.data.results);
          setMoviesReady(true);
        } catch (error) {
          console.log(error);
        }
      };
      
      fetchMovies();
    }, []);

    return (
        <>
            <MainFeaturedPost post={mainFeaturedPost} />
            <MovieList
              Url="movie/now_playing?language=en-US&page=1"
              title="Now Playing"
            />
            <MovieList
              Url="trending/movie/day"
              title="Trending"
            />
            <MovieList
              Url="movie/upcoming?language=en-US&page=1"
              title="Upcoming"
            />
        </>
    )
}

export default Home;