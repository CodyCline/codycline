import ReactDOM from "react-dom"
import type { Component } from "react"


//Must use dynamic import with this component!
const Portal = ({children}:any) => {
    const portalRoot = document.getElementById("__portal") as any;
    return ReactDOM.createPortal(
        children,
        portalRoot
    );
}

export default Portal;