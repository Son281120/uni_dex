import { useEffect, useState } from "react";

const useDebounce = (searchValue: string, delay: number) => {
  const [debaounceValue, setdebaounceValue] = useState<string>(searchValue);
  useEffect(() => {
    const handler = setTimeout(() => {
      setdebaounceValue(searchValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue, delay]);
  return debaounceValue;
};

export default useDebounce;
