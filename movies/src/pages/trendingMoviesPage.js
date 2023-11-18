import PageTemplate from '../components/templateMovieListPage'
import { getTrendingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';


const TrendingMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('trending', getTrendingMovies)

  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;
    
        return (
          <PageTemplate
            title='Trending Movies'
            movies={movies}
            action={() => (
              <PlaylistAddIcon fontSize="large" color="primary" />
            )}
          />
        );
    };
  
  export default TrendingMoviesPage;
  