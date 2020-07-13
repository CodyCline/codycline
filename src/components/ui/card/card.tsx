import * as React from 'react';
import {GlobeIcon, MarkGithubIcon} from '@primer/octicons-react'
import './card.css';

export const Card = () => {
    return (
        <div className="card">
            <img className="card-image" alt="card-img" src="https://via.placeholder.com/300/000000/FFFFFF/?text=Placeholder"/>
            <hr className="card-divider"/>
            <ul className="card-meta">
                <li><h3 style={{margin: 0}}>Hello</h3></li>
                <li>Cards are used to apply a container around a related groupin...
                </li>
            </ul>
            <ul className="card-icon-bar">
                {/* Icons */}
                <li><GlobeIcon/> <MarkGithubIcon/></li>
                <li><MarkGithubIcon/></li>
            </ul>
        </div>
    )
}