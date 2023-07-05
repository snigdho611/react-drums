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
  const clapAudio = new Audio(clap);
  const hihatAudio = new Audio(hihat);
  const kickAudio = new Audio(kick);
  const openhatAudio = new Audio(openhat);
  const boomAudio = new Audio(boom);
  const rideAudio = new Audio(ride);
  const snareAudio = new Audio(snare);
  const tomAudio = new Audio(tom);
  const tinkAudio = new Audio(tink);

  const clapRef = useRef<HTMLButtonElement|null>(null)
  const hihatRef = useRef<HTMLButtonElement | null>(null)
  const kickRef = useRef<HTMLButtonElement | null>(null)
  const openhatRef = useRef<HTMLButtonElement | null>(null)
  const boomRef = useRef<HTMLButtonElement | null>(null)
  const rideRef = useRef<HTMLButtonElement | null>(null)
  const snareRef = useRef<HTMLButtonElement | null>(null)
  const tomRef = useRef<HTMLButtonElement | null>(null)
  const tinkRef = useRef<HTMLButtonElement | null>(null)
  
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
        // clapAudio.play();
        clapRef.current?.click()
      }
      if (event.key === "s" || event.key === "S") {
        // hihatAudio.play();
        hihatRef.current?.click()
      }
      if (event.key === "d" || event.key === "D") {
        // kickAudio.play();
        kickRef.current?.click()
      }
      if (event.key === "f" || event.key === "F") {
        // openhatAudio.play();
        openhatRef.current?.click()
      }
      if (event.key === "g" || event.key === "G") {
        // boomAudio.play();
        boomRef.current?.click()
      }
      if (event.key === "h" || event.key === "H") {
        // rideAudio.play();
        rideRef.current?.click()
      }
      if (event.key === "j" || event.key === "J") {
        // snareAudio.play();
        snareRef.current?.click()
      }
      if (event.key === "k" || event.key === "K") {
        // tomAudio.play();
        tomRef.current?.click()
      }
      if (event.key === "l" || event.key === "L") {
        // tinkAudio.play();
        tinkRef.current?.click()
      }
    };
    document.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <button ref={clapRef} onClick={()=>{clapAudio.play()}}>clap</button>
      <button ref={hihatRef} onClick={()=>{hihatAudio.play()}}>hihat</button>
      <button ref={kickRef} onClick={()=>{kickAudio.play()}}>kick</button>
      <button ref={openhatRef} onClick={()=>{openhatAudio.play()}}>openhat</button>
      <button ref={boomRef} onClick={()=>{boomAudio.play()}}>boom</button>
      <button ref={rideRef} onClick={()=>{rideAudio.play()}}>ride</button>
      <button ref={snareRef} onClick={()=>{snareAudio.play()}}>snare</button>
      <button ref={tomRef} onClick={()=>{tomAudio.play()}}>tom</button>
      <button ref={tinkRef} onClick={()=>{tinkAudio.play()}}>tink</button>
    </div>
  );
}

export default App;
