import PageTemplate from '../components/templateMovieListPage'
import { getSimilarMovies } from "../api/tmdb-api";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { useParams } from 'react-router-dom';


const SimilarMoviesPage = (parms) => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(["similar", { id: id }],  getSimilarMovies)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;


  return (
    <PageTemplate
      title='Similar Movies'
      movies={movies}
      action={() => (
        <PlaylistAddIcon fontSize="large" color="primary" />
      )}
    />
  );
};

export default SimilarMoviesPage;
