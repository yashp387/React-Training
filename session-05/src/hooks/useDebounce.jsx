import { useState, useEffect, useRef, useCallback } from "react";

export function useDebounceValue(value, delay = 500) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}

export function useDebounceFn(fn, delay = 500) {
  const timeRef = useRef(null);
  return useCallback(
    (...args) => {
      clearTimeout(timeRef.current);
      timeRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay],
  );
}
