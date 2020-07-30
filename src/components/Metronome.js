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
    <div className="bg-white shadow-lg rounded-lg mx-auto p-4 max-w-screen-sm">
      <h1 className="text-2xl font-medium border-b">Metronome</h1>
      <div className="my-4">
        <h2>Tempo: {tempo} BPM</h2>
        <input
          className="w-full"
          type="range"
          min="40"
          max="200"
          value={tempo}
          onChange={(event) => handleTempoChange(event.target.value)}
        />
      </div>
      <div className="flex">
        <button
          className="border rounded-lg px-2 py-1 text-gray-700 shadow mx-auto w-32"
          onClick={toggleTimer}
        >
          {timer ? "■ Stop" : "► Play"}
        </button>
      </div>
    </div>
  );
};

export default Metronome;
