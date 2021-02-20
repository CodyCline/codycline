import * as React from 'react';

export const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer className="footer">
            <li className="footer__item">
                {currentYear.toString()}
            </li>
            <li className="footer__item">
            </li>
        </footer>
    )
}