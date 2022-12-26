import {
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Header from "../layouts/dashboard/header";
const ColectionPage = () => {
  const data = [];
  return (
    <>
    <Header/>
      <Box
        sx={{
          paddingTop: 10,
          display: "flex",
          backgroundImage:
            "linear-gradient(0deg, rgba(20,10,52,1) 47%, rgba(37,26,99,1) 87%, rgba(60,47,161,1) 100%)",
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(133deg, rgba(20,10,52,1) 0%, rgba(105,119,134,1) 100%)",
            width: 200,
            height: 200,
            display: "flex",
          }}
        >
          <FavoriteIcon sx={{ margin: "auto", width: 60, height: 60 }} />
        </Box>
        <Box
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
            alignContent: "center",
            bgcolor: "red",
          }}
        >
          <Typography variant="body1" color="initial">
            Playlist
          </Typography>
          <Typography variant="body1" color="initial">
            Liked Songs
          </Typography>
        </Box>
        <Box>
          <NavLink to="user" />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(24,7,45,1) 100%)",
          display: "flex",
          flexDirection: "column",
          height: 310,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {data ? (
          <>
            <Icon>
              <MusicNoteIcon />
            </Icon>
            <Typography variant="body1" color="primary">
              Song you like will appear here
            </Typography>
            <Typography variant="body1" color="primary">
              Save song by tapping the heart icon.
            </Typography>
            <Button
              variant="contained"
              color="warning"
              component={NavLink}
              to="/search"
              sx={{ borderRadius: 20, maxWidth: 150 }}
            >
              Find songs
            </Button>
          </>
        ) : (
          <>
            <IconButton></IconButton>
            <Grid container>
              {data.map((SongItem) => (
                <SongItem songData={SongItem} />
              ))}
            </Grid>
          </>
        )}
      </Box>
      <Outlet />
    </>
  );
};

const SongItem = ({ songData }) => {
  return <Grid item></Grid>;
};
export default ColectionPage;
