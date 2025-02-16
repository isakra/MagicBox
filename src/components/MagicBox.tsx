"use client";
import React, { useImperativeHandle, useState, forwardRef } from "react";

export type MagicBoxHandle = {
  changeColor: () => void;
};

const MagicBox = forwardRef<MagicBoxHandle>((_, ref) => {
  const [color, setColor] = useState("blue");

  // Exposing function to parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    changeColor: () => {
      setColor(prevColor => (prevColor === "blue" ? "red" : "blue"));
    },
  }));

  return (
    <div
      className="w-24 h-24 transition-all"
      style={{ backgroundColor: color }}
    />
  );
});

export default MagicBox;
