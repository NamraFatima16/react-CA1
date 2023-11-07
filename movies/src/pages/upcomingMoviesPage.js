
//import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";
//import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
//import { getUpcomingMovie } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovie)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  
    // useEffect(() => {
    //     getUpcomingMovie()
    //       .then(upcomingMovies => setMovies(upcomingMovies))
    //       .catch(error => console.error("Error fetching upcoming movies:", error));
    //   }, []);

      
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






