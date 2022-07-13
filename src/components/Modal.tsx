import React, {FC, useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { getTrailerById } from '../api/imdb';
import { Video } from '../interfaces/movieInterface' 

interface Props {
    id:string
}

const iframecontainer = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const iconbutton = {
  border: '2px solid #fff',
  borderRadius: '50%',
  background: '#15353d',
  color:'#fff',
  height: '2.5rem',
  width:'2.5rem',
   '&:hover':{
    border: '2px solid #15353d',
    background: '#fff',
    color:'#000000',
  }
}

const BasicModal = ({id}:Props) => {
   
  const [ open, setOpen] = React.useState(false);
  const [ video, setVideo ] = useState('')

  const handleOpen = () => getTrailer(id)

  const handleClose = () => setOpen(false);

  const getTrailer = async (id:string) => {
    const res = await getTrailerById(id).then((resp:Video) => {
      return(resp)
    })
    setVideo(res.linkEmbed)
    setOpen(true);
  }

  return (
    <Box>
      <Button onClick={handleOpen}>          
        <PlayArrowIcon sx={iconbutton} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={iframecontainer}>   
          <iframe 
            src={video} 
            height='100%' 
            width='100%'
          />         
        </Box>
      </Modal>
    </Box>
  );
}
export default BasicModal
