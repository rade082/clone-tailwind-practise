import React from "react";
import "../ring/Ring.css";

const Ring = ({ src }) => {
    return (
        <div className="ring-wrapper">
            <img src={src} alt="" />
        </div>
    );
};

export default Ring;
