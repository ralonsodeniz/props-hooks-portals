// we need a provider for the modal functionality mainly because of the toggleModal prop
// if we keep all the data in the same provider when we update it all the components that consume it will reload, including the modal component and it will trigger a flickering effect of it when counting up and down
import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const CONTEXT = {
  state: {
    showModal: false,
    modalType: "",
    modalProps: {}
  },
  openModal: () => {},
  closeModal: () => {}
};

const ModalContext = createContext(CONTEXT);
export const useModalContext = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const INITIAL_STATE = {
    showModal: false,
    modalType: "",
    modalProps: {}
  };

  const [state, setState] = useState(INITIAL_STATE);
  // openModal action allows us to open the modal component and also pass to it which type of component we want to load in the modal and the props to render it
  const openModal = (modalType, modalProps) =>
    setState({ showModal: true, modalType, modalProps });
  const closeModal = () => setState({ ...state, showModal: false });

  return (
    <ModalContext.Provider value={{ state, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
};

ModalProvider.defaultProps = {
  children: null
};

export default ModalProvider;
