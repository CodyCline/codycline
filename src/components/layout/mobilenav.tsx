import * as React from 'react';
import { NavItem } from './layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeSwitch } from '../ui/switch/switch';



export const MobileMenu = ({ onClick, onThemeChange }: any) => {
    const [visible, setVisible] = React.useState(false);
    const [isDark, setDarkMode] = React.useState<boolean>(true);
    const ref = React.useRef<any>(null);
    
    function toggle() {
        setVisible(!visible);
    }
    const handleClickOutside = (event:any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false);
        }
    };

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
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    })

    return (
        <React.Fragment>
            <li ref={ref} className="navitem" >
                <span className="mobile-nav-toggle" onClick={toggle}>
                    <FontAwesomeIcon icon={["far", "compass"]} />
                </span>
            </li>
            {visible ?
                <ul onClick={onClick} className="mobile-nav">
                    <NavItem link="/blog" className="mobile-nav-item">Blog</NavItem>
                    <NavItem link="/contact" className="mobile-nav-item"> Contact </NavItem>
                    <NavItem link="/projects" className="mobile-nav-item">Projects</NavItem>
                    {/* <NavItem notActive className="mobile-nav-item"> */}
                        <ThemeSwitch onChange={changeTheme} />
                    {/* </NavItem> */}
                </ul>
                : null
            }
        </React.Fragment>
    )
}