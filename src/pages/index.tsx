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
	const round = (n: number, step = 20) => Math.ceil(n / step) * step;
	const STEP = 128;
	const particleOptions: ParticleOptions = {
		filter: ({ x, y, image }) => {
			// Get pixel
			const pixel = image.get(x, y);
			// Make a particle for this pixel if blue > 50 (range 0-255)
			return pixel.b > 64 
		},
		color: ({ x, y, image }) => {
			const pixel = image.get(x, y);
			// Canvases are much more performant when painting as few colors as possible.
			// Use color of pixel as color for particle however round to nearest 30
			// to decrease the number of unique colors painted on the canvas.
			// You'll notice if we remove this rounding, the framerate will slow down a lot.
			const grayscale = (r, g, b) => (`${r * 0.299}, ${g * 0.587}, ${b * 0.114}`)
			return `rgba(
				${round(pixel.r, STEP)}, 
				${round(pixel.g, STEP)}, 
				${round(pixel.b, STEP)}, 
				${round(pixel.a, STEP) / 255}
			)`;
		  },
		radius: () => Math.random() * 1.5 + 0.5,
		mass: () => 80,
		friction: () => 0.15,
		initialPosition: ({ canvasDimensions }) => {
			return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
		}
	};

	const motionForce = (x: number, y: number): ParticleForce => {
		return forces.disturbance(x, y, 5);
	};
	return (
		<Layout>
			<SEO
				title="Welcome"
				description="Home page"
				siteMeta={data.site.siteMetadata}
				lang="en"
			/>
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
				backgroundColor={`inherit`}
				className="canvas__test"
			/>
			<div style={{position: `absolute`, top: `50%`, left: `50%`}}>
				
			</div>
			<div style={{ height: "60vh" }} />
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


