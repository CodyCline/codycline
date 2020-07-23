import * as React from 'react';

export const Home = () => {
    return (
        <div style={{
            display: "grid",
            placeItems: "center",
            backgroundImage: "linear-gradient(#2c2c30 0.75px,transparent 0), linear-gradient(90deg,#2c2c30 0.75px,transparent 0), linear-gradient(transparent 0.75px,#171819 0,#171819 0.75px,transparent 0)",
            backgroundSize: "100px 100px",
        }}>
            <div style={{height: "150px"}}/>
            <div style={{
                border: "5px solid",
                borderImageSlice: "1",
                borderImageSource: "linear-gradient(90deg, rgba(108,16,209,1) 35%, rgba(0,212,255,1) 100%)",
                padding: "1em",
                background: "#202122",
                width: "60%",
                textAlign: "center"
            }}>
                <h1 style={{ margin: 0, fontSize: "50px" }}>Hello, I'm Cody Cline.</h1>
                <p>Software Developer based in greater Seattle, WA. </p>
            </div>
            <div style={{ height: "200px" }} />
        </div>
    );
}