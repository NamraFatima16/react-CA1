
import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";
//import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


const UpcomingMoviesPage = (props) => {
    const [movies, setMovies] = useState([]);

  
    useEffect(() => {
        getUpcomingMovie()
          .then(upcomingMovies => setMovies(upcomingMovies))
          .catch(error => console.error("Error fetching upcoming movies:", error));
      }, []);

      
      // const addToFav = (movieId) => {
      //   const updatedMovies = movies.map((m) =>
      //     m.id === movieId ? { ...m, favorite: true } : m
      //   );
      //   setMovies(updatedMovies);
      // };
  
      return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => (
            //<AddToFavoritesIcon movie={movie} />
            <PlaylistAddIcon fontSize="large" color="primary" />
          )}
        />
      );
  };

export default UpcomingMoviesPage;






