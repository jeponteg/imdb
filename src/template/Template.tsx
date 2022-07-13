import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Box from '@mui/material/Box';

const Template = ({children}:any) => {

    return (
        <Box sx={{background:'#15353d'}}> 
            <Header />
                <Box sx={{background:'#15353d;', minHeight:'98vh', pb:5, pt:15 }}>
                    {children}
                </Box>
            <Footer />
        </Box>
      
    )
}

export default Template