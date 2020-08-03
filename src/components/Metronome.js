import React, { useState, useEffect } from "react";

import Rhythm from "./Rhythm";
import Slider from "./Slider";
import IntegerInput from "./IntegerInput";
import { beep, PlaySVG, StopSVG } from "../utils";

import { bpmToTempo } from "../tempo";

const Metronome = () => {
  const [tempo, setTempo] = useState(145);
  const [count, setCount] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [size, setSize] = useState(4);

  const bpmToMs = (bpm) => Math.round(60000 / bpm);

  const toggle = () => setPlaying(!playing);

  const handleTempoChange = (newTempo) => setTempo(newTempo);

  const handleSizeChange = (newSize) => setSize(newSize);

  useEffect(() => {
    let timer = null;

    const onTick = () => {
      setCount((count + 1) % size);
      beep();
    };

    if (playing) {
      clearTimeout(timer);
      timer = setTimeout(onTick, bpmToMs(tempo));
      if (count === -1) {
        onTick();
      }
    } else {
      setCount(-1);
    }

    return () => clearTimeout(timer);
  }, [playing, count, tempo, size]);

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
        <Rhythm count={count} size={size} />
      </div>
      <div className="flex items-center justify-around">
        <div className="w-1/4">
          <IntegerInput
            label="BEATS"
            min={2}
            max={12}
            value={size}
            onChange={handleSizeChange}
          />
        </div>
        <button
          className="rounded-full text-blue-900 w-20 h-20"
          onClick={toggle}
        >
          {playing ? <StopSVG /> : <PlaySVG />}
        </button>
      </div>
    </div>
  );
};

export default Metronome;
