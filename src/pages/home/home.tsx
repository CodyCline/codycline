import * as React from 'react';

export const Home = () => {
    return (
        <div style={{
            display: "grid",
            placeItems: "center",
            backgroundImage: "linear-gradient(#2c2c30 0.75px,transparent 0), linear-gradient(90deg,#2c2c30 0.75px,transparent 0), linear-gradient(transparent 0.75px,#171819 0,#171819 0.75px,transparent 0)",
            backgroundSize: "100px 100px"
        }}>
            <div style={{height: "200px"}}/>
                    <h1>Hello, I'm Cody Cline.</h1>
                    <p>Software Developer based in greater Seattle, WA.  I spend most of the time here blogging about random code stuff.</p>
            <div style={{height: "200px"}}/>
        </div>
    );
}