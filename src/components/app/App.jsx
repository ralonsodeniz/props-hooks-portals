import React from "react";

import AppProvider from "../../providers/app.provider";

import Counter from "../counter/counter";
import VideoPlayer from "../video-player/video-player";
import ModalContainer from "../modal-container/modal-container";

import { AppContainer, AppTitleText } from "./App.styles";
import { GlobalStyles } from "../../global.styles";

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <AppTitleText>This is a test app</AppTitleText>
      <AppProvider>
        <Counter />
        <VideoPlayer />
        <ModalContainer />
      </AppProvider>
    </AppContainer>
  );
};

export default App;
