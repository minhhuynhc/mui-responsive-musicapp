import { createTheme } from "@mui/material";
import { getTokenFromResponse } from "./userData/getToken";
import Router from "./Routes";
import ThemeProvider from "./theme";
import SpotifyWebApi from "spotify-web-api-js";
import { useEffect } from "react";
import { useStateValue } from "./userData/StateProvider";

const s = new SpotifyWebApi();

function App() {
  const [{ token, discover_weekly }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
    }
  }, [token, dispatch])
  console.log()
  return (
    <ThemeProvider>
      <Router/>
    </ThemeProvider>
  ); 
}

export default App;
