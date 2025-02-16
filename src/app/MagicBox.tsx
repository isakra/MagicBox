"use client";
import React, { useRef, forwardRef, useImperativeHandle } from "react";

// Pre-defined colors to be used for randomizer
const tailwindColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
];

// TODO: According to this type, add these functions to this component to be used within the parent component.
// Hint: useImperativeHandle
type MagicBoxHandle = {
  changeColor: () => void;
  resize: () => void;
  wiggle: () => void;
};

type MagicBoxRef = MagicBoxHandle & HTMLDivElement;

// eslint-disable-next-line react/display-name
const MagicBox = forwardRef<MagicBoxHandle>((_, ref) => {
  const boxRef = useRef<MagicBoxRef>(null);
  // TODO: Can use either state or ref to maintain this value
  const size = "20";

  // Random color generator
  function randomColor() {
    // TODO: Get a random color from tailwindColors
  }

  const wiggle = () => {
    // TODO: Add and then remove an animation from the classlist of a component
    boxRef.current?.classList.add("");
    setTimeout(() => boxRef.current?.classList.remove(""), 2000);
  };

  return (
    <div
      ref={boxRef}
      className={
        /*TODO: Update the styles to work for more variables*/ `w-20 h-${size} bg-red-500`
      }
    />
  );
});

// Parent Component
function MagicBoxParent() {
  const magicBoxRef = useRef<MagicBoxHandle>(null);

  return (
    <div className="App">
      <h1>Magic Box!</h1>
      <button
        onClick={() => magicBoxRef.current?.changeColor()}
        className="m-4 border"
      >
        Change Color
      </button>
      <button
        className="m-4 border"
        onClick={() => magicBoxRef.current?.resize()}
      >
        Resize
      </button>
      <button
        className="m-4 border"
        onClick={() => magicBoxRef.current?.wiggle()}
      >
        Wiggle
      </button>
      <MagicBox ref={magicBoxRef} />
    </div>
  );
}

export default MagicBoxParent;
