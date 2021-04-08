import * as React from "react";
import ParticleImage, {
	ParticleOptions,
	forces,
	ParticleForce
} from "react-particle-image";
import { useHasMounted } from "../../utils/use-has-mounted";
import "./background.scss";

export const Background = ({ src }: any) => {
    const hasMounted = useHasMounted();
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
        friction: () => 0.15,
    };

    const motionForce = (x: number, y: number): ParticleForce => {
        return forces.disturbance(x, y, 9);
    };
    return (
        <ParticleImage
            src={src}
            width={Number(hasMounted ? window.innerWidth: 300)}
            height={Number(hasMounted ? window.innerHeight : 300)}
            scale={4}
            entropy={20}
            maxParticles={8000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            backgroundColor="inherit"
            className="background"
        />
    )
}