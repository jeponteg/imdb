import React, {FC} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const footercontainer = {
  height:64, 
  background:'#fff', 
  display:'flex', 
  justifyContent:'center', 
  alignItems:'center'
}
const Footer:FC = () => {
  return (
    <Box sx={footercontainer}>
      <Typography  variant="h4" component="div" fontSize={14} m={0} >
        By JAvier Ponte
      </Typography>
    </Box>
  )
}

export default Footer