import {
    Card,
    CardActionArea,
    CardMedia,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/zoom";
  
  const MovieCardnew = ({ imgUrl, title, movieId }) => {
    const navigate = useNavigate();
    return (
      <>
        <Card
          sx={{
            m: "1px",
            display: "flex",
            padding: "5px",
            marginRight: 3,
            marginLeft: 3,
          }}
        >
          <CardActionArea
            onClick={() => {
              navigate(`../movie/${movieId}`, { replace: true });
            }}
          >
            <CardMedia component="img" image={imgUrl} alt={title} />
          </CardActionArea>
        </Card>
      </>
    );
  };

  export default MovieCardnew;