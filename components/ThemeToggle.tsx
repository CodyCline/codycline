import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useSound from 'use-sound';
import moon from "../public/assets/img/moon.png";
import sun from "../public/assets/img/sun.png";
import motion from "../public/assets/img/motion.png";
import stopMotion from "../public/assets/img/stop_motion.png";
import darkSound from "../public/assets/sfx/theme-dark.mp3";
import lightSound from "../public/assets/sfx/theme-light.mp3";

export const ToggleButton: any = styled.button`
  --toggle-size: 38px;
  --togle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-size);
  height: var(--toggle-size);
  padding: var(--toggle-padding);
  border: 0;
    line-height: 1.7;
  border-radius: 50%;
  cursor: pointer;
  background: inherit;
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    background: ${(props: any) => props.backgroundColor};
    box-shadow: 0 0 10px 4px ${(props: any) => props.hoverColor};
  },
`;

const ThemeToggle = () => {
	const [activeTheme, setActiveTheme] = useState<any>(document.documentElement.dataset.theme);
	const inactiveTheme: any = activeTheme === "light" ? "dark" : "light";
	useEffect(() => {
		document.documentElement.dataset.theme = activeTheme;
		window.localStorage.setItem("theme", activeTheme);
	}, [activeTheme]);

	const [playThemeSound] = useSound(lightSound, {
		soundEnabled: false,
	});
	const [playDarkTheme] = useSound(darkSound, {
		soundEnabled: false
	});

	return (
		<ToggleButton
			hoverColor="var(--color-shadow-theme-toggle)"
			backgroundColor="var(--color-bg-theme-toggle)"
			aria-label={`Change to ${inactiveTheme} mode`}
			title={`Change to ${inactiveTheme} mode`}
			type="button"
			onClick={() => {
				activeTheme === "dark"
					? playThemeSound({ forceSoundEnabled: document.documentElement.dataset.volume === "on" })
					: playDarkTheme({ forceSoundEnabled: document.documentElement.dataset.volume === "on" })
				setActiveTheme(inactiveTheme);
			}}
		>
			{activeTheme === `dark`
				? <Image height={18} width={18} src={moon} />
				: <Image height={18} width={18} src={sun} />
			}
		</ToggleButton>
	);
};

export default ThemeToggle;


export const MotionToggle = ({ theme }: any) => {
	const [activeMotion, setActiveMotion] = useState<any>("on");
	const inactiveSetting: any = activeMotion === "on" ? "off" : "on";
	return (
		<ToggleButton
			aria-label={`Toggle website animations ${inactiveSetting}`}
			title={`Toggle website animations ${inactiveSetting}`}
			hoverColor="var(--color-shadow-motion-toggle)"
			backgroundColor={activeMotion === "on" ? `var(--color-bg-motion-toggle-on)` : `var(--color-bg-motion-toggle-off)`}
			onClick={() => setActiveMotion(inactiveSetting)}
		>
			{activeMotion === "on"
				? <Image height={18} width={18} src={motion} />
				: <Image height={18} width={18} src={stopMotion} />
			}
		</ToggleButton>
	)
}