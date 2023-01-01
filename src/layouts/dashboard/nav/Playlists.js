import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { useStateValue } from '../../../userData/StateProvider';

const Playlists = () => {
  const [{playlists}, dispatch] = useStateValue()
  return (
    <List sx={{}}>
      {/* {console.log({playlists})} */}
        {playlists?.items.map((playlist) => (
          <Playlist title={playlist.name} />
        ))}
      </List>
  );
};

export default Playlists;


const Playlist = ({ title }) => {
    return (
      <ListItem disablePadding>
        <ListItemButton sx={{ color: "greys" }}>
          <ListItemText primary={title} sx={{ color: "gray" }} />
        </ListItemButton>
      </ListItem>
    );
  };