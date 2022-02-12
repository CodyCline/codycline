import NextLink, { LinkProps } from "next/link";
import React from "react";
import styled from "styled-components";
import { ILinkProps } from "../../types/components";
import { hostToIconName } from "../../utils/hostname-icon";
import { truncate } from "../styles/Truncate";
import { Icon } from "./Icon";

export const _Link: any = React.forwardRef(({ href, ...props }: LinkProps, ref?: any) => (
	<NextLink passHref={true} href={href}>
		<a ref={ref} {...props} />
	</NextLink>
));


const LinkIcon = styled.span`
	align-items: center;
	justify-content: center;
    margin: 0 0.3em;

	`

const LinkText = styled.span`
	border-bottom: 1px dashed var(--color-link);
	&:hover {
		color: var(--color-link);
	}
`

const StyledNextLink = styled(_Link)`
    color: var(--color-link);
`;

export const Link = ({ href, children }: ILinkProps) => {
	const currentHost = process.env.NODE_ENV === `development` ? `localhost:3000` : `codycline.com`;
	if (!(href.includes(currentHost) || href[0] === `/` || href[0] === "#")) {
		const url = new URL(href);
		return (
			<a title={`Visit: ${href}`} aria-label={`Visit: ${href}`} href={href} target="_blank" rel="noopener noreferrer">
				<LinkIcon role="img" aria-label="Link logo">
					<Icon title={`Visit: ${href}`} name={hostToIconName(url)} height={20} width={20} />
				</LinkIcon>
				<LinkText>{children}</LinkText>

			</a>
		)
	}
	return (
		<StyledNextLink href={href}>
			{children}
		</StyledNextLink>
	)

}



const BookmarkContainer = styled.div`
	display: flex; 
	flex-direction: column;
	margin: 36px 0;
	justify-content: center;
	border: 1px solid var(--color-border);
	border-radius: 5px;
	background: var(--color-fg-aux);
	padding: 1em;
	transition: .25s ease-in-out;
	&:hover {
		border: 1px solid var(--color-link);
		background: var(--color-link-hover);
	}
`

const BookmarkIcon = styled.span`
	margin-right: .33rem;
`

const BookmarkText = styled.span`
	${truncate(1, "vertical")}
`

export const Bookmark = ({ href }: any) => {
	const url = isValidUrl(href) ? new URL(href) : null;
	if (url) {
		return (
			<a title={`Visit: ${href}`} aria-label={`Visit: ${href}`} href={href} target="_blank" rel="noopener noreferrer">
				<BookmarkContainer title={`Visit: ${href}`}>
					<h3>
						<BookmarkIcon>
							<Icon title={`Visit: ${href}`} name={hostToIconName(url)} height={18} width={18} />
						</BookmarkIcon>
						{url.hostname}
					</h3>
					<BookmarkText>{href}</BookmarkText>
				</BookmarkContainer>
			</a>
		)
	}
	return (
		<BookmarkContainer>
			<h3>Error Cannot Preview Link: Invalid URL</h3>
		</BookmarkContainer>
	)
}


export const isValidUrl = (url: string) => {
	try {
		new URL(url);
	} catch (e) {
		return false;
	}
	return true;
};