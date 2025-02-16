"use client";
import React, { useRef } from "react";
import MagicBox, { MagicBoxHandle } from "./MagicBox";

const MagicBoxParent = () => {
  const boxRef = useRef<MagicBoxHandle>(null);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">MagicBox Example</h1>
      <MagicBox ref={boxRef} />
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => boxRef.current?.changeColor()}
      >
        Change Box Color
      </button>
    </div>
  );
};

export default MagicBoxParent;
