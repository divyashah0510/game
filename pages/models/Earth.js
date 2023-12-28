import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";

const Earth = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Spline scene="https://prod.spline.design/AUx73LtvwlcbMHtc/scene.splinecode" />
    </Suspense>
  );
};

export default Earth;
