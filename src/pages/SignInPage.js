import { CheckBox, Image } from "@mui/icons-material";
import {
  Button,
  Divider,
  Typography,
  TextField,
  Link,
  Checkbox,
  Box,
  makeStyles,
} from "@mui/material";
import React from "react";



const SignInPage = () => {
  return (
    <div style={{ display: "block", margin: "10px" }}>
      <img
        src={
          "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.15752-9/318440109_1230882684439957_1978224922395465673_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=3Kw6ns8SjeMAX_1Krf0&_nc_ht=scontent.fsgn5-6.fna&oh=03_AdSljC5L2LD45bR54_L5xbXs41Puu8f3O8MhIAay1zgmvQ&oe=63D37092"
        }
        alt={""}
        style={{ width: "100px", height: "100px" }}
      />
      <hr />
      <Typography variant="body1" color="initial">
        To continue, please SignIn
      </Typography>
      <Button> Continue with Facebook</Button>
      <Divider
        sx={{
          "&::before, &::after": {
            borderColor: "black",
          },
        }}
      >
        Or
      </Divider>
      <TextField id="" label="Email adress or username" variant="outlined" />
      <TextField id="" label="Password" variant="outlined" />
      <Link>Forgot your password?</Link>
      <div style={{ display: "flex" }}>
        <Checkbox></Checkbox>
        <Typography variant="body1" color="initial">
          Remember me
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained">Sign In</Button>
      </div>

      <Divider inset />
      <Typography variant="body1" color="initial">
        Haven't have an account?
      </Typography>
      <Button variant="outlined">Sign up Minh's Music App</Button>
    </div>
  );
};

export default SignInPage;
