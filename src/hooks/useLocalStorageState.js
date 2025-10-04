import { useEffect, useState } from 'react';

export default function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(function () {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return [value, setValue];
}
