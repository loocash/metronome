import React, { useState, useEffect } from "react";

import Rhythm from "./Rhythm";
import Slider from "./Slider";
import IntegerInput from "./IntegerInput";
import Checkbox from "./Checkbox";
import { beep, PlaySVG, StopSVG, stress } from "../utils";

import { bpmToTempo } from "../tempo";

const Metronome = () => {
  const [tempo, setTempo] = useState(145);
  const [count, setCount] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [beats, setBeats] = useState(4);
  const [stressed, setStressed] = useState(true);

  const bpmToMs = (bpm) => Math.round(60000 / bpm);

  const toggle = () => setPlaying((p) => !p);

  const handleTempoChange = (newTempo) => setTempo(newTempo);

  const handleBeatsChange = (newBeats) => setBeats(newBeats);

  const toggleStress = () => setStressed((s) => !s);

  useEffect(() => {
    let timer = null;

    if (playing) {
      timer = setInterval(
        () => setCount((c) => (c + 1) % beats),
        bpmToMs(tempo)
      );
    } else {
      setCount(-1);
    }

    return () => clearInterval(timer);
  }, [playing, tempo, beats]);

  useEffect(() => {
    if (playing && count > -1) {
      if (stressed && count === 0) {
        stress();
      } else {
        beep();
      }
    }
  }, [count, stressed, playing]);

  return (
    <div className="bg-white shadow-lg rounded-lg mx-auto p-4 max-w-screen-sm">
      <h1 className="text-4xl font-medium border-b italic text-blue-900">
        Metronome
      </h1>
      <div className="my-4 text-blue-900 text-center text-xl">
        <h2 className="flex justify-center items-center">
          <span className="text-6xl font-medium mr-2">{tempo}</span> BPM
        </h2>
        <h3>{bpmToTempo(tempo)}</h3>
        <Slider min={20} max={260} value={tempo} onChange={handleTempoChange} />
      </div>
      <div className="my-8">
        <Rhythm count={count} beats={beats} />
      </div>
      <div className="flex items-center justify-around">
        <div className="w-1/4">
          <IntegerInput
            label="BEATS"
            min={2}
            max={12}
            value={beats}
            onChange={handleBeatsChange}
          />
        </div>
        <button
          className="rounded-full text-blue-900 w-20 h-20"
          onClick={toggle}
        >
          {playing ? <StopSVG /> : <PlaySVG />}
        </button>
        <div className="w-1/4">
          <Checkbox
            label="STRESS THE FIRST BEAT"
            checked={stressed}
            onChange={toggleStress}
          />
        </div>
      </div>
    </div>
  );
};

export default Metronome;
