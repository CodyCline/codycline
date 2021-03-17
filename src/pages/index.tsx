import React from "react";
import { graphql } from "gatsby";
import SEO from "../utils/seo";
import { Layout } from "../components/layout/layout";
import { withAddons } from '../utils/with-addons';
import { SocialBar, SocialIcon } from "../components/socialbar/socialbar";
import "../styles/index.scss";

const Index = ({data}: any) => {
	return (
		<Layout>
			<SEO 
				title="Welcome"
				description="Home page"
				siteMeta={data.site.siteMetadata}
				lang="en"
			/>
			<div className="grid__lines">
				<div style={{ height: "20vh" }} />
				<img style={{width: `100%`, height: `200vh`}} src="https://i.pinimg.com/originals/8c/2f/8a/8c2f8ae468ea4db821b96eed027d82ae.gif"/>
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

export const pageQuery = graphql`
query HomePage {
	site {
		siteMetadata {
			title
			description
			social {
				github
			}
		}
	}
}

`