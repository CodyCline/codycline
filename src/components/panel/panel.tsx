import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './panel.scss';



export const Panel = ({ title, description, imageUrl, date, readTime, onClick }: any) => {
    return (
        <div className="panel" onClick={onClick}>
            <img src={imageUrl} className="panel-image" />
            <div className="panel-secondary">
                <div>
                    <h3 className="panel-text">{title}</h3>
                    <p className="panel-text">{description}</p>
                    <p><FontAwesomeIcon icon={["far", "clock"]} /> {date}</p>
                    <p>
                        <span style={{margin: "10px", background: "#CCC", padding: "3.33px", borderRadius: "10px"}}>Python</span>
                        <span style={{margin: "10px", background: "#CCC", padding: "3.33px", borderRadius: "10px"}}>Python</span>
                        <span style={{margin: "10px", background: "#CCC", padding: "3.33px", borderRadius: "10px"}}>Python</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

