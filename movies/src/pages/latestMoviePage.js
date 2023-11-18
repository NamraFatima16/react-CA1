import PageTemplate from '../components/templateMovieListPage'
import { getPopularMovies} from "../api/tmdb-api";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';


const PopularMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('latest', getPopularMovies)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  console.log(movies)
  
      return (
        <PageTemplate
          title='Popular Movies'
          movies={movies}
          action={() => (
            <PlaylistAddIcon fontSize="large" color="primary" />
          )}
        />
      );
  };

export default PopularMoviesPage;
