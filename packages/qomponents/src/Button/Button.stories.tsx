import React from "react";
import Button from "./Button";

export default {
    title: "Button"
};

export const WithBar = () => <Button label="bar" onClick={()=>{}}/>;

export const WithBaz = () => <Button label="baz" onClick={()=>{}}/>;
