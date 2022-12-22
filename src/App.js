import { createTheme, ThemeProvider } from "@mui/material";
import Router from "./Routes";


const customTheme = createTheme()
function App() {
  return (
    // <ThemeProvider>
    // </ThemeProvider>
      <Router/>
    // <div>alooo</div>
  );
}

export default App;
