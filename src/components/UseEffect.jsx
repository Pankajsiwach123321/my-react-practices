import React from "react";
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    console.log("I am the effect");
    return () => {
      console.log("I run after re-render, but before the next useEffect");
    };
  });
  console.log("I am just part of render");
  return (
    <div>
      <button
        onClick={() => {
          setState("Some v. important state.");
        }}
      >
        Click me
      </button>
      <p>state: {state}</p>
    </div>
  );
};

export default UseEffect;
