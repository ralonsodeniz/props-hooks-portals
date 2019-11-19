import React, { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const OnClickOutside = ({ children, action, enabled }) => {
  // we create the ref for the container we are going to use to check if the click is inside the component we are wrapping or outside
  // useRef is a react hook that allows us to access a mutable object (current) with the html properties of the element referred
  const wrapperRef = useRef(null);
  // now we create a method that will trigger the action we pass as props in case the click is outside the wrapperRef
  const handleClickOutside = useCallback(
    event => {
      // first we check if there is a reference object and if the target of the click is contained inside the reference object
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // then we check if there is an action passed through props to execute
        // if so we execute it
        if (action !== undefined) action();
      }
    },
    [action]
  );
  // now we create a useEffect that will create event listener for the clicks and clean them when the OnClickOutside is unmounted
  // since we are not adding a dependency array the code inside useEffect will trigger everytime OnClickOutside is rerendered (for example when its parents are rerendered) regardless if the props have changed
  // if we want to only trigger useEffect depending if a value changes we have to pass it in the dependency array
  // if we pass an empty array it will only trigger once when the component is mounted for the first time
  useEffect(() => {
    // first we check if the OnClickOutside functionality is enabled
    if (enabled) {
      // now we create the eventlisteners and we pass to it the callback function
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      // we define the cleanup function that will trigger when the component is dismounted so it closes the eventlisteners
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [enabled, handleClickOutside]);
  // finally we render the wrapper and the contained children
  return <div ref={wrapperRef}>{children}</div>;
};

OnClickOutside.propTypes = {
  children: PropTypes.node,
  action: PropTypes.func,
  enabled: PropTypes.bool
};

OnClickOutside.defaultProps = {
  children: null,
  action: () => {},
  enabled: false
};

export default OnClickOutside;
