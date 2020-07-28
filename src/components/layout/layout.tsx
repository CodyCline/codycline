import * as React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { MobileMenu } from './mobilenav'
import { Footer } from './footer';
import { ThemeSwitch } from '../ui/switch/switch';
import './layout.scss';


export const Layout = ({ children }: any) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>

    );
}

export const NavBar = () => {
    const [isMobile, setMobileView] = React.useState<boolean>(false);
    const handleResize = React.useCallback((mediaQuery: any) => {
        mediaQuery.matches ? setMobileView(true) : setMobileView(false);
    }, [setMobileView]);

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
    }, [handleResize]);
    return (
        <nav className="navbar">
            <NavItem link="/" className="homeIcon">
                <h1>CC</h1>
            </NavItem>
            {!isMobile &&
                <React.Fragment>
                    <NavItem link="/blog"> Blog </NavItem>
                    <NavItem link="/projects">Projects</NavItem>
                </React.Fragment>
            }
            <NavItem notActive>
                <ThemeSwitch />
            </NavItem>
            {isMobile && <MobileMenu />}
        </nav>
    )
}


export const NavItem = ({ children, link, notActive, className }: any) => {
    return (
        <NavLink className={cx("navitem", className)} activeClassName="navitem-active" to={notActive ? "#" : link}>
            {children}
        </NavLink>

    );
};