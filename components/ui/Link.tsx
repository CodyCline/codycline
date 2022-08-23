import NextLink, { LinkProps } from "next/link";
import { LegacyRef, forwardRef } from "react";
import styled from "styled-components";
import { ILinkProps } from "../../types/components";
import { hostToIconName } from "../../utils/hostname-icon";
import { Icon } from "./Icon";

export const RefLink: any = forwardRef(({ href, ...props }: LinkProps, ref?: LegacyRef<HTMLAnchorElement>) => (
	<NextLink passHref={true} href={href}>
		<a ref={ref} {...props} />
	</NextLink>
));

RefLink.displayName = "RefLink";

const LinkIcon = styled.span`
	align-items: center;
	justify-content: center;
    margin-right: 0.3em;

	`

const LinkText = styled.span`
	border-bottom: 1px solid var(--color-link);
	
`
const LinkWrapper = styled.a`
	padding: 0 0.2em;
	border-radius: 0.2em;
	&:hover {
		background: var(--color-fg-primary);
	}

`


const StyledNextLink = styled(RefLink)`
    color: var(--color-link);
`;

export const Link = ({ href, children }: ILinkProps) => {
	const currentHost = process.env.NODE_ENV === `development` ? `localhost:3000` : `codycline.com`;
	if (!(href.includes(currentHost) || href[0] === `/` || href[0] === "#")) {
		const url = new URL(href);
		return (
			<LinkWrapper title={`Visit: ${href}`} aria-label={`Visit: ${href}`} href={href} target="_blank" rel="noopener noreferrer">
				<LinkIcon role="img" aria-label="Link logo">
					<Icon title={`Visit: ${href}`} name={hostToIconName(url)} height={20} width={20} />
				</LinkIcon>
				<LinkText>{children}</LinkText>
			</LinkWrapper>
		)
	}
	return (
		<StyledNextLink href={href}>
			{children}
		</StyledNextLink>
	)

}




