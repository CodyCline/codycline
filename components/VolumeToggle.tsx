import Image from "next/image";
import { useState, useEffect } from "react";
import useSound from 'use-sound';
import { IconShim, ToggleButton } from "./ThemeToggle";
import volumeOn from "../public/assets/img/volume_on.png";
import volumeOff from "../public/assets/img/volume_off.png";
import muteSound from "../public/assets/sfx/mute.mp3";
import unmuteSound from "../public/assets/sfx/unmute.mp3";



const VolumeToggle = () => {
  const [volume, setVolume] = useState<any>(document.documentElement.dataset.volume);
	const inactiveSetting: any = volume === "on" ? "off" : "on";
	useEffect(() => {
		document.documentElement.dataset.volume = volume;
		window.localStorage.setItem("volume", volume);
	}, [volume]);

  const [playMute] = useSound(muteSound);
  const [playUnmute] = useSound(unmuteSound);

  return (
    <ToggleButton
      hoverColor="var(--color-shadow-volume-toggle)"
      backgroundColor={volume === "on" ? `var(--color-bg-volume-toggle-on)` : `var(--color-bg-volume-toggle-off)`}
      aria-label={`Turn website sounds ${inactiveSetting}`}
      title={`Turn website sounds ${inactiveSetting}`}
      type="button"
      onClick={() => {
        volume === "on"? playMute() : playUnmute();
        setVolume(inactiveSetting);
      }}
    >
      <IconShim key={volume}>
      {volume === "on"
        ? <Image alt="volume on" height={18} width={18} src={volumeOn} />
        : <Image alt="volume off" height={18} width={18} src={volumeOff} />
      }
      </IconShim>
    </ToggleButton>
  );
};

export default VolumeToggle;

