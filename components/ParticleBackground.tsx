import * as React from "react";
import ParticleImage, {
    ParticleOptions,
    forces,
    ParticleForce
} from "react-particle-image";
import styled from "styled-components";

const ParticleBackground = ({ src }: any) => {
    const round = (n: number, step: any, hue = 1) => Math.ceil((n / step) * hue) * step;
    const STEP = 210;
    const particleOptions: ParticleOptions = {
        filter: ({ x, y, image }) => {
            // Get pixel
            const pixel = image.get(x, y);
            // Make a particle for this pixel if blue > 52 (range 0-255)
            return pixel.b < 216
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
            return .015 + (magnitude / 255) / 3.75;
        },
        mass: () => 128,
        friction: () => 0.16,
    };

    const motionForce = (x: number, y: number): ParticleForce => {
        return forces.disturbance(x, y, 9);
    };
    return (
        <BgWrapper>
            <ParticleImage
                src={src}
                width={Number(window.innerWidth)}
                height={Number(window.innerHeight)}
                scale={6}
                entropy={20}
                maxParticles={8000}
                particleOptions={particleOptions}
                backgroundColor="inherit"
                className="background"
            />
        </BgWrapper>
    )
}


const BgWrapper = styled.main`
	position: fixed;
	top: 10vh;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;

`
export default ParticleBackground;

// @import "../../styles/index.scss";

// .background {
// 	@include themed() {
// 		background: t("bg");
// 	}

// }

