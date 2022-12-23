import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

import "./style.css";

const playlistData = [
  {
    id: "1",
    title: "My play list #1",
  },
  {
    id: "2",
    title: "My play list #2",
  },
  {
    id: "3",
    title: "My play list #3",
  },
  {
    id: "4",
    title: "My play list #4",
  },
  {
    id: "5",
    title: "My play list #5",
  },
  {
    id: "1",
    title: "My play list #1",
  },
  {
    id: "2",
    title: "My play list #2",
  },
  {
    id: "3",
    title: "My play list #3",
  },
  {
    id: "4",
    title: "My play list #4",
  },
  {
    id: "5",
    title: "My play list #5",
  },
];

const StyledNavBar = styled("div")(({ theme }) => ({
  width: "100%",
}));

const Playlist = ({ title }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ color: "greys" }}>
        <ListItemText primary={title} sx={{ color: "gray" }} />
      </ListItemButton>
    </ListItem>
  );
};

const NavBarSection = () => (
  <>
    <List>
      <ListItem>
        <ListItemButton
          component={NavLink}
          to={"/"}
          sx={{ height: 50, color: "white" }}
        >
          <ListItemIcon>
            <Icon
              color="#8f8f8f"
              inline=""
              icon="material-symbols:home-rounded"
              width={50}
              height={50}
            />
          </ListItemIcon>
          <ListItemText disableTypography primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          component={NavLink}
          to={"/search"}
          sx={{ height: 50, color: "white" }}
        >
          <ListItemIcon>
            <Icon
              color="#8f8f8f"
              inline=""
              icon="material-symbols:search"
              width={50}
              height={50}
            />
          </ListItemIcon>
          <ListItemText disableTypography primary="Search" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          component={NavLink}
          to={"/colection/playlist"}
          sx={{ height: 50, color: "white" }}
          onClick
        >
          <ListItemIcon>
            <Icon
              color="#8f8f8f"
              inline=""
              icon="mdi:library-music-outline"
              width={50}
              height={50}
            />
          </ListItemIcon>
          <ListItemText disableTypography primary="Your library" />
        </ListItemButton>
      </ListItem>
    </List>
    <Box></Box>
    <Button></Button>
    <Button></Button>
    <Divider color="warning" />

    <Box
      className="userPlaylist"
      sx={{
        width: "100%",
        maxWidth: 360,
        height: 300,
        bgcolor: "black",
        overflow: "auto",
      }}
    >
      <List sx={{}}>
        {playlistData.map((playlist) => (
          <Playlist title={playlist.title} />
        ))}
      </List>
    </Box>
  </>
);

const renderContent = (
  <>
    <StyledNavBar>
      <IconButton component={NavLink} to='/'>
        <MusicNoteIcon color="success" sx={{ width: 40, height: 40 }} />
        {/* Logo spotify */}
      </IconButton>
      <NavBarSection />
      {/* <CreatePlaylist/>
        <LikedSong/>
        <Divider/>
        <UserPlayLists/> */}
    </StyledNavBar>
  </>
);

const NavBar = ({ open, onCloseNavBar }) => {
  const isDesktop = useResponsive("up", "lg");
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{ sx: { width: 240, bgcolor: "black" } }}
      >
        {renderContent}
      </Drawer>

      {/* {isDesktop ? <div>alo</div> : <div>ola</div>} */}
    </>
  );
};

export default NavBar;
