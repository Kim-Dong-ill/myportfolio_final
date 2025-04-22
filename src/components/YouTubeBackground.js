import React, { useEffect, useRef } from "react";
import "../css/components/youTubeBackground.css";

const YouTubeBackground = ({ src, onLoad }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleCanPlayThrough = () => {
      if (onLoad) onLoad();
    };

    const video = videoRef.current;
    video.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, [onLoad]);

  return (
    <div className="youtube-background-container">
      <video
        ref={videoRef}
        className="video-background"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={onLoad}
      />

      <div className="youtube-overlay-only"></div>
    </div>
  );
};

export default YouTubeBackground;
