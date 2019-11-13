import React from "react";
import PropTypes from "prop-types";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = props => (
  <CustomButtonContainer {...props}>
    <span>{props.text}</span>
  </CustomButtonContainer>
);

// https://reactjs.org/docs/typechecking-with-proptypes.html
CustomButton.propTypes = {
  large: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

CustomButton.defaultProps = {
  large: false,
  text: "this is a button",
  onClick: () => console.log("Hello World!")
};

export default CustomButton;
