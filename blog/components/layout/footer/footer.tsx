import * as React from 'react';
import { Social, SocialBar } from '../../social/social';

export const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer className="footer">
            <li className="footer__item">
                {currentYear.toString()}
            </li>
            <li className="footer__item">
                <SocialBar>
                    <Social icon="github" link="https://github.com/codycline"/>
                    <Social icon="stack-overflow" link="https://stackoverflow.com/users/10183827/cody-cline"/>
                </SocialBar>
            </li>
        </footer>
    )
}