import * as React from "react";
import { graphql } from "gatsby";
import SEO from "../utils/seo";
import { Layout } from "../components/layout/layout";
import { withAddons } from "../utils/with-addons";
import ParticleImage, {
	ParticleOptions,
	Vector,
	forces,
	ParticleForce
} from "react-particle-image";
import "../styles/index.scss";
import sample from "../assets/sample-05.png";



const Index = ({ data }: any) => {
	const round = (n: number, step, hue = 1) => Math.ceil((n / step) * hue) * step;
	const STEP = 250;
	const particleOptions: ParticleOptions = {
		filter: ({ x, y, image }) => {
			// Get pixel
			const pixel = image.get(x, y);
			// Make a particle for this pixel if blue > 52 (range 0-255)
			return pixel.b > 68
		},
		color: ({ x, y, image }) => {
			const pixel = image.get(x, y);
			//Remove most color and grayscale everything
			return `rgba(
				${round(pixel.r, STEP)}, 
				${round(pixel.g, STEP)}, 
				${round(pixel.b, STEP)}, 
				1
			)`;
			// return `rgba(255, 255, 255, 1)`;
		},
		radius: ({ x, y, image }) => {
			const pixel = image.get(x, y);
			const magnitude = (pixel.r + pixel.g + pixel.b) * 3;
			// Lighter colors will have smaller radius
			return .15 + (magnitude / 255) / 3.75;
		},
		mass: () => 100,
		friction: () => 0.60,
	};

	const motionForce = (x: number, y: number): ParticleForce => {
		return forces.disturbance(x, y, 9);
	};
	return (
		<Layout>
			<SEO
				title="Welcome"
				description="Home page"
				siteMeta={data.site.siteMetadata}
				lang="en"
			/>
			<div style={{ height: "20vh" }} />
			<div className="landing__header">
				<h1 className="landing__header-color">Hello, I'm Cody Cline</h1>
			</div>
			<div className="about__section">
				<p className="landing__header-color">
					Software Developer based in Seattle, WA. My few areas of specialization are DevOps, Security, and Some front-end architecture. Currently, on a mission to craft high quality open-source software.
				</p>
			</div>
			<div className="about__section">
				<button>See Projects</button>
				<button>See Blog</button>
			</div>
			
			<ParticleImage
				src={sample}
				width={Number(window.innerWidth)}
				height={Number(window.innerHeight)}
				scale={4}
				entropy={20}
				maxParticles={8000}
				particleOptions={particleOptions}
				mouseMoveForce={motionForce}
				touchMoveForce={motionForce}
				backgroundColor="inherit"
				className="landing__background"
			/>
			<div style={{ height: "80vh", zIndex: -999 }} />
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


