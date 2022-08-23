import Image from "next/image";
import { useEffect, useState } from "react";
import { IconShim, ToggleButton } from "./ThemeToggle";
import useSound from 'use-sound';
import motion from "../public/assets/img/motion.png";
import stopMotion from "../public/assets/img/stop_motion.png";
import animationActive from "../public/assets/sfx/animation_on.mp3";
import animationInactive from "../public/assets/sfx/animation_off.mp3";
import { usePrefersReducedMotion } from "../lib/utils/use-prefers-reduced-motion";

const MotionToggle = () => {
    const [prefersReducedMotion, setReducedMotion] = useState<any>(document.documentElement.dataset.motion);
    const inactiveSetting: any = prefersReducedMotion === "reduce" ? "no-preference": "reduce";
    
    useEffect(() => {
		document.documentElement.dataset.motion = prefersReducedMotion;
		window.localStorage.setItem("motion", prefersReducedMotion);
	}, [prefersReducedMotion]);
    
    const [playAnimationOn] = useSound(animationActive, {
        soundEnabled: false,
    });
    const [playAnimationOff] = useSound(animationInactive, {
        soundEnabled: false
    });

    return (
        <ToggleButton
            title={prefersReducedMotion === "reduce" ? `Turn on website animation`: `Turn off website animation`}
            aria-label={prefersReducedMotion === "reduce" ? `Turn on website animation`: `Turn off website animation`}
            hoverColor="var(--color-shadow-motion-toggle)"
            backgroundColor={prefersReducedMotion === "reduce"? `var(--color-bg-motion-toggle-off)` : `var(--color-bg-motion-toggle-on)`}
            onClick={() => {
                prefersReducedMotion === "reduce"
                    ? playAnimationOn({ forceSoundEnabled: document.documentElement.dataset.volume === "on" })
                    : playAnimationOff({ forceSoundEnabled: document.documentElement.dataset.volume === "on" })
                setReducedMotion(inactiveSetting);
            }}
        >
            <IconShim key={prefersReducedMotion}>
            {prefersReducedMotion === "reduce"
                ? <Image alt="motion on" height={18} width={18} src={motion} />
                : <Image alt="motion off" height={18} width={18} src={stopMotion} />
            }
            </IconShim>
        </ToggleButton>
    )
}

export default MotionToggle;