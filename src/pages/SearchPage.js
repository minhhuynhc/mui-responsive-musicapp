import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Header from "../layouts/dashboard/header";

const SearchPage = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
    <Header searchHeader = {true}/>
    <div
      style={{
        padding: 20,
        backgroundImage:
          "linear-gradient(0deg, rgba(20,21,22,1) 90%, rgba(3,5,32,0.9612219887955182) 98%, rgba(2,20,62,0.9332107843137255) 100%)",
      }}
    >
      <Box sx={{ height: 100 }}></Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant="h4" color="white">
              Browse all
            </Typography>
        </Grid>
        {data.map((item) => (
          <Grid item xs={6} sm={4} md={3} lg={2.4}>
            <Card sx={{ 
                borderRadius: 2, 
                bgcolor: "grey",
                  // bgColor: {item.bgColor},
                  width: 180, 
                  height: 180,
                }}
            >
              <CardActionArea
                sx={{
                  padding: 3,
                  
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.unsplash.com/photo-1671695157166-c4bbd8e6e94e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                  sx={{
                    position: "absolute",
                    transform: "rotate(30deg)",
                    bottom: -30,
                    right: -50,
                    scale: "0.5",
                  }}
                  alt=""
                />

                <CardContent>
                  <Typography variant="h4" color="initial">
                    Artist
                  </Typography>
                  <Typography variant="body1" color="initial">
                    Sub
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
};

export default SearchPage;
