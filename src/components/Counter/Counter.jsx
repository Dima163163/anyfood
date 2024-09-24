import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0);

  const addProduct = () => {
    if (count < 5) {
      setCount(count + 1)
    }
  };

  const removeProduct = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };

  return (
    <>
      <button onClick={addProduct}>+</button>
      {count}
      <button onClick={removeProduct}>-</button>
    </>
  )
};