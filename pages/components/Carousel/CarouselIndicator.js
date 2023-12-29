import React from "react";

export default function CarouselIndicator(props) {
  const { activeIndex, length, onSetActiveIndex } = props;
  const maxIndicatorVisible = props.maxIndicatorVisible || 5;

  const maxIndicator =
    length > maxIndicatorVisible ? maxIndicatorVisible : length;

  return (
    <div className="carousel-indicator bg-transparent mb-3 m-auto">
      {Array.from(Array(maxIndicator), (_, index) => {
        return (
          <div
            key={index}
            className={`carousel-indicator-dots px-7 ${
              activeIndex === index ? "w-4 opacity-100" : "w-2 bg-gray-400"
            }`}
            onClick={() => {
              onSetActiveIndex(index);
            }}
          ></div>
        );
      })}
    </div>
  );
}
