import React from "react";
import { getType } from "@/utils/function.js";
import "./buttonGroup.scss";
function ButtonGroup({ children }) {
    return (
        <div className="button-group">
            <div>test</div>
            {children}
        </div>
    );
}

// button
export default ButtonGroup;
