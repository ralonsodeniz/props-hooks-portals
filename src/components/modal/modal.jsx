import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ children }) => {
  // we get the div with the id modal from the html
  const modal = document.querySelector("#modal");
  // we create a container inside the modal root to contain the children
  const element = document.createElement("div");
  // we use useEffect hook to mount the element in the modal root when Modal is rendered
  useEffect(() => {
    modal.appendChild(element);
    return () => {
      // once we dismount the Modal component we dismount the element from the modal root
      modal.removeChild(element);
    };
  }, [element, modal]);
  // we create the portal using the createPortal mehod from ReactDOM, first paramenter is what we want to render, the children of Modal component, and the second parameter is the container where we render it
  return ReactDOM.createPortal(children, element);
};

Modal.propTypes = {
  children: PropTypes.node
};

Modal.defaultProps = {
  children: null
};

export default Modal;
