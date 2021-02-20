import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby'
import { MobileMenu } from './mobile-nav/mobile-nav'
import { Footer } from './footer/footer';
import { Offline } from '../ui/offline/offline';
import { ThemeToggle } from '../ui/toggle/theme-toggle/theme-toggle';
import './layout.scss';
import logo from '../../assets/logo.jpg';


export const Layout = ({ children }: any) => {
    return (
        <React.Fragment>
            <NavBar />
            {children}
            <Footer />
            <Offline />
        </React.Fragment>

    );
}

export const NavBar = () => {
    const [isMobile, setMobileView] = React.useState<boolean>(false);
    const handleResize = React.useCallback((mediaQuery: any) => {
        mediaQuery.matches ? setMobileView(true) : setMobileView(false);
    }, [setMobileView]);

    React.useEffect(() => {
        if (typeof window !== `undefined`) {
            const mediaQuery = window.matchMedia(`(max-width: 700px)`);
            //For initial state
            if (mediaQuery.matches) {
                setMobileView(true);
            }
            mediaQuery.addEventListener(`change`, handleResize)
            return () => {
                mediaQuery.removeEventListener(`change`, handleResize);
            }
        }
    }, [handleResize]);
    return (
        <nav className={`navbar`}>
            <NavItem link={`/`} className={`home__icon`}>
                <img style={{ height: `50px`, width: `70px` }} src={logo} alt={`logo.png`} />
            </NavItem>
            {isMobile ? 
                <MobileMenu/>
                :
                <React.Fragment>
                    <NavItem link={`/blog`}> Blog </NavItem>
                    <NavItem link={`/snippets`}>Snippets</NavItem>
                    <NavItem link={`/projects`}>Projects</NavItem>
                    <NavItem link={`#`} className="controls">
                        <ThemeToggle />
                    </NavItem>
                </React.Fragment>
            }
        </nav>
    )
}


export const NavItem = ({ children, link, notActive, className, style }: any) => {
    return (
        <Link style={style} className={cx(`nav__item`, className)} activeClassName={`nav__item__active`} to={notActive ? `#` : link}>
            {children}
        </Link>
    );
};