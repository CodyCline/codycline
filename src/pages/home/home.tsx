import * as React from 'react';
import { SocialBar, SocialIcon } from '../../components/socialbar/socialbar';

export const Home = () => {
    return (
        <div style={{
            display: "grid",
            placeItems: "center",
            backgroundImage: "linear-gradient(#2c2c30 0.75px,transparent 0), linear-gradient(90deg,#2c2c30 0.75px,transparent 0), linear-gradient(transparent 0.75px,#171819 0,#171819 0.75px,transparent 0)",
            backgroundSize: "100px 100px",
        }}>
            <div style={{ height: "20vh" }} />
            <div style={{
                border: "5px solid",
                borderImageSlice: "1",
                borderImageSource: "linear-gradient(90deg, rgba(108,16,209,1) 35%, rgba(0,212,255,1) 100%)",
                padding: "3em",
                background: "#202122",
                width: "60%",
                textAlign: "center"
            }}>
                <h1 style={{ margin: 0, fontSize: "50px" }}>Hello, I'm Cody Cline.</h1>
                <p>Software Developer based in greater Seattle, WA. Welcome to my blog and portfolio. </p>
                <SocialBar>
                    <SocialIcon link="https://github.com" icon={["fab", "github"]}></SocialIcon>
                    <SocialIcon link="https://stackoverflow.com" icon={["fab", "stack-overflow"]}></SocialIcon>
                    <SocialIcon link="https://linkedin.com" icon={["fab", "linkedin"]}></SocialIcon>
                </SocialBar>
            </div>
            <div style={{ height: "60vh" }} />
        </div>
    );
}