import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import boom from "./sounds/boom.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tom from "./sounds/tom.wav";
import tink from "./sounds/tink.wav";

function App() {
  const clapRef = useRef<HTMLButtonElement | null>(null);
  const hihatRef = useRef<HTMLButtonElement | null>(null);
  const kickRef = useRef<HTMLButtonElement | null>(null);
  const openhatRef = useRef<HTMLButtonElement | null>(null);
  const boomRef = useRef<HTMLButtonElement | null>(null);
  const rideRef = useRef<HTMLButtonElement | null>(null);
  const snareRef = useRef<HTMLButtonElement | null>(null);
  const tomRef = useRef<HTMLButtonElement | null>(null);
  const tinkRef = useRef<HTMLButtonElement | null>(null);

  const [clapClicked, setClapClicked] = useState<boolean>(false);
  const [hihatClicked, setHihatClicked] = useState<boolean>(false);
  const [kickClicked, setKickClicked] = useState<boolean>(false);
  const [openhatClicked, setOpenhatClicked] = useState<boolean>(false);
  const [boomClicked, setBoomClicked] = useState<boolean>(false);
  const [rideClicked, setRideClicked] = useState<boolean>(false);
  const [snareClicked, setSnareClicked] = useState<boolean>(false);
  const [tomClicked, setTomClicked] = useState<boolean>(false);
  const [tinkClicked, setTinkClicked] = useState<boolean>(false);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useMemo(() => {
    const clapAudio = new Audio(clap);
    const hihatAudio = new Audio(hihat);
    const kickAudio = new Audio(kick);
    const openhatAudio = new Audio(openhat);
    const boomAudio = new Audio(boom);
    const rideAudio = new Audio(ride);
    const snareAudio = new Audio(snare);
    const tomAudio = new Audio(tom);
    const tinkAudio = new Audio(tink);

    const handleMouseDownClick = () => {
      if (clapRef.current) {
        clapRef.current.addEventListener("click", () => {
          clapAudio.currentTime = 0;
          clapAudio.play();
        });
      }
      if (hihatRef.current) {
        hihatRef.current.addEventListener("click", () => {
          hihatAudio.currentTime = 0;
          hihatAudio.play();
        });
      }
      if (kickRef.current) {
        kickRef.current.addEventListener("click", () => {
          kickAudio.currentTime = 0;
          kickAudio.play();
        });
      }
      if (openhatRef.current) {
        openhatRef.current.addEventListener("click", () => {
          openhatAudio.currentTime = 0;
          openhatAudio.play();
        });
      }
      if (boomRef.current) {
        boomRef.current.addEventListener("click", () => {
          openhatAudio.currentTime = 0;
          openhatAudio.play();
        });
      }
      if (rideRef.current) {
        rideRef.current.addEventListener("click", () => {
          rideAudio.currentTime = 0;
          rideAudio.play();
        });
      }
      if (snareRef.current) {
        snareRef.current.addEventListener("click", () => {
          snareAudio.currentTime = 0;
          snareAudio.play();
        });
      }
      if (tomRef.current) {
        tomRef.current.addEventListener("click", () => {
          tomAudio.currentTime = 0;
          tomAudio.play();
        });
      }
      if (tinkRef.current) {
        tinkRef.current.addEventListener("click", () => {
          tinkAudio.currentTime = 0;
          tinkAudio.play();
        });
      }
    };

    const handleUserKeyPressUp = (event: KeyboardEvent) => {
      if (event.key === "a" || event.key === "A") {
        setClapClicked(false);
      }
      if (event.key === "s" || event.key === "S") {
        setHihatClicked(false);
      }
      if (event.key === "d" || event.key === "D") {
        setKickClicked(false);
      }
      if (event.key === "f" || event.key === "F") {
        setOpenhatClicked(false);
      }
      if (event.key === "g" || event.key === "G") {
        setBoomClicked(false);
      }
      if (event.key === "h" || event.key === "H") {
        setRideClicked(false);
      }
      if (event.key === "j" || event.key === "J") {
        setSnareClicked(false);
      }
      if (event.key === "k" || event.key === "K") {
        setTomClicked(false);
      }
      if (event.key === "l" || event.key === "L") {
        setTinkClicked(false);
      }
    };

    const handleUserKeyPressDown = (event: KeyboardEvent) => {
      if ((event.key === "a" || event.key === "A")) {
        setClapClicked(true);
        clapAudio.currentTime = 0;
        clapAudio.play();
      }
      if (event.key === "s" || event.key === "S") {
        setHihatClicked(true)
        hihatAudio.currentTime = 0;
        hihatAudio.play();
      }
      if (event.key === "d" || event.key === "D") {
        setKickClicked(true)
        kickAudio.currentTime = 0;
        kickAudio.play();
      }
      if (event.key === "f" || event.key === "F") {
        setOpenhatClicked(true)
        openhatAudio.currentTime = 0;
        openhatAudio.play();
      }
      if (event.key === "g" || event.key === "G") {
        setBoomClicked(true)
        boomAudio.currentTime = 0;
        boomAudio.play();
      }
      if (event.key === "h" || event.key === "H") {
        setRideClicked(true)
        rideAudio.currentTime = 0;
        rideAudio.play();
      }
      if (event.key === "j" || event.key === "J") {
        setSnareClicked(true)
        snareAudio.currentTime = 0;
        snareAudio.play();
      }
      if (event.key === "k" || event.key === "K") {
        setTomClicked(true)
        tomAudio.currentTime = 0;
        tomAudio.play();
      }
      if (event.key === "l" || event.key === "L") {
        setTinkClicked(true)
        tinkAudio.currentTime = 0;
        tinkAudio.play();
      }
    };

    document.addEventListener("keydown", handleUserKeyPressDown);
    document.addEventListener("mousedown", handleMouseDownClick);
    document.addEventListener("keyup", handleUserKeyPressUp);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPressDown);
      window.removeEventListener("keyup", handleUserKeyPressUp);
      window.removeEventListener("mousedown", handleMouseDownClick);
    };
  }, []);

  return (
    <div className="page">
      <button
        className={clapClicked ? "instrument-clicked" : "instrument"}
        ref={clapRef}
      >
        clap
      </button>
      <button className={hihatClicked ? "instrument-clicked" : "instrument"} ref={hihatRef}>
        hihat
      </button>
      <button className={kickClicked ? "instrument-clicked" : "instrument"} ref={kickRef}>
        kick
      </button>
      <button className={openhatClicked ? "instrument-clicked" : "instrument"} ref={openhatRef}>
        openhat
      </button>
      <button className={boomClicked ? "instrument-clicked" : "instrument"} ref={boomRef}>
        boom
      </button>
      <button className={rideClicked ? "instrument-clicked" : "instrument"} ref={rideRef}>
        ride
      </button>
      <button className={snareClicked ? "instrument-clicked" : "instrument"} ref={snareRef}>
        snare
      </button>
      <button className={tomClicked ? "instrument-clicked" : "instrument"} ref={tomRef}>
        tom
      </button>
      <button className={tinkClicked ? "instrument-clicked" : "instrument"} ref={tinkRef}>
        tink
      </button>
    </div>
  );
}

export default App;
