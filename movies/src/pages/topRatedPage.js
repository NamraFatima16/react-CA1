import PageTemplate from '../components/templateMovieListPage'
import {  getTopRatedMovies } from "../api/tmdb-api";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';


const TopRatedMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('toprated', getTopRatedMovies)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  
      return (
        <PageTemplate
          title='Top Rated Movies'
          movies={movies}
          action={() => (
            <PlaylistAddIcon fontSize="large" color="primary" />
          )}
        />
      );
  };

export default TopRatedMoviesPage;

