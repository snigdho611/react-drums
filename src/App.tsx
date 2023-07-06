import { useEffect, useMemo, useRef } from "react";
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
  // const clapAudio = new Audio(clap);
  // const hihatAudio = new Audio(hihat);
  // const kickAudio = new Audio(kick);
  // const openhatAudio = new Audio(openhat);
  // const boomAudio = new Audio(boom);
  // const rideAudio = new Audio(ride);
  // const snareAudio = new Audio(snare);
  // const tomAudio = new Audio(tom);
  // const tinkAudio = new Audio(tink);

  const clapRef = useRef<HTMLButtonElement | null>(null);
  const hihatRef = useRef<HTMLButtonElement | null>(null);
  const kickRef = useRef<HTMLButtonElement | null>(null);
  const openhatRef = useRef<HTMLButtonElement | null>(null);
  const boomRef = useRef<HTMLButtonElement | null>(null);
  const rideRef = useRef<HTMLButtonElement | null>(null);
  const snareRef = useRef<HTMLButtonElement | null>(null);
  const tomRef = useRef<HTMLButtonElement | null>(null);
  const tinkRef = useRef<HTMLButtonElement | null>(null);

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

    const handleUserKeyPress = (event: KeyboardEvent) => {
      if (event.key === "a" || event.key === "A") {
        clapAudio.currentTime = 0;
        clapAudio.play();
      }
      if (event.key === "s" || event.key === "S") {
        hihatAudio.currentTime = 0;
        hihatAudio.play();
      }
      if (event.key === "d" || event.key === "D") {
        kickAudio.currentTime = 0;
        kickAudio.play();
      }
      if (event.key === "f" || event.key === "F") {
        openhatAudio.play();
      }
      if (event.key === "g" || event.key === "G") {
        boomAudio.currentTime = 0;
        boomAudio.play();
      }
      if (event.key === "h" || event.key === "H") {
        rideAudio.currentTime = 0;
        rideAudio.play();
      }
      if (event.key === "j" || event.key === "J") {
        snareAudio.currentTime = 0;
        snareAudio.play();
      }
      if (event.key === "k" || event.key === "K") {
        tomAudio.currentTime = 0;
        tomAudio.play();
      }
      if (event.key === "l" || event.key === "L") {
        tinkAudio.currentTime = 0;
        tinkAudio.play();
      }
    };

    const handleMouseClick = (event: MouseEvent) => {
      if (clapRef.current) {
        clapRef.current.addEventListener("click", () => {
          clapAudio.currentTime = 0;
          clapAudio.play();
        });
      }
      if (hihatRef.current) {
        hihatRef.current.addEventListener("click", () => {
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

    document.addEventListener("keydown", handleUserKeyPress);
    document.addEventListener("mousedown", handleMouseClick);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, []);

  return (
    <div className="App">
      <button ref={clapRef}>clap</button>
      <button ref={hihatRef}>hihat</button>
      <button ref={kickRef}>kick</button>
      <button ref={openhatRef}>openhat</button>
      <button ref={boomRef}>boom</button>
      <button ref={rideRef}>ride</button>
      <button ref={snareRef}>snare</button>
      <button ref={tomRef}>tom</button>
      <button ref={tinkRef}>tink</button>
    </div>
  );
}

export default App;
