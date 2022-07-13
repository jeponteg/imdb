import { useEffect, useState } from "react";
import { getTop250Movies } from "../api/imdb";
import { Movies } from '../interfaces/movieInterface'

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ movies, setMovies ] = useState<Movies[]>([])
    
    const getMovies = async () => {
        const res = await getTop250Movies()
        setMovies([... movies,res])
        setIsLoading(false)
    }
   
    useEffect(() =>{
        getMovies()
    },[])

    return {
        movies,
        isLoading
    }
}