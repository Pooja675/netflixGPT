import { useDispatch } from "react-redux";
import { addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    //Fetch data from TMDB api and update store
  const getTopRatedMovies = async() => {

    const data = await fetch( 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)

    const json = await data.json();

    console.log(json.results)
    dispatch(addTopRatedMovies(json.results))
   
  }

  useEffect(() => {
    getTopRatedMovies()
  },[])
}

export default useTopRatedMovies;