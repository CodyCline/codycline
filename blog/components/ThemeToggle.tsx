
import { useState, useEffect } from "react";
import styled from "styled-components";
import moon from "../public/assets/moon.png";
import sun from "../public/assets/sun.png";
import Image from "next/image";

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
    line-height: 1.7;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

const ToggleThumb:any = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  z-index: 999;
  transform: ${(props:any) =>
        props.activeTheme === "dark"
            ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
            : "none"};
`;

const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState<any>(document.body.dataset.theme);
    const inactiveTheme:any = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);
    return (
        <ToggleButton
            aria-label={`Change to ${inactiveTheme} mode`}
            title={`Change to ${inactiveTheme} mode`}
            type="button"
            onClick={() => setActiveTheme(inactiveTheme)}
        >
            <ToggleThumb activeTheme={activeTheme} />
              <Image height={18} width={18} src={moon}/>
              <Image height={18} width={18}  src={sun} />
        </ToggleButton>
    );
};

export default ThemeToggle;