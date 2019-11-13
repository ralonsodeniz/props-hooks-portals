import React, { useState } from "react";

import { useAppContext } from "../../providers/app.provider";

import CustomButton from "../custom-button/custom-button";

import { SubmitVideoContainer } from "./video-url.styles";

const VideoUrl = () => {
  const [url, setUrl] = useState("");
  const { setVideoUrl } = useAppContext();

  const handleChange = event => setUrl(event.target.value);
  const submitUrl = () => {
    setVideoUrl(url);
    setUrl("");
  };
  return (
    <SubmitVideoContainer>
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Insert video url here"
      />
      <CustomButton text="Submit video url" onClick={submitUrl} />
    </SubmitVideoContainer>
  );
};

export default VideoUrl;
