import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Link,
  styled,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { bgBlur } from "../../../utils/cssStyles";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";
import { accessUrl } from "../../../userData/getToken";
    
const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: "" }),
  boxShadow: "none",
  width: `calc(100% - ${240}px)`,
}));
const login=false
const Header = ({ searchHeader }) => {
  const [hover, setHover] = useState("outlined");
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
          {login ? (
            <>
              <Button
                onMouseOver={() => setHover("contained")}
                onMouseLeave={() => setHover("outlined")}
                color='inherit'
                variant={hover}
                sx={{borderRadius:"30px" }}
              >
                Upgrade
              </Button>
              <Chip
                avatar=<Avatar />
                label={"Huynh Cong Minh"}
                variant="outlined"
                clickable={true}
                onClick = {()=>alert('clicked the chip')}
              />
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
