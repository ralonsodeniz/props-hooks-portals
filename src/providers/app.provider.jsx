import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
// we create an initial object for the context we are creating, with both state and actions.
// the actions are defined as empty functions, inside the provider we will define the functions themself
const CONTEXT = {
  state: {
    count: 0,
    videoUrl: "",
    showModal: false,
    modalType: null,
    modalProps: {}
  },
  incrementCount: () => {},
  decrementCount: () => {},
  setVideoUrl: () => {},
  openModal: () => {},
  closeModal: () => {}
};
// we create the context with its initial context object and a custom hook so we just have to call it when we want to get something from the context inside any component wrapped by the provider
const AppContext = createContext(CONTEXT);
export const useAppContext = () => useContext(AppContext);
// now we create the provider that will wrap the part of the app we want it to have access to the context
const AppProvider = ({ children }) => {
  // we define the initial state object
  const INITIAL_STATE = {
    count: 0,
    videoUrl: "",
    showModal: false,
    modalType: null,
    modalProps: {}
  };
  // we modify it using the useState hook that will give us acces to setState
  const [state, setState] = useState(INITIAL_STATE);
  // now we define the actions that are going to modify the state using setState
  const incrementCount = () =>
    setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
  const decrementCount = () =>
    setState(prevState => ({ ...prevState, count: prevState.count - 1 }));
  const setVideoUrl = url => setState({ ...state, videoUrl: url });
  // openModal action allows us to open the modal component and also pass to it which type of component we want to load in the modal and the props to render it
  const openModal = (modalType, modalProps) =>
    setState({ ...state, showModal: true, modalType, modalProps });
  const closeModal = () => setState({ ...state, showModal: false });
  // finally we render the context provider, passing as value the state and the actions, wrapping its children
  return (
    <AppContext.Provider
      value={{
        state,
        incrementCount,
        decrementCount,
        setVideoUrl,
        openModal,
        closeModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  // node is anything that can be rendered: numbers, strings, elements or an array
  children: PropTypes.node
};

AppProvider.defaultProps = {
  children: null
};

export default AppProvider;
