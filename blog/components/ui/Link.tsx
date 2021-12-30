import NextLink from "next/link";
import styled from "styled-components";
import { ILinkProps } from "../../types/components";

const StyledLink = styled.a`
    color: var(--color-link);
`

const StyledNextLink = styled(NextLink)`
    color: var(--color-link);
`;

export const Link = ({href, children} : ILinkProps) => {
	
    const currentHost = process.env.NODE_ENV === `development` ? `localhost:8000`: `codycline.com`;
	if (href.includes(currentHost) || href[0] === `/`) {
		return <StyledNextLink href={href}>{children}</StyledNextLink>
	}
	return (
		<StyledLink className="link" href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</StyledLink>
	)
}