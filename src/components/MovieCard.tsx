import React,{FC} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import BasicModal from './Modal';

interface Props {
  img:string,
  title:string,
  imDbRating:number,
  crew:string,
  year:number,
  id:string
}

const maincontainer = {
  maxWidth: 345, 
  maxHeight:'95%', 
  minHeight:'95%', 
  border:'1px solid #f8d4d4'
}
const modacontanier = {
  position:'relative',
  bottom:'2rem', 
  display:'flex',
  justifyContent:'flex-end'
}

const MovieCard:FC<Props> = ({ img, title, imDbRating, crew, year, id }) => {

  return(
    <Card sx={maincontainer}>
      <Box>
        <img src={img} alt={title} width="100%" />
      </Box>
      <Box sx={modacontanier}>
        <BasicModal id={id} />
      </Box>
            
      <CardContent sx={{position:'relative', bottom:'3rem', pb:0}}>
        <Box display='flex' alignItems='center'>
          <Rating name="read-only" value={imDbRating/2} readOnly max={5}/>
            <Typography gutterBottom variant="h1" component="div" fontSize={14} m={0} pl={0.5} >
              {imDbRating}
            </Typography>
        </Box>
                
        <Typography gutterBottom variant="h1" component="div" fontSize={16} fontWeight='bold' pt={2}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h1" component="div" fontSize={13}>
          Año: {year}
        </Typography>
        <Typography gutterBottom variant="h3" component="div" fontSize={13} pt={1}>
          {crew}
        </Typography>
      </CardContent>
    </Card>
    
  )
}
export default MovieCard