import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';


const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovie)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  
      return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => (
            <PlaylistAddIcon fontSize="large" color="primary" />
          )}
        />
      );
  };

export default UpcomingMoviesPage;






