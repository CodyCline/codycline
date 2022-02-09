import Image from "next/image";
import { useState, useEffect } from "react";
import useSound from 'use-sound';
import volumeOn from "../public/assets/img/volume_on.png";
import volumeOff from "../public/assets/img/volume_off.png";
import muteSound from "../public/assets/sfx/mute.mp3";
import unmuteSound from "../public/assets/sfx/unmute.mp3";
import { ToggleButton } from "./ThemeToggle";

export const useContextualVolume = (sound:any, settings?:any) => {
  const [volume, setVolume] = useState(() => {
    const stickyValue = window.localStorage.getItem("volume");
    return stickyValue !== null
        ? stickyValue
        : "on";
  });
  const [playSound] = useSound(sound, {
    soundEnabled: volume === "on",
    ...settings
  });
  useEffect(() => {
    window.localStorage.setItem("volume", volume);
  }, [volume])
  
  return [playSound];
}





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
      hoverColor="var(--color-shadow-theme-toggle)"
      backgroundColor="var(--color-bg-theme-toggle)"
      aria-label={`Turn website sounds ${inactiveSetting}`}
      title={`Turn website sounds ${inactiveSetting}`}
      type="button"
      onClick={() => {
        volume === "on"? playMute() : playUnmute();
        setVolume(inactiveSetting);
      }}
    >
      {volume === "on"
        ? <Image height={18} width={18} src={volumeOn} />
        : <Image height={18} width={18} src={volumeOff} />
      }
    </ToggleButton>
  );
};

export default VolumeToggle;

