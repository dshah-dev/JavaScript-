import { useState, useEffect } from "react";

function useLocalStorage(key, initialVal){
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return initialVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  },[key, value]);
  return [value, setValue];
}

export default useLocalStorage;