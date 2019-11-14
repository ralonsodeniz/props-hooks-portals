import React from "react";

import AppProvider from "../../providers/app.provider";
import ModalProvider from "../../providers/modal.provider";

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
        <ModalProvider>
          <Counter />
          <VideoPlayer />
          <ModalContainer />
        </ModalProvider>
      </AppProvider>
    </AppContainer>
  );
};

export default App;
