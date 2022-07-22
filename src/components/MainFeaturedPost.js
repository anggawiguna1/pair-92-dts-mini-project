import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function MainFeaturedPost(props) {
  const { post } = props;
  //console.log(post);
  return (
    <Paper
      sx={{
        minHeight: "500px",
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${post.image})`,
        paddingY: 5,
          "&::after": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          },
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              top: 300,
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography fontWeight="700" variant="h4">
              {post.title} ({post.release_date.slice(0, 4)})
            </Typography>
            <Typography  color="inherit" paragraph>
              {post.overview}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
