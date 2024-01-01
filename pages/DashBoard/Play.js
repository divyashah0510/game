import React, { useState } from "react";
import Game from "../models/Game";

const Play = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Add logic to handle play/pause functionality here
  };

  return (
    <div className="flex flex-col items-center justify-center -mt-9">
      <div className="w-full h-[90%] bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
        {/* Your media player container or other components */}
        <div className="text-4xl text-center w-full h-full">{isPlaying ? <Game/> : "Paused"}</div>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
          onClick={togglePlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default Play;
