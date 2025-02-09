import React, { useEffect, useState } from 'react'
import Search from '../Search';
import Spinner from '../Spinner';
import { useDebounce } from 'react-use';
import MovieCard from '../MovieCard';




const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method:'GET',
    headers:{
        accept:'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}



const Movie = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [debouncedSearchTerm, setDebounceSearchTerm] = useState('');

 useDebounce(()=> setDebounceSearchTerm(searchTerm), 500,[searchTerm]);

    const fetchMovie = async (query = '') =>{
setIsLoading(true);
setErrorMessage("");
    try{
        const endpoint = query? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);
        if(!response.ok){
            throw new Error('Failed to fetch the data');
        }
        const data = await response.json();
        if(data.response === 'False'){
            setErrorMessage(Error || 'Failed to fetch the data');
            setMovieList([]);
            return;
        }
        setMovieList(data.results || []);
        // if(query && data.results.length > 0){
        //  await updateSearchCount(query, data.results[0]);
        // }
    }catch(error){
 console.error(`Error fetching movie: ${error}`);
 setErrorMessage("Error while fethcing the movie. try again")
    }finally{
        setIsLoading(false);
        
    }
    }

    useEffect(()=>{
fetchMovie(debouncedSearchTerm);
    },[debouncedSearchTerm]);


  return (
    <main className=' mt-5'>
        <div className=' pattern h-[100%]'/>
        <div className='wrapper'>
            <div>
            <img src="showcase.png" className='mt-[50px]' alt="" />
             <h1>Find <span className='text-gradient'>Movies</span> That You Enjoy</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        

        <section className='all-movies'>
            <h2 className='mt-[20px]'>All Movies</h2>
            {
                isLoading?(
                    <p className='text-white'> <Spinner/> </p>
                ):errorMessage ? (
                    <p className='text-red-500'>{errorMessage}</p>
                ):(
                   <ul>
                    {
                        movieList.map((movie)=>(
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                   </ul>
                )

            }

        </section>
        </div>
        

    </main>
  )
}

export default Movie