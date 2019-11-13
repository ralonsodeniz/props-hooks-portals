import React from "react";

import { useAppContext } from "../../providers/app.provider";

import { VideoFrame } from "./video-container.styles";

const VideoContainer = () => {
  const {
    state: { videoUrl }
  } = useAppContext();
  return (
    <VideoFrame
      src={videoUrl}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      title="Video"
    />
  );
};

export default VideoContainer;
