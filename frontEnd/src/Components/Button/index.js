import React from "react";
import { Button as Bot } from "./styles";

function Button({children, ...props}) {

    return <Bot {...props}>{children}</Bot>
}

export default Button