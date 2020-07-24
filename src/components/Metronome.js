import React, { useState } from "react";
import beep from "../beep";

const Metronome = () => {
  const [tempo, setTempo] = useState(145);
  const [timer, setTimer] = useState(null);

  const handleTempoChange = (newTempo) => {
    setTempo(newTempo);
    if (timer) {
      clearInterval(timer);
      setTimer(setInterval(beep, bpmToMs(tempo)));
    }
  };

  const bpmToMs = (bpm) => Math.round(60000 / bpm);

  const toggleTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    } else {
      setTimer(setInterval(beep, bpmToMs(tempo)));
    }
  };

  return (
    <div className="metronome">
      <h1>Metronome</h1>
      <h2>Tempo: {tempo} BPM</h2>
      <p>
        <input
          type="range"
          min="40"
          max="200"
          value={tempo}
          onChange={(event) => handleTempoChange(event.target.value)}
        />
      </p>
      <button onClick={toggleTimer}>{timer ? "■ Stop" : "► Play"}</button>
    </div>
  );
};

export default Metronome;
