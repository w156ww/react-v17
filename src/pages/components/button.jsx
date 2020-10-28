import React from "react";
import { getType } from "@/utils/function.js";
import "./button.less";
function Button({ children }) {
    return <button className="button-item">{children}</button>;
}

export default Button;
