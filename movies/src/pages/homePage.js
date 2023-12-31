import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";


const HomePage = (props) => {
  const { page } = useParams();
  const { data, error, isLoading, isError } = useQuery(['discover', {page: page}], getMovies)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 //const addToFavorites = (movieId) => true

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}

        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
        }}

      />
      {console.log(page)}
      {console.log( "IIIIIII AAAAMMMM HHHEEEEERRReeee" )}
      <Pagination sx={{ display: 'flex', justifyContent: 'center' }} count={10} page={+page}
        
        renderItem={(item) => (
          <PaginationItem
            component={Link}
           to={`/movies/discover/${item.page}`}
            {...item}
          />

        )}

      />
    </>


  );

};
export default HomePage;