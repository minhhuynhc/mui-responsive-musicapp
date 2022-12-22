import { AppBar, Box, Button, IconButton, styled, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { bgBlur } from '../../../utils/cssStyles';



const StyledRoot = styled(AppBar)(({theme}) => ({
    ...bgBlur({color: ''}),
    boxShadow: 'none',
    width: `calc(100% - ${240}px)`,
}))
const Header = () => {
    const [hover, setHover] = useState('outlined')
    return (
        <>
          <StyledRoot>
            <Toolbar>
                <IconButton
                sx={{
                    borderRadius: '50%',
                    bgcolor: 'gray',
                    padding: 1,
                    boxSizing: 'border-box',
                    justifyContetnt: 'center'
                }}>
                    <ArrowBackIosIcon color='warning'/>
                </IconButton>
                <IconButton
                sx={{
                    borderRadius: '50%',
                    bgcolor: 'gray'
                }}>
                    <ArrowForwardIosIcon color='warning'/>
                </IconButton>
                <Box sx={{flexGrow: 1}}/>
                <Button 
                onMouseOver={()=>setHover('contained')}
                onMouseLeave={()=>setHover('outlined')}
                variant= {hover}>
                Upgrade
                </Button>
            </Toolbar>
          </StyledRoot>  
        </>
    );
};

export default Header;