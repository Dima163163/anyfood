export const Counter = ({count, increment, decrement}) => {
  return (
    <>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </>
  )
};