import React,{FC,useState} from 'react'
import MovieCard from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Pagination from '../components/Pagination';
import Skelet from '../components/Skeleton';
//import value from '../utils/data.json'

const Home:FC = () => {

  const [ currentPage, setCurrentPage ] = useState(0);
  const { movies, isLoading } = useMovies();
  const value = movies?.[0]?.items

  const filteredOperations = (): any => {
	return value?.slice(currentPage, currentPage + 18)
  }

  const nextPage = () => {
	if(value.length > currentPage + 18){
	  setCurrentPage(currentPage + 18)
	}	
  } 

  const prevPage = () => {
	if(currentPage > 0){
	  setCurrentPage(currentPage -18)
	}	
  }
    
    return(
      <Box>
        { isLoading ? 
          <Box display='flex' justifyContent='center' >
            <Skelet isLoading={isLoading}/> 
          </Box> : 
          <>
            <Box p={2} >
			        <Pagination nextPage={nextPage} prevPage={prevPage}/>
		        </Box>

            <Grid container spacing={2} pl={2} pr={2}>

              {filteredOperations()?.map((res:any, index:number) => {
                return(
                  <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
                    <MovieCard 
                      id={res.id}
                      img= {res.image} 
                      title={res.title} 
                      imDbRating={Number(res.imDbRating)}
                      crew={res.crew}
                      year={Number(res.year)}
                    />
                  </Grid>
                )
              })}
              
            </Grid>

            <Box p={2} >
			    <Pagination nextPage={nextPage} prevPage={prevPage}/>
		    </Box>
          </>        
        }
      </Box>
    )
}

export default Home