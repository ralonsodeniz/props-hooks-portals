import React from "react";

import { useAppContext } from "../../providers/app.provider";
import { useModalContext } from "../../providers/modal.provider";

import VideoUrl from "../video-url/video-url";
import CustomButton from "../custom-button/custom-button";

import { VideoPlayerContainer } from "./video-player.styles";

const VideoPlayer = () => {
  const {
    state: { videoUrl }
  } = useAppContext();

  const { openModal } = useModalContext();

  return (
    <VideoPlayerContainer>
      <VideoUrl />
      <CustomButton
        text={"Open modal for video"}
        onClick={() => {
          console.log(videoUrl);
          openModal("VIDEO");
        }}
      />
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
