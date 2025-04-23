import React from "react";

function PageYoutube({ youtubeId }) {
  return (
    <div style={{ width: 1100, height: 620 }}>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId.id}?&mute=${youtubeId.mute}&rel=0`}
        title="YouTube video player"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default PageYoutube;
