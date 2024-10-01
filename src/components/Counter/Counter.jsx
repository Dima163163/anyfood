export const Counter = ({ count, increment, decrement, styleWrapper,styleBtn}) => {
  return (
    <div className={styleWrapper}>
      <button className={styleBtn} onClick={increment}>+</button>
      {count}
      <button className={styleBtn} onClick={decrement}>-</button>
    </div>
  );
};
