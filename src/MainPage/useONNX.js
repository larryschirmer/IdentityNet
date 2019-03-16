import { useState, useEffect } from 'react';
import { Tensor, InferenceSession } from 'onnxjs';
import throttle from 'lodash.throttle';

const session = new InferenceSession({ backendHint: 'cpu' });
const loadModel = async (url, setIsReady) => {
  await session.loadModel(url);
  setIsReady(true);
};
const processInput = throttle(async (input, isReady, setOutput) => {
  const tensorInput = [new Tensor([input], 'float32')];

  if (isReady) {
    const outputMap = await session.run(tensorInput);
    const output = outputMap.values().next().value.data;
    setOutput(output);
  }
}, 10);

const useONNX = url => {
  const [isReady, setIsReady] = useState(false);
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    loadModel(url, setIsReady);
  }, []);

  useEffect(() => {
    processInput(input, isReady, setOutput);
  }, [input]);

  return [isReady, output, setInput];
};

export default useONNX;
