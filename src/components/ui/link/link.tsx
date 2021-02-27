import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import './link.scss';



interface Link {
	externalOnly?: boolean,
	href: string,
	children: React.ReactNode,
}

export const Link = ({href, children, externalOnly = false} : Link) => {
	const currentHost = process.env.NODE_ENV === `development` ? `localhost:8000`: `codycline.com`;
	if (href.includes(currentHost) || href[0] === `/`) {
		return <GatsbyLink to={href}>{children}</GatsbyLink>
	}
	return (
		<a href={href} target={`_blank`} rel={`noopener noreferrer`}>
			{children}
		</a>
	)
}