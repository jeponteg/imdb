import { FC } from 'react';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';

interface Props{
  nextPage:() => void,
  prevPage:() => void,
}

const useStyles = makeStyles({
  mainContainer:{
    display:'flex',
    justifyContent:'center',
  },
  arrow:{
    display: 'flex',
    alignItems: 'center',
    background:'#fff',
    padding: 8,
    margin:8,
    border: '1px solid #DFE9F0',
    borderRadius: 8,
    width: 'max-content',
    cursor:'pointer',
    '&:hover':{
      background:'#0000',
      color:'#fff'
    }
  }
});

const Pagination:FC<Props> = ({prevPage,nextPage}) => {

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.arrow} onClick={prevPage} >
        <ArrowBackIcon />
      </Box>
      <Box className={classes.arrow} onClick={nextPage} >
        <ArrowForwardIcon />
      </Box>
    </Box>
  );
}

export default  Pagination