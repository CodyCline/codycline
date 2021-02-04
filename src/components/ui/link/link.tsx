import * as React from 'react';
import './link.scss';

export const Link = ({children, href} : any) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href} className="link">{children}</a>
    )
}

export const ExternalLink = ({href, children} : any) => {
	if (href.includes(process.env.NODE_ENV === `development` ? `localhost:8000`: `codycline.com`) || href[0] === `/`) {
		return <a href={href}>{children}</a>
	}
	return (
		<a href={href} target={`_blank`} rel={`noopener noreferrer`}>
			{children}
		</a>
	)
}