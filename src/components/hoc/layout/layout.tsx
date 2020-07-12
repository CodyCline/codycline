import * as React from 'react';
import cx from 'classnames';
import { ThemeToggle } from '../../ui/toggle/toggle';
import './layout.scss';

export const Layout = ({ children }: any) => {
    const [theme, setTheme] = React.useState<string>("dark");
    return (
        <div className={cx("theme--" + theme)}>
            <div className="base">
                <Navbar />
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

export const Navbar = () => {
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
            <Navitem className="homeIcon"><h2>Cody Cline</h2></Navitem>
            {isMobile ?
                <Navitem>
                    <button onClick={toggleMenu}>...</button>
                    {isOpen ?
                        <MobileNav />
                        : null
                    }
                </Navitem>
                :
                <React.Fragment>
                    <Navitem>Blog</Navitem>
                    <Navitem>Projects</Navitem>
                    <Navitem>Contact</Navitem>
                    <Navitem>
                        <ThemeToggle />
                    </Navitem>
                </React.Fragment>
            }
        </nav>
    )
}

const MobileNav = () => {
    return (
        <ul className="mobile-nav">
            <Navitem className="mobile-nav-item">Blog</Navitem>
            <Navitem className="mobile-nav-item">Contact</Navitem>
            <Navitem className="mobile-nav-item">Projects</Navitem>
            <Navitem className="mobile-nav-item">
                <ThemeToggle />
            </Navitem>
        </ul>
    )
}


const Navitem = ({ children, className }: any) => (
    <li className={cx("navitem", className)}>{children}</li>
)