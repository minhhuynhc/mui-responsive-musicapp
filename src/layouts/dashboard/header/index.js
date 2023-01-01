import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  ClickAwayListener,
  IconButton,
  Link,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { bgBlur } from "../../../utils/cssStyles";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";
import { accessUrl } from "../../../userData/getToken";
import { useStateValue } from "../../../userData/StateProvider";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Menu } from "@mui/icons-material";
const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: "" }),
  boxShadow: "none",
  width: `calc(100% - ${240}px)`,
}));

const Header = ({ searchHeader }) => {
  const [{user }, dispatch] = useStateValue();
  const token = Boolean(sessionStorage.getItem('token'))
  const [anchorEl, setAnchorEl] = useState(null);
  const [hover, setHover] = useState("outlined");
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClickChip = async (event) => {
    setAnchorEl(event.currentTarget);
    console.log('clicked the chip '+Boolean(anchorEl))
    await sessionStorage.clear();
    console.log(sessionStorage.getItem('token'))

  };
  const open = Boolean(anchorEl);
  return (
    <>
      <StyledRoot>
        <Toolbar>
          {searchHeader && <Searchbar />}
          <IconButton
            sx={{
              borderRadius: "50%",
              bgcolor: "gray",
              padding: 1,
              boxSizing: "border-box",
              justifyContetnt: "center",
            }}
          >
            <ArrowBackIosIcon color="warning" />
          </IconButton>
          <IconButton
            sx={{
              borderRadius: "50%",
              bgcolor: "gray",
            }}
          >
            <ArrowForwardIosIcon color="warning" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {  token ? (
            <>
              <Button
                onMouseOver={() => setHover("contained")}
                onMouseLeave={() => setHover("outlined")}
                color="inherit"
                variant={hover}
                sx={{ borderRadius: "30px" }}
              >
                Upgrade
              </Button>
              <Tooltip
              title='log out'>
                <Chip
                  // aria-controls={open ? 'basic-menu' : undefined}
                  // aria-haspopup="true"
                  // aria-expanded={open ? 'true' : undefined}
                  avatar=<Avatar src={user?.images[0].url} />
                  variant="outlined"
                  label={user?.display_name}
                  clickable={true}
                  onClick={handleClickChip}
                  // onDelete={()=>{}}
                  // deleteIcon={
                  //   anchorEl ? (
                  //     <ArrowDropDownIcon />
                  //   ) : (
                  //     <ArrowDropUpIcon />
                  //   )
                  // }
                />
                </Tooltip>
               {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
              </Menu> */}
            </>
          ) : (
            <>
              <Button component={Link} href={accessUrl} variant="outlined">
                Sign up / Sign In
              </Button>
            </>
          )}
        </Toolbar>
      </StyledRoot>
    </>
  );
};

export default Header;
