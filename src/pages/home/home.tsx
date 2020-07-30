import * as React from 'react';
import { SocialBar, SocialIcon } from '../../components/socialbar/socialbar';
import '../pages.scss';


export const Home = () => {
    return (
        <div className="gridlines">
            <div style={{ height: "20vh" }} />
            <div className="center-card">
                <h1 className="big-header">Hello, I'm Cody Cline.</h1>
                <p>Software Developer based in greater Seattle, WA. Welcome to my blog and portfolio. Open to full-time and freelance oppurtunities</p>
                <SocialBar>
                    <SocialIcon link="https://github.com/CodyCline" icon={["fab", "github"]}></SocialIcon>
                    <SocialIcon link="https://stackoverflow.com/users/10183827/cody-cline" icon={["fab", "stack-overflow"]}></SocialIcon>
                    <SocialIcon link="https://www.linkedin.com/in/cody-cline/" icon={["fab", "linkedin"]}></SocialIcon>
                    <SocialIcon link="https://codepen.io/codycline" icon={["fab", "codepen"]}></SocialIcon>
                    <SocialIcon link="https://airtable.com/shrbrGZaBd2SPr9Sj" icon={["far", "envelope"]}></SocialIcon>
                </SocialBar>
            </div>
            <div style={{ height: "60vh" }} />
        </div>
    );
}