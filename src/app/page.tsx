"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Test from "./MagicBox";
import { v4 } from "uuid";

// Intensive calculation function
const calculateFibonacci = (num) => {
  if (num <= 1) return num;
  return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
};

const randomArray = [1, 2, 3, 4, 5];

type CustomRefComponentHandle = {
  gunnsteinn: () => void;
};

type CustomRefComponentProps = {
  text: string;
};

const CustomRefComponent = forwardRef<
  CustomRefComponentHandle,
  CustomRefComponentProps
>((props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return {
        gunnsteinn: () => {
          alert("Gunnsteinn!");
        },
      };
    },
    []
  );
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
});

const SlowComponent = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    console.log({ count, value: ref.current });
  }, [count]);

  const ref = useRef<string | number>(10);

  const inputRef = useRef<HTMLInputElement>(null);

  const manyInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const indexRef = useRef<number>(0);

  const customRef = useRef<CustomRefComponentHandle>(null);

  const click = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div className="border">
        <input
          onChange={(e) => {
            ref.current = e.target.value;
          }}
          ref={inputRef}
          type="text"
          className="border"
        />
        <button
          onClick={() => {
            alert(ref.current);
          }}
        >
          Print value
        </button>
        <div className="border">
          <p>Ref value: {ref.current}</p>
        </div>
        <p>{count}</p>
        <button onClick={click}>focus input</button>
      </div>
      <div className="border m-4">
        {randomArray.map((item, index, array) => (
          <div className="border m-4" key={item}>
            <input
              ref={(ref) => (manyInputsRef.current[index] = ref)}
              type="text"
            />
            <button
              onClick={() => {
                if (indexRef.current < array.length - 1) {
                  indexRef.current = indexRef.current + 1;
                  manyInputsRef.current[indexRef.current].focus();
                } else {
                  indexRef.current = 0;
                  manyInputsRef.current[0].focus();
                }
              }}
            >
              Submit and focus next input
            </button>
          </div>
        ))}
      </div>
      <div className="border m-4">
        <CustomRefComponent text="Foop" ref={customRef} />
        <button
          onClick={() => {
            customRef.current?.gunnsteinn();
          }}
        >
          Who is it?
        </button>
      </div>
    </div>
  );
};

const Item = () => {
  return <p>Hello</p>;
};

const TimeoutComponent = () => {
  const [showItem, setShowItem] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const click = () => {
    setShowItem((s) => !s);
    if (!showItem) {
      timeoutRef.current = setInterval(() => {
        console.log("clicked 3 sec ago!");
      }, 1000);
    } else {
      clearInterval(timeoutRef.current);
    }
  };
  return (
    <div className="border m-4">
      <button onClick={click}>Press!</button>
      {showItem && <Item />}
    </div>
  );
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Hello world</p>
        <SlowComponent />
        <TimeoutComponent />
        <Test />
      </main>
    </div>
  );
}
