import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <div style={{ width: "100%", height: "100px", display: "flex", justifyContent: "center", paddingTop: "20px" }}>
            <TailSpin height="100" width="100" color="lightblue" ariaLabel="loading" />
        </div>
    );
};

export default Loader;
