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
        clapAudio.play();
      }
      if (event.key === "s" || event.key === "S") {
        hihatAudio.play();
      }
      if (event.key === "d" || event.key === "D") {
        kickAudio.play();
      }
      if (event.key === "f" || event.key === "F") {
        openhatAudio.play();
      }
      if (event.key === "g" || event.key === "G") {
        boomAudio.play();
      }
      if (event.key === "h" || event.key === "H") {
        rideAudio.play();
      }
      if (event.key === "j" || event.key === "J") {
        snareAudio.play();
      }
      if (event.key === "k" || event.key === "K") {
        tomAudio.play();
      }
      if (event.key === "l" || event.key === "L") {
        tinkAudio.play();
      }
    };
    document.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
