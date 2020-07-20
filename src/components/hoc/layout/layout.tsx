import * as React from 'react';
import { useHistory, NavLink, useLocation } from 'react-router-dom';
import cx from 'classnames';
import { ThemeToggle } from '../../ui/toggle/toggle';
import './layout.scss';

export const Layout = ({ children }: any) => {
    const [theme, setTheme] = React.useState<string>("dark");
    return (
        <div className={cx("theme--" + theme)}>
            <div className="base">
                <NavBar />
                {children}
            </div>
        </div>
    );
}


export const Footer = () => {
    return (
        <div>
            Home Page
        </div>
    )
}

export const NavBar = () => {
    const [isMobile, setMobileView] = React.useState<boolean>(false);
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const handleResize = (mediaQuery: any) => {
        if (mediaQuery.matches) {
            setMobileView(true);
        } else {
            setMobileView(false);
            setOpen(false);
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
    }, []);
    function toggleMenu() {
        setOpen(!isOpen)
    }
    return (
        <nav className="navbar">
            <NavItem link="/" className="homeIcon">Cody Cline</NavItem>
            {isMobile ?
                <NavItem notActive>
                    <button onClick={toggleMenu}>...</button>
                    {isOpen ?
                        <MobileMenu />
                        : null
                    }
                </NavItem>
                :
                <React.Fragment>
                    <NavItem link="/blog">
                        Blog
                    </NavItem>
                    <NavItem link="/projects">Projects</NavItem>
                    <NavItem link="/contact">Contact</NavItem>
                    <NavItem notActive>
                        <ThemeToggle />
                    </NavItem>
                </React.Fragment>
            }
        </nav>
    )
}

const MobileMenu = () => {
    return (
        <ul className="mobile-nav">
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
        <li className={cx("navitem",  className)}>
            <NavLink activeClassName="navitem-active" to={notActive? "#" : link}>
                <h3 style={{fontSize: "20px"}}>{children}</h3>
            </NavLink>
            
        </li>
    );
};