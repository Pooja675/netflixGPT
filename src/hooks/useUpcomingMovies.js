import { useDispatch } from "react-redux";
import { addPopularMovies, addTopRatedMovies, addUpComingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpComingMovies = () => {

    const dispatch = useDispatch();

    //Fetch data from TMDB api and update store
  const getUpComingMovies = async() => {

    const data = await fetch( 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)

    const json = await data.json();

    console.log(json.results)
    dispatch(addUpComingMovies(json.results))
   
  }

  useEffect(() => {
    getUpComingMovies()
  },[])
}

export default useUpComingMovies;