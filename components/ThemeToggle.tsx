import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useSound from 'use-sound';
import { fadeInAnimation, slideInAnimation } from "./styles/Animations";
import moon from "../public/assets/img/moon.png";
import sun from "../public/assets/img/sun.png";
import darkSound from "../public/assets/sfx/theme_dark.mp3";
import lightSound from "../public/assets/sfx/theme_light.mp3";

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
	border: none;
	line-height: 1.7;
	border-radius: 50%;
	cursor: pointer;
	background: inherit;
	transition: background var(--transition-seconds-default) ease-in-out, box-shadow var(--transition-seconds-default) ease-in-out;

	&:focus {
		outline-offset: 3px;
	}
	&:focus:not(:focus-visible) {
		outline: none;
	}

	&:hover {
		background: ${(props: any) => props.backgroundColor};
		box-shadow: 0 0 10px 4px ${(props: any) => props.hoverColor};
	},
`;

export const IconShim:any = styled.span`
	animation: ${fadeInAnimation} var(--transition-seconds-primary) linear; 
`

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
		<IconShim key={activeTheme}>
			{activeTheme === `dark`
				? <Image alt="toggle light" height={18} width={18} src={moon} />
				: <Image alt="toggle dark" height={18} width={18} src={sun} />
			}
		</IconShim>
		</ToggleButton>
	);
};

export default ThemeToggle;

