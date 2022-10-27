import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FunctionComponent<ButtonProps> = ({ label, onClick }) => (
    <button data-testid="Button" className="foo-bar" onClick={onClick}>{label}</button>
);

export default Button;

