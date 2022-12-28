import { AppBar, Box, Button, IconButton, styled, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { bgBlur } from '../../../utils/cssStyles';
import Searchbar from './Searchbar';
import { NavLink } from 'react-router-dom';



const StyledRoot = styled(AppBar)(({theme}) => ({
    ...bgBlur({color: ''}),
    boxShadow: 'none',
    width: `calc(100% - ${240}px)`,
}))
const login = false
const Header = ({searchHeader}) => {
    const [hover, setHover] = useState('outlined')
    return (
        <>
          <StyledRoot>
            <Toolbar>
            {searchHeader && <Searchbar/>}
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
                {
                    login?
                    <Button 
                    onMouseOver={()=>setHover('contained')}
                    onMouseLeave={()=>setHover('outlined')}
                    variant= {hover}>
                    Upgrade
                    </Button>
                    :
                    <>  
                    <Button variant='contained'>nút</Button>
                        <Button component={NavLink} to={"../signup"} variant= 'outlined'>Sign up</Button>
                        <Button component={NavLink} to={"../signin"} variant= 'contained'>Sign in</Button>
                    </>
                    
                }
            </Toolbar>
          </StyledRoot>  
        </>
    );
};

export default Header;