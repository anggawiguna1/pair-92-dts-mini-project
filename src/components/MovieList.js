import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import tmdb from "../apis/tmdb";
  import { A11y, Navigation, Pagination, Autoplay } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/react";
  import MovieCardnew from "../components/MovieCardnew";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/zoom";
  import 'swiper/css/autoplay';
  
  const MovieList = ({ title, Url, height, width }) => {
    const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
    const [movies, setMovies] = useState();
  
    useEffect(() => {
      const fetchDataMovies = async () => {
        try {
          const res = await tmdb.get(Url);
          setMovies(res.data.results);
          // console.log("movie list res", res.data.results);
        } catch (err) {
          console.log("err movie list", err);
        }
      };
  
      fetchDataMovies();
    }, [Url]);
  
    if (!movies) {
      return (
        <>
          <Container></Container>
        </>
      );
    }
  
    return (
      <>
        <Container>
          <Typography
            sx={{
              marginBottom: 2,
              marginTop: 4,
            }}
            variant="h5"
          >
            {title}
          </Typography>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{ delay: 5000 }}
            speed={200}
            slidesPerView={5}
            className="swiper-container"
            zoom={{ maxRatio: 5 }}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCardnew
                  movieId={movie.id}
                  imgUrl={`${baseUrlForMovie}${movie.poster_path}`}
                  title={movie.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </>
    );
  };
  
  export default MovieList;
  