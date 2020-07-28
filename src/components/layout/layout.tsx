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
    const [isDark, setDarkMode] = React.useState<boolean>(true);
    const handleResize = React.useCallback((mediaQuery: any) => {
        mediaQuery.matches ? setMobileView(true) : setMobileView(false);
    }, [setMobileView]);

    function changeTheme () {
        console.log("clicked");
        if(isDark) {
            document.documentElement.className = "theme--light";
            setDarkMode(false);
        } else {
            document.documentElement.className = "theme--dark";
            setDarkMode(true);
        }
    }

    React.useEffect(() => {
        document.documentElement.className = "theme--dark";
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
            <NavItem link="/" className="homeIcon"><h1>Cody Cline</h1></NavItem>
            {isMobile ?
                <MobileMenu/>
                :
                <React.Fragment>
                    <NavItem link="/blog"> Blog </NavItem>
                    <NavItem link="/projects">Projects</NavItem>
                    <NavItem notActive>
                        <ThemeSwitch onChange={changeTheme}/>
                    </NavItem>
                </React.Fragment>
            }
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