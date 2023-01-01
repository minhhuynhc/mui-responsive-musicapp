import { Button, Chip, createTheme, Menu, MenuItem } from "@mui/material";
import { getTokenFromResponse } from "./userData/getToken";
import Router from "./Routes";
import ThemeProvider from "./theme";
import SpotifyWebApi from "spotify-web-api-js";
import { useEffect, useState } from "react";
import { useStateValue } from "./userData/StateProvider";
import { useCookies } from "react-cookie";

const s = new SpotifyWebApi();

function App() {
  const [{ token, user }, dispatch] = useStateValue();
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  // sessionStorage.setItem('token', null)

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    console.log({ _token });
    if (_token) {
      sessionStorage.setItem("token", _token);
    }

    if (sessionStorage.getItem("token")) {
      s.setAccessToken(sessionStorage.getItem("token"))
      s.getMe()
      .then((user) => {
            dispatch({
              type: "SET_USER",
              user,
            });
            console.log(1);
          })
      .then(() =>
        s.getUserPlaylists(user?.id).then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists,
          });
          console.log(2);
        })
      );
      };
    }
  , [token, dispatch]);
  // console.log(!Boolean(sessionStorage.getItem('token')==='null'))
  // console.log({user})

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
