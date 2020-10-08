import React from "react";

import { Layout } from "../components/layout/layout";
import SEO from "../utils/seo";
import { withAddons } from '../utils/withAddons';
import { SocialBar, SocialIcon } from "../components/socialbar/socialbar";
import '../styles/index.scss';

const Index = ({}: any) => {
	return (
		<Layout title="Cody Cline">
			<SEO title="Welcome"/>
			<div className="grid__lines">
				<div style={{ height: "20vh" }} />
				<div className="center__card">
					<h1 className="big__header">Hello, I'm Cody Cline.</h1>
					<p>
						Software Developer based in greater Seattle, WA. 
						Welcome to my blog and portfolio. Open to full-time and freelance opportunities.
					</p>
					<SocialBar>
						<SocialIcon link={process.env.GATSBY_GITHUB_PROFILE} icon={["fab", "github"]}></SocialIcon>
						<SocialIcon link={process.env.GATSBY_STACK_OVERFLOW_PROFILE} icon={["fab", "stack-overflow"]}></SocialIcon>
						<SocialIcon link={process.env.GATSBY_LINKEDIN_PROFILE} icon={["fab", "linkedin"]}></SocialIcon>
						<SocialIcon link={process.env.GATSBY_CONTACT_LINK} icon={["far", "envelope"]}></SocialIcon>
					</SocialBar>
				</div>
				<div style={{ height: "60vh" }} />
			</div>
		</Layout>
	)
}
export default withAddons(Index);