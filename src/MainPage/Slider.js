import React from 'react';

const Slider = ({ id, label, ticks, range, isDisabled, cb }) => {
  const { min = 0, max = 0, step = 0.01 } = range;
  const difference = Math.abs(max - min);

  return (
    <>
      <label className="input" htmlFor={id}>
        {label}
      </label>
      <input
        type="range"
        name={id}
        list="tickmarks"
        id={id}
        min={min}
        max={max}
        step={step}
        disabled={isDisabled}
        onChange={({ target: { value } }) => cb(value)}
      />
      {!!ticks && (
        <datalist id="tickmarks">
          <option value={min} />
          {[...new Array(ticks)].map((_, i) => (
            <option key={`tickmark-${i}`} value={(difference + i) / ticks} />
          ))}
        </datalist>
      )}
    </>
  );
};

export default Slider;
