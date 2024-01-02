import React from "react";

const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      width="100%"
      height="auto"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube Video"
      allowFullScreen
      className="sm:h-96 h-72 rounded-xl"
    />
  );
};

export default YouTubePlayer;
