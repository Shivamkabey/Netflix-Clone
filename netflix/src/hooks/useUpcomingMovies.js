import axios from "axios";
import { getUpcomingMovies } from "../redux/movieSlice";
import {options, Upcoming_Movies } from "../utils/constant";
import { useDispatch } from "react-redux";


const useUpcomingMovies = async () => {
    const dispatch=useDispatch();
    try {
        const res = await axios.get(Upcoming_Movies, options);
        dispatch(getUpcomingMovies(res.data.results));
    } catch (error) {
        console.log(error);
    }
}

export default useUpcomingMovies;