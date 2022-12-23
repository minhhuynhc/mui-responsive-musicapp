// import { AppBar, Box, Drawer, Grid } from '@mui/material';
// import React from 'react';

// const NowPlayingBar = () => {
//     return (
//         <>
//             {/* <Box sx={{position:'fixed', left:0, bottom:0, width: '100%', height: '64px', bgcolor:'red', zIndex: 99 }}>

//             </Box>    */}
//             <Drawer anchor='bottom' variant='permanent' PaperProps={{sx:{height:50, bgcolor:'red'}}}>
//                 <Grid container>
//                     <Grid item></Grid>
//                     <Grid item></Grid>
//                     <Grid item></Grid>
//                     <Grid item></Grid>
//                     <Grid item></Grid>
//                 </Grid>
//             </Drawer>
//         </>
//     );
// };

// export default NowPlayingBar;
import React, { useEffect, useRef, useState } from "react";
import "./PlayingBar.css";
// import { useDataLayerValue } from '../DataLayer';
// import { baseURL } from '../../config';
import RepeatIcon from "@mui/icons-material/Repeat";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Drawer, Grid, Slider } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
const NowPlayingBar = () => {
  const [volume, setVolume] = useState(100);
  // const [{trackIndex}, dispatch] = useDataLayerValue()
  const sliderChange = (e, val) => {
    console.log("hmmm", val);
    setVolume(val);
  };
  const [isPlaying, setIsPlaying] = useState(false);
  // const audioSrc = trackIndex?`${baseURL}/${trackIndex.audioFile}`:""
  // const audioRef = useRef(new Audio(audioSrc));
  const [trackProgress, setTrackProgress] = useState("");
  const intervalRef = useRef();

  // useEffect(() => {
  //     console.log("Thong tin tu playingBar ne cau 🧚‍♂️🧚‍♂️🧚‍♂️", {trackIndex})
  //     audioRef.current.pause();
  //     audioRef.current = new Audio(audioSrc);
  //     audioRef.current.play();
  //     trackIndex && setIsPlaying(true);
  //     startTimer();
  //     }, [trackIndex]);

  // useEffect(() => {
  //     if (isPlaying) {
  //       audioRef.current.play();
  //     } else {
  //       audioRef.current.pause();
  //     }
  //     console.log({isPlaying},{audioSrc})
  //   }, [isPlaying]);

  // const startTimer = () => {
  // clearInterval(intervalRef.current);
  // intervalRef.current = setInterval(() => {
  //     setTrackProgress(audioRef.current.currentTime);
  // }, 1000);
  // };

  // const onChangeTrackProgress = (event) => {
  //     setTrackProgress(event.target.value);
  //     audioRef.current.currentTime = event.target.value;
  //   };
  const [status, setStatus] = useState(false);
  return (
    <Drawer anchor='bottom' variant='permanent' PaperProps={{sx:{height:80, bgcolor:'red', overflow:'hidden'}}}>
    <div className="playingBar">
      <div className="playingBar_left">
        {/* {trackIndex?
            <div className="songData">
                <img
                    className='songAvt' 
                    src={`${baseURL}/${trackIndex.avatar}`} alt="" />
                <div className="songInfo">
                    <div className="title">{trackIndex.title}</div> 
                    <div className="artist">{trackIndex.artist}</div>
                </div>
            </div>
            : */}
        <div className="songData">No audio choosed</div>
        {/* } */}
        <div className="fvrIcon" onClick={() => setStatus(!status)}>
          {!status ? <FavoriteBorderIcon /> : <Favorite />}
        </div>
      </div>

      <div className="playingBar_center">
        <div className="controlButton">
          <div className="shuffle">
            <ShuffleIcon />
          </div>
          <div className="skipPrevious">
            <SkipPreviousIcon />
          </div>
          <div className="play_plause" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </div>
          <div className="skipNext">
            <SkipNextIcon />
          </div>
          <div className="repeat">
            <RepeatIcon />
          </div>
        </div>
        <div className="center_slider">
          <input
            className="progressSlider"
            type="range"
            min={"0"}
            // max={audioRef.current.duration}
            value={trackProgress}
            // onChange={onChangeTrackProgress}
          />
        </div>
      </div>
      <div className="playingBar_right">
        <InfoIcon className="infoIcon" />
        <div className="volumeIcon">
          {volume > 50 ? (
            <VolumeUpIcon />
          ) : volume === 0 ? (
            <VolumeMuteIcon />
          ) : (
            <VolumeDownIcon />
          )}
        </div>
        <div className="slider">
          <Slider
            onChange={(e, val) => sliderChange(e, val)}
            size="small"
            defaultValue={10}
            aria-label="Small"
            className="volume-slideBar p-10"
            color="secondary"
          />
        </div>
        <Grid />
      </div>
    </div>
    </Drawer>
  );
};

export default NowPlayingBar;
