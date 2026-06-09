'use client';

const options = [
  {
    id: 1,
    value: 'dog',
    text: '狗',
  },
  {
    id: 2,
    value: 'cat',
    text: '貓',
  },
  {
    id: 3,
    value: 'fish',
    text: '魚',
  },
];

import { useState } from 'react';

export default function OptionRadio() {
  const [selected, setSelected] = useState('dog');
  return (
    <>
      <h3>單選群組</h3>
      {options.map((option) => {
        return (
          <label key={option.id}>
            <input
              type="radio"
              value={option.value}
              checked={selected === option.value ? true : false}
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            />
            {option.text}
          </label>
        );
      })}
    </>
  );
}
