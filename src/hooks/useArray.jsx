import { useState } from "react";

function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);
  const push = (element) => setArray((a) => [...a, element]);
  const removeById = (id) => setArray((a) => a.filter((e) => e.id !== id));
  return { array, setArray, push, removeById };
}

export default useArray;
