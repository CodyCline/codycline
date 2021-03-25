import * as React from "react";
import * as ReactDOM from "react-dom";
import { graphql } from "gatsby";
import SEO from "../utils/seo";
import { Layout } from "../components/layout/layout";
import { withAddons } from '../utils/with-addons';
import { SocialBar, SocialIcon } from "../components/socialbar/socialbar";
import { Canvas, useFrame } from "react-three-fiber"
import * as THREE from "three";
import "../styles/index.scss";


const Triforce = () => (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 115.525 97.977" enableBackground="new 0 0 115.525 97.977" xmlSpace="preserve">
		<g id="Layer_1">
			<g>
				<polygon fill="none" stroke="#836672" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="    57.763,1.048 0.914,96.929 114.611,96.929   " />
				<polygon fill="none" stroke="lime" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="    57.763,96.929 29.762,49.703 85.763,49.703   " />
				<polygon fill="none" stroke="lime" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="    57.763,96.929 29.762,49.703 85.763,49.703   " />
			</g>
		</g>
	</svg>
)


function AnimationBox(props) {
	// This reference will give us direct access to the mesh


	return (



		<svg className="hexagon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 750 750">
			<defs>
				<g id="hex" transform="rotate(30 375 375)">
					<polygon points="229.3,627.5 83.6,375.5 229.3,123.5 520.7,123.5 666.4,375.5 520.7,627.5" />
					<line className="path" x1="229.3" y1="123.5" x2="520.7" y2="627.5" />
					<line x1="666" y1="375.5" x2="84" y2="375.5" />
					<line x1="520.7" y1="123.5" x2="229.3" y2="627.5" />
				</g>
			</defs>
			<use xlinkHref="#hex" />
			<use xlinkHref="#hex" transform="translate(187.5, 187.5) scale(.5)" />
			<use xlinkHref="#hex" transform="translate(61.25, 260.5) scale(.5)" />
			<use xlinkHref="#hex" transform="translate(313.25, 260.5) scale(.5)" />
			<use xlinkHref="#hex" transform="translate(313.25, 115.25) scale(.5)" />
			<use xlinkHref="#hex" transform="translate(61.25, 115.25) scale(.5)" />

		</svg>
	)
}



const Index = ({ data }: any) => {
	return (
		<Layout>
			<SEO
				title="Welcome"
				description="Home page"
				siteMeta={data.site.siteMetadata}
				lang="en"
			/>
			<div className="grid__lines">
				<AnimationBox/>
				<div style={{ height: "20vh" }} />
				{/* <div className="center__card">
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
				</div> */}
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


