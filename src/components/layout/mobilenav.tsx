import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NavItem } from './layout';

export const MobileMenu = () => {
    const [visible, setVisible] = React.useState(false);

    function toggle() {
        setVisible(!visible);
    }
    return (
        <React.Fragment>
            <li className="navitem" >
                <span className="mobile-nav-toggle" onClick={toggle}>
                    {/* <FontAwesomeIcon icon={["fas", "bars"]} /> */}
                </span>
            </li>
            {visible &&
                ReactDOM.createPortal(
                    <div onClick={toggle} className="mobile-bg">
                        <ul className="mobile-nav">
                            <NavItem link="/" className="mobile-nav-item">
                                {/* <FontAwesomeIcon className="mobile-nav-icon" icon={["fas", "home"]}/> */}
                                <h4>Home</h4>
                            </NavItem>
                            <NavItem link="/blog" className="mobile-nav-item">
                                {/* <FontAwesomeIcon className="mobile-nav-icon" icon={["far", "newspaper"]}/> */}
                                <h4>Blog</h4>
                            </NavItem>
                            <NavItem link="/projects" className="mobile-nav-item">
                                {/* <FontAwesomeIcon className="mobile-nav-icon" icon={["fas", "cube"]}/> */}
                                <h4>Projects</h4>
                            </NavItem>
                            <NavItem link="/contact" className="mobile-nav-item">
                                {/* <FontAwesomeIcon className="mobile-nav-icon" icon={["far", "envelope"]}/> */}
                                <h4>Contact </h4>
                            </NavItem>
                        </ul>
                    </div>,
                    document.body  
                )
            }
        </React.Fragment>
    )
}