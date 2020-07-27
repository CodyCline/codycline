import * as React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import { ThemeToggle } from '../../ui/toggle/toggle';
import './layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useComponentVisible } from '../../../utils/useComponentVisible';

export const Layout = ({ children }: any) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>

    );
}


export const Footer = () => {
    return (
        <footer className="footer">
            Home Page
        </footer>
    )
}

export const NavBar = () => {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(false);
    const [isMobile, setMobileView] = React.useState<boolean>(false);
    const handleResize = (mediaQuery: any) => {
        if (mediaQuery.matches) {
            setMobileView(true);
        } else {
            setMobileView(false);
            setIsComponentVisible(false);
        }
    }

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        //For initial state
        if (mediaQuery.matches) {
            setMobileView(true);
        }
        mediaQuery.addListener(handleResize);
        return () => {
            mediaQuery.removeListener(handleResize);
        }
    });
    return (
        <nav className="navbar">
            <NavItem link="/" className="homeIcon"><h1>Cody Cline</h1></NavItem>
            {isMobile ?
                <li ref={ref} className="navitem">
                    <span style={{ cursor: "pointer", fontSize: "1.5rem" }} onClick={() => setIsComponentVisible(!isComponentVisible)} className="toggleicon"><FontAwesomeIcon icon={["far", "compass"]} /></span>
                    {isComponentVisible && <MobileMenu />}
                </li>
                :
                <React.Fragment>
                    <NavItem link="/blog"> Blog </NavItem>
                    <NavItem link="/projects">Projects</NavItem>
                    <NavItem notActive>
                        <ThemeToggle />
                    </NavItem>
                </React.Fragment>
            }
        </nav>
    )
}

const MobileMenu = ({ onClick }: any) => {
    return (
        <ul onClick={onClick} className="mobile-nav">
            <NavItem link="/blog" className="mobile-nav-item">Blog</NavItem>
            <NavItem link="/contact" className="mobile-nav-item"> Contact </NavItem>
            <NavItem link="/projects" className="mobile-nav-item">Projects</NavItem>
            <NavItem notActive className="mobile-nav-item">
                <ThemeToggle />
            </NavItem>
        </ul>
    )
}


const NavItem = ({ children, link, notActive, className }: any) => {
    return (
        <NavLink className={cx("navitem", className)} activeClassName="navitem-active" to={notActive ? "#" : link}>
            {children}
        </NavLink>

    );
};