'use client';

import { useState } from 'react';

export default function OptionRadio() {
  const [options, setOptions] = useState([
    {
      id: 1,
      value: 'dog',
      label: '狗',
      checked: true,
    },
    {
      id: 2,
      value: 'cat',
      label: '貓',
      checked: false,
    },
    {
      id: 3,
      value: 'fish',
      label: '魚',
      checked: false,
    },
  ]);

  const onToggle = (optionId: number) => {
    const newOptions = options.map((option) => {
      if (option.id === optionId) {
        return { ...option, checked: !option.checked };
      } else {
        return { ...option, checked: false };
      }
    });
    setOptions(newOptions);
  };

  return (
    <>
      <h3>單選群組</h3>
      {options.map((option) => {
        return (
          <label key={option.id}>
            <input
              type="radio"
              value={option.value}
              checked={option.checked}
              onChange={() => {
                onToggle(option.id);
              }}
            />
            {option.label}
          </label>
        );
      })}
    </>
  );
}
