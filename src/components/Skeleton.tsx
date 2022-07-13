import {FC} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

interface Props {
  isLoading: boolean;
}

const box = {
  width:230,
  height:320,
  background:'#ffffff85'
}
const box2 = {
  width:230,
  height:10,
  background:'#ffffff85'
}

const Skelet:FC<Props> =(props)  => {

  const { isLoading } = props;

  return (
    <Grid container >
      {
        (isLoading ? Array.from(new Array(18)):[]).map((index:number) => (
          <Grid key={index} item xs={6} sm={4} md={3} lg={2} display='flex' justifyContent='center'>
            <Box pt={5}>
              <Skeleton variant="rectangular" sx={box}/>
              <Box pt={2}>
                <Skeleton variant="rectangular" sx={box2} />
              </Box>
              <Box pt={2}>
                <Skeleton variant="rectangular" sx={box2} />
              </Box>
              <Box pt={2}>
                <Skeleton variant="rectangular" sx={box2} />
              </Box>
              <Box pt={2}>
                <Skeleton variant="rectangular" sx={box2} />
              </Box>
            </Box> 
          </Grid>
        ))
      }
    </Grid>
  );
}

export default Skelet

