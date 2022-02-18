import * as React from "react";
import ParticleImage, {
    ParticleOptions,
    forces,
    ParticleForce
} from "react-particle-image";
import styled from "styled-components";
import { media } from "./styles/Media";

const ParticleBackground = ({ src }: any) => {
    const particleOptions: ParticleOptions = {
        filter: ({ x, y, image }) => {
            // Get pixel
            const pixel = image.get(x, y);
            // Make a particle for this pixel if blue > 52 (range 0-255)
            return pixel.b < 216
        },
        color: () => "#777777",
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
                maxParticles={6000}
                particleOptions={particleOptions}
                backgroundColor="inherit"
            />
        </BgWrapper>
    )
}



export default ParticleBackground;

const BgWrapper = styled.section`
    width: 100%;
    height: 100%;
    margin: 1em auto;
    position: absolute;
    z-index: -1;
`

const spacer = styled.div

export const LandingWrapper = styled.div`
    display: grid;
    place-items: center;
    margin: 1em auto;
    z-index: 999;
    width: 60%;
    padding: 25vh 0 50vh 0;
    ${media.tablet`width: 75%; padding: 10vh 0 25vh 0`}
    ${media.phone`width: 90%; padding: 5vh 0 5vh 0`}
`


export const LandingCard = styled.div`
    color: var(--color-text-default);
    background: var(--color-fg-aux);
`

export const LandingTitle = styled.h1`
    font-size: var(--font-size-lg);
    color: var(--color-text-default);
    margin: 1em;
    background: var(--color-fg-aux);
`

export const LandingSummary = styled.p`
    font-weight: bold;
    padding: 1em;
    font-size: var(--font-size-md);
`
