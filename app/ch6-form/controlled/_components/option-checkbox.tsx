'use client';

import { useState } from 'react';

export default function OptionCheckbox() {
  const [options, setOptions] = useState([
    {
      id: 1,
      value: 'dog',
      label: '狗',
      checked: false,
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
        return option;
      }
    });
    setOptions(newOptions);
  };
  const onToggleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = options.map((option) => {
      return { ...option, checked: e.target.checked };
    });
    setOptions(newOptions);
  };

  return (
    <>
      <h3>核取方塊群組</h3>
      <input
        type="checkbox"
        // Array.every(): 確認所有索引值是否皆符合條件(AND)
        checked={options.every((option) => option.checked)}
        onChange={onToggleCheckAll}
      />
      全選
      <br />
      {options.map((option) => {
        return (
          <label key={option.id}>
            <input
              type="checkbox"
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
