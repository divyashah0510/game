import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";

const Game = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Spline scene="https://prod.spline.design/Ow8qp2R43EMfbeQc/scene.splinecode" />
    </Suspense>
  );
};

export default Game;
