import * as React from 'react';
import { SocialBar, SocialIcon } from '../../components/socialbar/socialbar';
import '../pages.scss';


export const Home = () => {
    return (
        <div className="gridlines">
            <div style={{ height: "20vh" }} />
            <div className="center-card">
                <h1 className="big-header">Hello, I'm Cody Cline.</h1>
                <p>Software Developer based in greater Seattle, WA. Welcome to my blog and portfolio. </p>
                <SocialBar>
                    <SocialIcon link="https://github.com" icon={["fab", "github"]}></SocialIcon>
                    <SocialIcon link="https://stackoverflow.com" icon={["fab", "stack-overflow"]}></SocialIcon>
                    <SocialIcon link="https://linkedin.com" icon={["fab", "linkedin"]}></SocialIcon>
                    <SocialIcon link="https://codepen.com" icon={["fab", "codepen"]}></SocialIcon>
                    <SocialIcon link="https://example.com" icon={["far", "envelope"]}></SocialIcon>
                </SocialBar>
            </div>
            <div style={{ height: "60vh" }} />
        </div>
    );
}