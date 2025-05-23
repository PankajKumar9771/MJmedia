import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/memevideo.mp4";

const VideoPlayer = ({ setPlayState, playState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === e.currentTarget) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
