import React, { useState, useEffect } from "react";

import { Wrapper } from "./MainPage.styles";

import identityNet from "./identity_net.onnx";
import useONNX from "./useONNX";
import Slider from "./Slider";

const MainPage = () => {
  const [input, setInput] = useState(0);
  const [isReady, output, getPrediction] = useONNX(identityNet);

  useEffect(
    () => {
      getPrediction(+input);
    },
    [input]
  );

  return (
    <Wrapper>
      <h1>Identity Net</h1>
      <Slider
        ticks={4}
        id="onnx_input"
        label={input}
        range={{ min: 0, max: 1, step: 0.01 }}
        cb={setInput}
        isDisabled={!isReady}
      />
      <div>Model is {isReady ? "Ready" : "Not Ready"}</div>
      <div className="output">Output: {Number(output).toFixed(3)}</div>
    </Wrapper>
  );
};

export default MainPage;
