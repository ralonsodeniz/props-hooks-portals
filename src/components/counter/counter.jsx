import React from "react";

import { useAppContext } from "../../providers/app.provider";

import CustomButton from "../custom-button/custom-button";

import {
  CounterContainer,
  CounterButtonsContainer,
  CounterTextContainer
} from "./counter.styles";

const Counter = () => {
  // we get the state props and actions needed from the provider using the custom hook useAppContext
  const {
    state: { count },
    openModal,
    incrementCount,
    decrementCount
  } = useAppContext();
  // we create the objects that we are going to pass as props to the components inside the modal
  const countUpModalProps = {
    text: "Count up",
    onClick: incrementCount,
    large: true
  };
  const countDownModalProps = {
    text: "Count down",
    onClick: decrementCount,
    large: true
  };

  return (
    <CounterContainer>
      <CounterTextContainer>Counter</CounterTextContainer>
      <CounterTextContainer>{count}</CounterTextContainer>
      <CounterButtonsContainer>
        <CustomButton
          text={"Count up"}
          large={false}
          onClick={() => openModal("BUTTON", countUpModalProps)}
        />
        <CustomButton
          text={"Count down"}
          large={false}
          onClick={() => openModal("BUTTON", countDownModalProps)}
        />
      </CounterButtonsContainer>
    </CounterContainer>
  );
};

export default Counter;
