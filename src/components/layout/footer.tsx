import * as React from 'react';
import WaFlag from '../../assets/images/wa.png';
import UsFlag from '../../assets/images/us.png';

export const Footer = () => {
    const date: Date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer className="footer">
            <li className="footer-item">
                {currentYear}
            </li>
            <li className="footer-item">
                <img className="footer-icon" alt="waflag.png" src={WaFlag}/>
                <img className="footer-icon" alt="usflag.png" src={UsFlag}/>
            </li>
        </footer>
    )
}