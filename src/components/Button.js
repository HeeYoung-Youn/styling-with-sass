import React from "react";
import classNames from "classnames";
import "./Button.scss";

// size: large, medium, small
const Button = ({ children, size }) => {
  return <button className={classNames("Button", size)}>{children}</button>;
};

Button.defaultProps = {
  size: "medium",
};

export default Button;
