import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";

import "../css/components/youTubeBackground.css";

const YouTubeBackground = ({ videoId, onReady }) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      mute: 1,
      playlist: videoId, // loop이 작동하려면 playlist에 ID 필요
    },
  };
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const handleCanPlayThrough = () => {
  //     if (onLoad) onLoad();
  //   };

  //   const video = videoRef.current;
  //   video.addEventListener("canplaythrough", handleCanPlayThrough);

  //   return () => {
  //     video.removeEventListener("canplaythrough", handleCanPlayThrough);
  //   };
  // }, [onLoad]);

  return (
    <div className="youtube-background-container">
      <YouTube
        videoId={videoId}
        opts={opts}
        className="video-background"
        onReady={(e) => {
          e.target.mute();
          if (onReady) onReady();
        }}
      />

      <div className="youtube-overlay-only"></div>
    </div>
  );
};

export default YouTubeBackground;
