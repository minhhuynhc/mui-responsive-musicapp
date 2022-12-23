import { Button, Icon, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
    return (
        <>
         <Icon>

         </Icon>   
         <Typography variant="h3" color="initial">Page not found</Typography>
         <Typography variant="body1" color="initial">We can't seem to find the page you are looking for.</Typography>
         <Button component={NavLink} to='/'>Home</Button>
         <Button>Help</Button>
        </>
    );
};

export default Page404;