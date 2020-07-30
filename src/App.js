import React from "react";
import "./App.css";
import "./tailwind.output.css";

import Metronome from "./components/Metronome";

function App() {
  return (
    <div className="App bg-gray-200 h-screen pt-8 px-2">
      <Metronome />
    </div>
  );
}

export default App;
