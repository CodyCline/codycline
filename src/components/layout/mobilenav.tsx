import * as React from 'react';
import { NavItem } from './layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MobileMenu = ({ onClick }: any) => {
    const [visible, setVisible] = React.useState(false);
    const ref = React.useRef<any>(null);

    function toggle() {
        setVisible(!visible);
    }
    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false);
        }
    };

    React.useEffect(() => {
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
                    <NavItem link="/projects" className="mobile-nav-item">Projects</NavItem>

                    <a style={{margin: 0, padding: "1em"}} target="_blank" rel="noopener noreferrer" href="https://airtable.com/shrbrGZaBd2SPr9Sj" className="card-icon">
                        Contact
                    </a>
                </ul>
                : null
            }
        </React.Fragment>
    )
}