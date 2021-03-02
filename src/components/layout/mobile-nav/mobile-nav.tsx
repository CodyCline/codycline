import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NavItem } from '../layout';
import { ThemeToggle } from '../../toggle/theme-toggle/theme-toggle';
import "./mobile-nav.scss";
import logo from "../../../assets/logo.jpg";
import { Icon } from '../../ui/icon/icon';

export const MobileMenu = () => {
    const [visible, setVisible] = React.useState<boolean>(false);
    const menuRef = React.useRef<HTMLDivElement>(null);

    function toggle () {
        setVisible(!visible);
    }

    function onBackDropClick (event: any) {
        if (!event.target.contains(menuRef.current)) {
            return;
        } else {
            setVisible(!visible);
        }
    }

    return (
        <React.Fragment>
            <li className="nav__item controls" >
                <button className="mobile__nav-toggle" onClick={toggle}>
                    <Icon height={32} width={32} name="three-bars"/>
                </button>
            </li>
            {visible &&
                ReactDOM.createPortal(
                    <div onClick={onBackDropClick} className="mobile__backdrop">
                        <div className="mobile__nav" ref={menuRef}>
                            <nav className="navbar">
                                <NavItem link={`/`}  className="home__icon">
                                    <img style={{ height: `50px`, width: `70px` }} src={logo} alt={`logo.png`} />
                                </NavItem>
                            </nav>
                            <nav className="mobile__nav-menu">
                                <NavItem link="/" className="mobile__nav-item">
                                    <h4>Home</h4>
                                </NavItem>
                                <NavItem link="/blog" className="mobile__nav-item">
                                    <h4>Blog</h4>
                                </NavItem>
                                <NavItem link="/snippets" className="mobile__nav-item">
                                    <h4>Snippets</h4>
                                </NavItem>
                                <NavItem link="/projects" className="mobile__nav-item">
                                    <h4>Projects</h4>
                                </NavItem>
                            </nav>
                            <nav className="mobile__nav-controls">
                                <ThemeToggle/>
                            </nav>
                        </div>
                    </div>,
                    document.body  
                )
            }
        </React.Fragment>
    )
}